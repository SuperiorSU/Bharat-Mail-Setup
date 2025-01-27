// send email to a user
const { sendRegistrationEmail } = require('../service/emailService');

const sendEmail = async (req, res) => {
    try {
        const { email, name } = req.body;
        await sendRegistrationEmail(email, name);
        res.status(200).json({ message: 'Email sent successfully' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = { sendEmail };

