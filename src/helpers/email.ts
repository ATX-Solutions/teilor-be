import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

import { BasicEmailOptions } from '../interfaces/email';

const mailtrapTransporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASSWORD,
    },
});

const gmailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
    },
});

const sendInfoEmail = async ({
    transporterType,
    to,
    subject,
    text,
    html,
}: BasicEmailOptions): Promise<SMTPTransport.SentMessageInfo> => {
    const transporter = transporterType === 'mailtrap' ? mailtrapTransporter : gmailTransporter;
    return transporter.sendMail({
        from: process.env.DEFAULT_SENDER,
        to,
        subject,
        text,
        html,
    });
};

export { mailtrapTransporter, gmailTransporter, sendInfoEmail };
