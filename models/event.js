var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
    name: {type: String, required: true, max: 100},
    date: {type: Date, required: true},
});


// Export the model
module.exports = mongoose.model('Event', EventSchema);
