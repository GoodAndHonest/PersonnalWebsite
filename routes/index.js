const express = require('express');
const router = express.Router();
const mysql = require('mysql');

require('dotenv').config();

const gmailUsername = process.env.GMAIL_LOGIN_EMAIL;
const gmailPassword = process.env.GMAIL_LOGIN_PASSWORD;

const MYSQLHOST = process.env.MYSQL_HOST
const MYSQLUSER = process.env.MYSQL_USER
const MYSQLPASSWORD = process.env.MYSQL_PASSWORD;
const MYSQLDATABASE = process.env.MYSQL_DATABASE;

const connection = mysql.createConnection({
  host: MYSQLHOST,
  user: MYSQLUSER,
  password: MYSQLPASSWORD,
  database: MYSQLDATABASE
});
connection.connect();



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
            user: gmailUsername,
            pass: gmailPassword
          }
        });
        //Sending the email
        let info = await transporter.sendMail({
          from: firstName + '<' + email + '>',
          to: "sunnyhachem@gmail.com",
          subject: title,
          text: message,
        }, (err, response) => {
          if (err) {
            console.log("err:",err);
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
          res.status(400).json('ruht roh problems on our end')
        }
        else {
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
    if (error)
      res.status(400).json('Problems with database please try again')
    else
      res.status(200).json(results);
  })
})
router.get('/getAuthorFilter', (req, res) => {
  connection.query('SELECT * FROM books JOIN authors ON books.author = authors.id WHERE author=7', (error, results) => {
    if (error) {
      res.status(400).json('Problems with database please try again')
    }
    else {
      res.status(200).json(results);
    }
  })
})
module.exports = router;
