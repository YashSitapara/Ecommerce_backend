const express = require("express");
const router = express.Router();

const { getCategoryById , createCategory, getCategory, getAllCategory, updateCategory, removeCategory } = require("../controllers/category");
const { getUserById } = require("../controllers/user");
const { isAdmin , isAuthenticated , isSignedIn } = require("../controllers/auth");

// Params
router.param("userId", getUserById);
router.param("categoryId", getCategoryById);

// Routes
router.post("/category/create/:userId", isSignedIn, isAuthenticated, isAdmin, createCategory);  // CREATE CATEGORY
router.get("/category/:categoryId", getCategory);  // GET A CATEGORY
router.get("/categories", getAllCategory);    // GET ALL CATEGORIES
router.put("/category/:categoryId/:userId", isSignedIn, isAuthenticated, isAdmin, updateCategory);   // UPDATING CATEGORY
router.delete("/category/:categoryId/:userId", isSignedIn, isAuthenticated, isAdmin , removeCategory);  // DELETING CATEGORY

// EXPORT ROUTER
module.exports = router;