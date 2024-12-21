const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isExpert: {
    type: Boolean,
    default: false,
  },
  expertise: {
    expertiseDomain: {
      type: String,
      required: false, // Only required for experts
    },
    experience: {
      type: String,
      required: false, // Only required for experts
    },
    rates: {
      type: String,
      required: false, // Only required for experts
    },
    documents: {
      type: String, // Path to document if uploaded
      required: false, // Only required for experts
    },
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
