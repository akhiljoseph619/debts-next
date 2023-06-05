import fetch from "node-fetch";
import sendgrid from "@sendgrid/mail";
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function (req, res) {
  const { body, method } = req;
  const { name, email, phone, message, recaptcha } = body;

  if (method !== "POST") return res.status(404).send("Not found");
  if (!recaptcha) {
    return res.status(422).json({ error: "Please verify the captcha" });
  }

  try {
    // Ping the google recaptcha verify API to verify the captcha code you received
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptcha}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        },
        method: "POST",
      }
    );
    const captchaValidation = await response.json();
    if (captchaValidation.success) {
      // let nodemailer = require("nodemailer");
      // const transporter = nodemailer.createTransport({
      //   port: process.env.PORT,
      //   host: process.env.SMTP_HOST,
      //   service: 'gmail',
      //   // service: "Outlook365",
      //   auth: {
      //     user: process.env.EMAIL,
      //     pass: process.env.PASSWORD,
      //   },
      //   secure: true,
      // });
      // const mailData = {
      //   from: "noreply@atriaaccounting.ca",
      //   to: "akhiljoseph619@gmail.com",
      //   subject: `[Lead from website] : ${email}`,
      //   html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      //       <html lang="en">
      //       <head>
      //         <meta charset="utf-8">
      //       </head>

      //       <body>
      //         <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
      //               </div>
      //               <div class="container" style="margin-left: 20px;margin-right: 20px;">
      //               <h3>You've got a new mail from ${name}, their phone is: ✉️ ${email}, their phone is: ${phone} </h3>
      //               <div style="font-size: 16px;">
      //               <p>Message:</p>
      //               <p>${message}</p>
      //               <br>
      //               </div>
      //               </div>
      //       </body>
      //       </html>`,
      // };
      // transporter.sendMail(mailData, function (err, info) {
      //   if (err){
      //       console.log(err);
      //       return res.status(500).json({ error: "Failed to Submit Details" });
      //   }
      //   else return res.status(200).send("OK");
      // });
      try {
        await sendgrid.send({
          to: "info@adventz.net", // Your email where you'll receive emails
          from: "info@debtsolutionsgroup.ca", // your website email address here
          subject: `[Lead from website] : ${email}`,
          html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
          <html lang="en">
          <head>
            <meta charset="utf-8">
          </head>

          <body>
            <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
                  </div>
                  <div class="container" style="margin-left: 20px;margin-right: 20px;">
                  <h3>You've got a new mail from ${name}, their phone is: ✉️ ${email}, their phone is: ${phone} </h3>
                  <div style="font-size: 16px;">
                  <p>Message:</p>
                  <p>${message}</p>
                  <br>
                  </div>
                  </div>
          </body>
          </html>`,
        });
        return res.status(200).send("OK");
      } catch (error) {
        // console.log(error);
        return res
          .status(error.statusCode || 500)
          .json({ error: error.message });
      }
    } else {
      return res.status(422).json({
        error: "Unable to process request, Invalid captcha code",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(422).json({ error: "Something went wrong" });
  }
}
