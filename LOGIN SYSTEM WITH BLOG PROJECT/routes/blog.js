const express = require("express");
const router = express.Router();
const Blog = require("../models/blog.js");
const User = require("../models/user.js");

function isAuth(req, res, next) {
  if (!req.session.userId) return res.redirect("/auth/login");
  next();
}

router.get("/dashboard", isAuth, async (req, res) => {
  const blogs = await Blog.find({ author: req.session.userId });
  res.render("dashboard", { blogs });
});

router.get("/post", isAuth, (req, res) => res.render("post"));

router.post("/post", isAuth, async (req, res) => {
  const { title, content } = req.body;
  await Blog.create({ title, content, author: req.session.userId });
  res.redirect("/dashboard");
});

module.exports = router;