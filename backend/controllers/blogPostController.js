import BlogPost from "../models/blogPostModel.js";
import mongoose from "mongoose";
const getAllBlogPosts = async (req, res, next) => {
  try {
    const blogPosts = await BlogPost.find({});
    res.json(blogPosts);
  } catch (error) {
    console.error(`Error fetching  blogPosts: ${error}`);
    next(error);
  }
};

const getBlogPostById = async (req, res, next) => {
  try {
    const id = req.params.id;

    const blogPost = await BlogPost.findById({ _id:id });

    if (!blogPost) {
      return res.status(404).json({ message: "BlogPost non trovato." }); // 404 Not Found
    } else {
      res.json(blogPost);
    }
  } catch (error) {
    console.error("Errore nel backend:", error); // Log dell'errore completo
    res.status(500).json({ message: "Errore interno del server." });
  }
};

const getPaginatedBlogPosts = async (req, res, next) => {
  try {
    const page = req.params.page;
    const blogPosts = await BlogPost.find({}).limit(6).skip(6 * (page - 1));  
    res.json(blogPosts);
  } catch (error) {
    console.error(`Error fetching blogPosts: ${error}`);
    next(error);
  }
};

const getBlogPagesCount = async (req, res, next) => {
  try {
    const countAll = await BlogPost.countDocuments();
    
    const pages = Math.ceil(countAll / 6);
    res.json(pages);
  } catch (error) {
    console.error(`Error fetching blogPosts: ${error}`);
    next(error);
  }
};
const serachBlogPosts = async (req, res, next) => {
  try {
    const page = req.params.page;
   const searchResults = await BlogPost.find({
     titolo: {
       $regex: req.body.titleSearch,
       $options: "i",
     },
     email_autore: {
       $regex: req.body.authorSearch,
       $options: "i",
     },
   }).limit(6).skip(6 * (page - 1))
   res.json(searchResults);
  
  } catch (error) {
    console.error(`Error fetching blogPosts: ${error}`);
    next(error);
  }
}


export { getAllBlogPosts, getBlogPostById,getPaginatedBlogPosts,getBlogPagesCount,serachBlogPosts };
