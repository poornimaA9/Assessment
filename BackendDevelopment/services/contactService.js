const contactRepository = require('../repositories/contactRepository');

const submitContactForm = (name, email, message, callback) => {
    if (!name || !email || !message) {
        return callback(new Error('Please fill in all fields.'));
    }

    contactRepository.createSubmission(name, email, message, (err, result) => {
        if (err) {
            return callback(err);
        }
        callback(null, { success: 'Message sent successfully!', id: result.id });
    });
};

module.exports = {
    submitContactForm
};
