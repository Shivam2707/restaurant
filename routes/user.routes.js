const express = require("express");
const routes = require("../utils/routeConstants");
const middlewares = require("../middlewares")
const userController = require("../controllers/userController")
const router = express.Router();

//     /v/auth/register
router.post(routes.userAuth.register,middlewares.verifyToken, userController.register);
// router.post(, middlewares.verifyToken ,userController.dashboard)
module.exports = router;