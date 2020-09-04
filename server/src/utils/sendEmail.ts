import nodemailer from 'nodemailer';

// async..await is not allowed in global scope, must use a wrapper
export default async function sendEmail(to: string, html:string) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
//   const testAccount = await nodemailer.createTestAccount();
//   console.log('testAcct', testAccount);

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 's7l4y3wpkkh6drye@ethereal.email', // generated ethereal user
      pass: '1N1x1FUMnpxbHcCvY5', // generated ethereal password
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to, // list of receivers
    subject: 'Change password', // Subject line
    html, // plain text body
  });

  console.log('Message sent: %s', info.messageId);

  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}
