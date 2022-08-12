import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    source: {
      id: { type: String, required: true },
      name: { type: String, requried: true },
    },
    author: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    urlToImage: { type: String, required: true },
    publishedAt: { type: String, required: true },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const news = mongoose.model("news", newsSchema);
export default news;
