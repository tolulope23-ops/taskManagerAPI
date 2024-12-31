const express = require("express");
const router =  express.Router();
const {signUp, logIn} = require('../controller/user')


router.post("/signUp", signUp);
router.post("/login", logIn);

module.exports = router;