const { SEND_GRID_API_KEY, BASE_URL, PORT, } = require("../helpers/env");
const sgMail = require('@sendgrid/mail')


const sendEmail = async (usereEmail, code) => {

  sgMail.setApiKey(SEND_GRID_API_KEY)
  const link = `${BASE_URL}${PORT}/api/users/verify/${code}`
  const msg = {
    to: usereEmail, // Change to your recipient
    from: 'goit.learn.fs@gmail.com', // Change to your verified sender
    subject: 'Confirm your email',
    text: 'and easy to do anywhere, even with Node.js',
    html: `<h4>Click on this link to confirm  registration ${link}</h4>`,
  }

  try {
    const result = await sgMail.send(msg);
    console.log(result);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  sendEmail,
}