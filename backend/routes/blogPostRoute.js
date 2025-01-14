import express from "express";
import {
  getAllBlogPosts,
  getBlogPagesCount,
  getBlogPostById,
  getPaginatedBlogPosts,
  serachBlogPosts,
} from "../controllers/blogPostController.js";

const router = express.Router();

router.get("/count", getBlogPagesCount);
router.get("/page/:page", getPaginatedBlogPosts);
router.get("/post/:id", getBlogPostById);
router.post("/search", serachBlogPosts);
router.get("/", getAllBlogPosts);

// router.post('/new',createBlogPost)
// router.put('/:id',putBlogPost)
// router.delete('/:id',deleteBlogPost)
export { router };
