var mongoose = require('mongoose');

const fellowdetailsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    batch: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('fellow', fellowdetailsSchema);

