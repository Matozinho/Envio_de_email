require("dotenv").config();

module.exports = {
  host: "smtp.gmail.com",
  port: 587,
  user: process.env.GMAIL_USER,
  pass: process.env.USER_PASS,
};
