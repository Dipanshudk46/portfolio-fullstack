
const nodemailer = require("nodemailer");

const contactController = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // ✅ validation
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        if (!email.includes("@")) {
            return res.status(400).json({
                success: false,
                message: "Invalid email"
            });
        }

        // transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.APP_PASSWORD
            }
        });

        // mail options
        const mailOptions = {
            from: process.env.EMAIL,
            to: process.env.EMAIL, // you receive message
            subject: `New message from ${name}`,
            text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
            `
        };

        // send mail
        await transporter.sendMail(mailOptions);

        // success response
        res.json({
            success: true,
            message: "Email sent successfully"
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Error sending email"
        });
    }
};



module.exports = {contactController}