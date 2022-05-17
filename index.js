var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.PASSWORD,
  },
});

var mailOptions = {
  from: process.env.USER_EMAIL,
  to: process.env.RECEIVER,
  subject: "Test email with Nodejs",
  text: "Will this break? Probably not",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
