const express = require('express');
const path = require('path');
const printer = require('pdf-to-printer');

const app = express();
app.use(express.json());

// Print endpoint
app.post('/printKitchen', async (req, res) => {
  const { pdfPath, printerName } = req.body;

  if (!pdfPath || !printerName) {
    return res.status(400).send('Missing required parameters: pdfPath and printerName');
  }

  try {
    await printer.print(path.resolve(pdfPath), { printer: printerName, scale: 'fit' });
    res.status(200).send('Print job sent successfully');
  } catch (error) {
    console.error('Printing error:', error);
    res.status(500).send('Print job failed');
  }
});

app.post('/printCashier', async (req, res) => {
  const { pdfPath, printerName } = req.body;

  if (!pdfPath || !printerName) {
    return res.status(400).send('Missing required parameters: pdfPath and printerName');
  }

  try {
    await printer.print(path.resolve(pdfPath), { printer: printerName, scale: 'fit' });
    res.status(200).send('Print job sent successfully');
  } catch (error) {
    console.error('Printing error:', error);
    res.status(500).send('Print job failed');
  }
});
const port = 3001;
app.listen(port, () => {
  console.log(`Printing service running on port ${port}`);
});
