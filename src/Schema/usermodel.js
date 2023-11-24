import mongoose from "mongoose";
const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [3, "name is too short"],
    maxlength: [20, "name is too long"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "password is too short"],
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
mongoose.models = {};
export const usermodel = mongoose.model("Users", schema);
