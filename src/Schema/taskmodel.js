import mongoose from "mongoose";

const schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: [4, "title is too short"],
  },
  description: {
    type: String,
    required: true,
    minlength: [4, "description is too short"],
  },
  iscompleted: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "usermodel",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const taskModel =
  mongoose.models.Tasks || mongoose.model("Tasks", schema);
