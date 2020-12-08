const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'de1tmi3t63foh7fa.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'in8bjremogpis4xu',
  password: 'b5xllbh21uxjjowo',
  database: 'zb8blaa08dsktf83'
});
connection.connect();

const sender = 'francoisng978%40gmail.com'
const password = 'oneMillie123$'

const nodemailer = require("nodemailer");
const { check, validationResult } = require('express-validator');

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

//error checking included in the backend for showing purposes, usually i would include this in the frontend less $ spent
router.post('/sendMessage', [
  check('name', 'name must be written').isLength({ min: 1 }),
  check('title', 'Theres no title!').isLength({ min: 1 }),
  check('email', 'Im missing your email :(').isEmail().normalizeEmail(),
  check('message', 'Say something in your message').isLength({ min: 5 }),
],
  function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('hit')
      return res.status(400).json(errors.array());
    } else {
      /**
       * Checks if message was sent succesfully
       * @param {String} infoMessage
       * 
       */
      function checkEmailEmail(infoMessage) {
        if (infoMessage != null) {
          res.status(200).json('successfully sent')
        }
      }
      /**
       * 
       * Send the email to keviny4n@hotmail.com
       * @param {string} firstName
       * @param {string} lastName
       * @param {string} email
       * @param {string} title
       * @param {string} message
       * 
       * @returns {null}
       */

      async function sendMail(firstName, email, title, message) {

        //Lets us a test account for my website
        let testAccount = await nodemailer.createTestAccount();
        //Create a transport
        var transporter = nodeMailer.createTransport(sender + ':' + password + '@smtp.gmail.com');


        //Sending the email
        let info = await transporter.sendMail({
          from: firstName + '<' + email + '>',
          to: "keviny4n@hotmail.com",
          subject: title,
          text: message,
        });
        await checkEmailEmail(info.messageId)
      }

      const { firstName, email, title, message } = req.body

      sendMail(firstName, email, title, message).catch((error) => {
        console.log("error:", error);
        res.status(400).json('ruht roh problems on our end');
      });
    }
  })

router.get('/getBookInfo', (req, res) => {
  connection.query('SELECT * FROM books JOIN authors ON books.author = authors.id', (error, results) => {
    if (error)
      res.status(400).json('Problems with database please try again')
    else
      res.status(200).json(results);
  })
})

router.get('/getPageFilter', (req, res) => {
  connection.query('SELECT * FROM books JOIN authors ON books.author = authors.id WHERE pages>299', (error, results) => {
    if (error)
      res.status(400).json('Problems with database please try again')
    else
      res.status(200).json(results);
  })
})
router.get('/getAuthorFilter', (req, res) => {
  connection.query('SELECT * FROM books JOIN authors ON books.author = authors.id WHERE author=7', (error, results) => {
    if (error)
      res.status(400).json('Problems with database please try again')
    else
      res.status(200).json(results);
  })
})
module.exports = router;
