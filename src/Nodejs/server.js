// server.js (Node.js/Express.js)

const express = require('express');
const sendGridMail = require('@sendgrid/mail');
const app = express();

const SENDGRID_API_KEY = 'YOUR_SENDGRID_API_KEY';
sendGridMail.setApiKey('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');

app.use(express.json());

app.post('/send-email', async (req, res) => {
  try {
    const message = req.body;
    await sendGridMail.send(message);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'An error occurred while sending the email' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});