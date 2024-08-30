const contactService = require('../services/contactService');

const handleFormSubmission = (req, res) => {
    const { name, email, message } = req.body;

    contactService.submitContactForm(name, email, message, (err, result) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.status(200).json(result);
        console.log("poornima");
    });
};

module.exports = {
    handleFormSubmission
};
