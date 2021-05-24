var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const { getUserById, getUser, updateUser, userPurchaseList } = require("../controllers/user");
const { isAdmin, isAuthenticated, isSignedIn } = require("../controllers/auth");
const { route } = require("./auth");

router.param("userId", getUserById);

router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);

router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);

router.get("/orders/user/:userId", isSignedIn, isAuthenticated, userPurchaseList);


module.exports = router;