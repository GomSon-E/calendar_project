const mongoose =  require('mongoose')

const eventSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
    required: true,
  },
  explanations: {
    type: String,
  },
  year: {
    type: Number,
    max: 2100,
    required: true,
  },
  month: {
    type: Number,
    max: 12,
    required: true,
  },
  day: {
    type: Number,
    max: 31,
    required: true,
  },
  _id : {
      type: Number,
      max: 8
  }
});

const Event = mongoose.model('Event', eventSchema)

module.exports = {Event}