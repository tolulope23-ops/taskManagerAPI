const express = require("express");
const router =  express.Router();
const {signUp, signIn} = require('../controller/user')


router.post("/signUp", signUp);
router.post("/login", signIn);

module.exports = router;