// EmailSender.js
import nodemailer from 'nodemailer';

// Function to send an email
export async function sendEmail(subject, text) {
  const transporter = nodemailer.createTransport({
    service: 'SendGrid',
    auth: {
        user: 'ericksoi3709@gmail.com',
        pass: 'gsbf yben dvee pkjr',
    },
  });

  const mailOptions = {
    from: 'your-email@example.com', // Sender email address
    to: 'recipient@example.com',   // Receiver email address
    subject: subject,
    text: text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}
