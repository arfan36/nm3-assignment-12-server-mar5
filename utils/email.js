// const nodemailer = require("nodemailer");
// const mg = require("nodemailer-mailgun-transport");

// send mail to buyer
function sendMail(booking) {
	const { buyerEmail, phoneName } = booking;

	const auth = {
		auth: {
			api_key: process.env.EMAIL_SEND_KEYS,
			domain: process.env.EMAIL_SEND_DOMAIN,
		},
	};

	const transporter = nodemailer.createTransport(mg(auth));

	transporter.sendMail(
		{
			from: "arfanur36@outlook.com",
			to: buyerEmail || "arfanur36@gmail.com", // An array if you have multiple recipients.
			cc: "",
			bcc: "",
			subject: `Your booking for ${phoneName} is confirmed`,
			replyTo: "",
			//You can use "html:" to send HTML email content. It's magic!
			html: "<b>Wow Big powerful letters</b>",
			//You can use "text:" to send plain-text content. It's oldschool!
			text: "Mailgun rocks, pow pow!",
		},
		(err, info) => {
			if (err) {
				console.log(`Error: ${err}`);
			} else {
				console.log(`Response: ${info}`);
			}
		}
	);
}

module.exports = sendMail;
