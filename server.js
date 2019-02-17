const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Nodemailer code
//---------------------------------------------
app.post('/send-email', (req, res) => {
  //create an output variable for the html that is going to be sent
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Nombre: ${req.body.nombre}</li>
      <li>Email: ${req.body.email}</li>
      <li>Referencia: ${req.body.referencia}</li>
    </ul>
    <h3>Mensaje</h3>
    <p>${req.body.mensaje}</p>
  `;
  const CONTACT_ADDRESS = 'contact@gmail.com';

  //site owner addsd credentials here
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'contact@gmail.com',
      pass: 'XXXXX'
    }
  });

  let mailOptions = {
    from: req.body.email, // sender address
    to: [CONTACT_ADDRESS], // list of receivers
    subject: 'Node contact request', // Subject line
    text: req.body.mensaje, // plain text body
    html: output // html body
  };
  //send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
    res.sendFile(path.join(__dirname + '/index.html'));
  });
});

//---------------------------------------------

app.listen(port, () => {
  console.log('Server started on port ' + port);
});
