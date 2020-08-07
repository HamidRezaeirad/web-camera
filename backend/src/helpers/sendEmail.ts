"use strict";
import nodemailer from "nodemailer";
import config from "config";
import { SendEmailParams } from "../interfaces";

const sendEmail = async (params: SendEmailParams) => {
  const { from, to, subject, html, attachments } = params;
  let transporter = nodemailer.createTransport({
    host: config.get("mail.smtp"),
    port: config.get("mail.port"),
    secure: false,
    auth: {
      user: config.get("mail.user"),
      pass: config.get("mail.password"),
    },
  });

  let info = await transporter.sendMail({
    from,
    to,
    subject,
    html,
    attachments,
  });

  return info;
};

export { sendEmail };
