const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

app.post('/update-sla-date', (req, res) => {
  const newData = req.body;
  const filePath = path.join(__dirname, 'data/sla.js');

  let updatedData = `
export const SLA_DATE = {
  value: "${newData.SLA_DATE}"
};

export const SLA_RESIDENTAL_EMPLOYED = {
  title: "Residential employed",
  value: "${newData.SLA_RESIDENTAL_EMPLOYED}"
};

export const SLA_RESIDENTAL_SELF_EMPLOYED = {
  title: "Residential self-employed",
  value: "${newData.SLA_RESIDENTAL_SELF_EMPLOYED}"
};

export const SLA_BUY_TO_LET = {
  title: "Buy to let",
  value: "${newData.SLA_BUY_TO_LET}"
};

export const SLA_ASSESSING_SUPPORTING_DOCUMENTS = {
  title: "Assessing <strong>supporting documents</strong>",
  value: "${newData.SLA_ASSESSING_SUPPORTING_DOCUMENTS}"
};

export const SLA_RESPONDING_BROKER_MESSAGES = {
  title: "Responding to <strong>Broker messages</strong>",
  value: "${newData.SLA_RESPONDING_BROKER_MESSAGES}"
};

export const SLA_REVIEWING_APPLICATION_AMENDMENT_FORMS = {
  title: "Reviewing <strong>Application Amendment Forms</strong>",
  value: "${newData.SLA_REVIEWING_APPLICATION_AMENDMENT_FORMS}"
};

export const SLA_ANSWERING_TIME = {
  title: "Call Answering Time",
  value: "${newData.SLA_ANSWERING_TIME}"
};

export const SLA_MONTH = {
  value: "${newData.SLA_MONTH}"
};
  `;

  fs.writeFile(filePath, updatedData, (err) => {
    console.log(updatedData)
    if (err) {
      console.error('Error updating SLA_DATE:', err);
      res.status(500).send('Error updating SLA_DATE');
    } else {
      console.log('SLA_DATE updated successfully');
      res.status(200).send('SLA_DATE updated successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
