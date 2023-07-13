const express = require('express');
const allTodos = [{ title: 'Estudar', status: false }];
const todosRoutes = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Create
todosRoutes.post("/todos", async (req, res) => {
   const { title } = req.body;
   const todo = await prisma.todo.create({
      data: {
         title
      },
   });
   return res.status(201).json(todo);
})

// Read
todosRoutes.get("/todos", (req, res) => {
   return res.status(200).json(allTodos);
})
// Update

// Delete


module.exports = todosRoutes;
