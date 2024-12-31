const express = require("express");
const router =  express.Router();

const {addTodo, displayTodos, updateTodo, displayTodo, deleteTodo} = require('../controller/upcoming');

router.post("/addTodo", addTodo);
router.get("/", displayTodos);
router.get("/:id", displayTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);


module.exports = router;