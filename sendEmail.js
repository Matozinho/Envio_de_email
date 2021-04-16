const nodemailer = require("nodemailer");
const SMTP_CONFIG = require("./config/smtp");

const transporter = nodemailer.createTransport({
  host: SMTP_CONFIG.host,
  port: SMTP_CONFIG.port,
  secure: false,
  auth: {
    user: SMTP_CONFIG.user,
    pass: SMTP_CONFIG.pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports.sendMail = (name, phone) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (name && phone && phone.length == 11) {
        const mailSent = await transporter
          .sendMail({
            text: `
          name: ${name}
          phone: ${phone}
          `,
            subject: `LEAD!`,
            from: `"Oportunidade no Interior <${process.env.GMAIL_USER}>"`,
            to: process.env.EMAIL_DESTINY,
          })
          .catch((err) => reject(500));

        console.log(mailSent);
        resolve(200);
      } else throw new Error("Inputs preenchidos incorretamente!");
    } catch (err) {
      reject(400);
    }
  });
};
