// server.js
const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const accountSid = 'YOUR_TWILIO_SID';
const authToken = 'YOUR_TWILIO_AUTH_TOKEN';
const client = twilio(accountSid, authToken);

app.post('/send-sms', (req, res) => {
  const { name, phone, email, address, service } = req.body;

  const message = `New JP Pool Request:\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\nAddress: ${address}`;

  client.messages
    .create({
      body: message,
      from: '+18339855238', // Your Twilio number
      to: '+OWNER_PHONE_NUMBER'
    })
    .then(() => res.send('Request sent!'))
    .catch(err => res.status(500).send('SMS failed: ' + err));
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
