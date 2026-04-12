const { Resend } = require("resend")

const resend = new Resend(process.env.RESEND_API_KEY)

const contactController = async (req, res) => {
    try {
        const { name, email, message } = req.body

        // validation
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        if (!email.includes("@")) {
            return res.status(400).json({
                success: false,
                message: "Invalid email"
            })
        }

        // send email using Resend
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: process.env.EMAIL, 
            subject: `New message from ${name}`,
            html: `
                <h3>New Contact Message</h3>
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Message:</b> ${message}</p>
            `
        })

        res.status(200).json({
            success: true,
            message: "Email sent successfully"
        })

    } catch (error) {
        console.log("ERROR:", error)

        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = { contactController }