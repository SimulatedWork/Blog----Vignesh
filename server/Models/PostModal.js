import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    data: {
      type: String,
      required: true,
    },
    likes: [],
  },
  { timestamps: true }
);

const PostModel = mongoose.model("posts", postSchema);
export default PostModel;
