let nodemailer = require("nodemailer");
let fs = require("fs");
async function gmailsend(email) {
  try {
    myEmail = "ravianandfbg@gmail.com";
    pwd = ".ravi.anand.@2001";
    // pwd = fs.readFileSync("../password.txt", "utf-8");
    let transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465, //587 for false
      secure: true, // use SSL
      service: "gmail",
      auth: {
        user: myEmail,
        pass: pwd,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    let message = {
      from: myEmail,
      to: email,
      subject: "COVID-19 Info",
      text: "Here is your result!",
      attachments: [
        {
          filename: ["Coping.pdf" , "News.pdf" , "Preventations.pdf" , "Symptoms.pdf" , "Treatments.pdf"] , 
          path: [`./Coping.pdf`, `News.pdf` , `Preventations.pdf` , `Symptoms.pdf` , `Treatments.pdf`]
        },
      ],
    };
    transport.sendMail(message, function (err) {
      if (err) {
        console.log("Failed to send email.\n" + err.message);
        return;
      }
      console.log(`Email sent to ${email} \n check your email.`);
    });
  } catch (err) {
    console.log("ERROR CAUGHT IN notification.js> gmailsend()  \n", err);
  }
}

let whatsappNotify = (email) => {
  // ACfbbf040139a233b0635f63a153c52c24 -- > sid
  // d323778cd7bcf02d0aa644c19d72044b -- > token
  const accountSid = "ACfbbf040139a233b0635f63a153c52c24";
  const authToken = "d323778cd7bcf02d0aa644c19d72044b";

  const client = require("twilio")(accountSid, authToken);

  client.messages
    .create({
      body: `Your cab comparison has been mailed to you. Please check your email: ${email}`,
      from: "whatsapp:+14155238886",
      to: "whatsapp:+919521384395",
    })
    .then((message) => console.log())
    .catch((err) => {
      console.log("ERROR CAUGHT IN notification.js> whatsappNotify()",err);
    });
};

module.exports.gmailsend = gmailsend;
module.exports.whatsappNotify = whatsappNotify;