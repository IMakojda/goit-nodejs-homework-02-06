const { Schema, model } = require('mongoose');
const Joi = require('joi');

const schema = new Schema(
  {
    password: {
      type: String,
      required: [true, 'Set password for user'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter"
    },
    token: String
  }, { timestamps: true }
)

const User = model('user', schema);

const schemaRegister = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
  subscription: Joi.string(),
  token: Joi.string(),
});

const schemaLogin = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),

});


module.exports = {
  User,
  schemaRegister,
  schemaLogin
};



