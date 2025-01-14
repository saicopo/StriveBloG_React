import mongoose from "mongoose";
import "dotenv/config";
const blogPostSchema = new mongoose.Schema({
  titolo: String,
  contenuto: String,
  data_di_pubblicazione: Date,
  email_autore: String,
  categoria: String,
  cover: String,
});

const BlogPost = mongoose.model(
  process.env.BLOGPOST_COLLECTION,

  blogPostSchema
);

export default BlogPost;
