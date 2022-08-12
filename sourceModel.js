import mongoose from "mongoose";

const sourceSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    category: { type: String, required: true },
    language: { type: String, required: true },
    country: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const source = mongoose.model("sources", sourceSchema);
export default source;
