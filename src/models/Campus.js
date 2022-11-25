import { model, Schema } from "mongoose";
import { Thread } from "./Thread.js";

const campusSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  accreditation: {
    type: String,
    required: true,
    trim: true,
  },
  imageUrl: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  threads: [Thread.schema],
});

export const Campus = model("Campus", campusSchema);
