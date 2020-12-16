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
  check('name', 'Your name must be included').isLength({ min: 1 }),
  check('title', 'Theres no title').isLength({ min: 1 }),
  check('email', 'Im missing your email').isEmail().normalizeEmail(),
  check('message', 'Say something in your message').isLength({ min: 5 }),
],
  function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("errors:", errors.array());
      return res.status(400).json(errors.array());
    } else {
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

        var transporter = nodemailer.createTransport({
          service: 'Gmail',
          port: 465,
          auth: {
            user: 'keviny4n@gmail.com',
            pass: 'Windowxp668202$'
          }
        });
        //Sending the email
        let info = await transporter.sendMail({
          from: firstName + '<' + email + '>',
          to: "keviny4n@gmail.com",
          subject: title,
          text: message,
        }, (err, response) => {
          if (err) {
            res.status(400).json('problems on our end. You can still send me an email at keviny4n@gmail.com');
          }
          if (response) {
            res.status(200).json('sucessfully sent. Talk to you soon!');
          }
          else return
        });
      }

      const { firstName, email, title, message } = req.body

      sendMail(firstName, email, title, message).catch((error) => {
        if (error) {
          console.log('hit')
          res.status(400).json('ruht roh problems on our end')
        }
        else {
          console.log('hit')
          res.status(200).json('message send succesfully we will get in touch soon')
        }
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
    console.log("res:", results)
    if (error)
      res.status(400).json('Problems with database please try again')
    else
      res.status(200).json(results);
  })
})
router.get('/getAuthorFilter', (req, res) => {
  connection.query('SELECT * FROM books JOIN authors ON books.author = authors.id WHERE author=7', (error, results) => {
    console.log(results)
    if (error) {
      console.log('hit')
      res.status(400).json('Problems with database please try again')
    }
    else {
      console.log('hit')
      res.status(200).json(results);
    }
  })
})
module.exports = router;
