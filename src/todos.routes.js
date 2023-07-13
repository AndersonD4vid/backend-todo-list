const express = require('express');
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
todosRoutes.get("/todos", async (req, res) => {
   const todo = await prisma.todo.findMany();
   return res.status(200).json(todo);
})
// Update
todosRoutes.put("/todos", async (req, res) => {
   const { id, title, status } = req.body;

   if (!id) {
      return res.status(400).json("id é obrigatório")
   }

   const todoAlreadyExist = await prisma.todo.findUnique({ where: { id } });

   if (!todoAlreadyExist) {
      return res.status(404).json("To-Do não existe")
   }

   const todo = await prisma.todo.update({
      where: {
         id,
      },
      data: {
         title,
         status,
      }
   });
   return res.status(200).json(todo);
});

// Delete

todosRoutes.delete("/todos/:id", async (req, res) => {
   const { id } = req.params;

   const intId = parseInt(id);

   if (!intId) {
      return res.status(400).json("id é obrigatório")
   }

   const todoAlreadyExist = await prisma.todo.findUnique({ where: { id: intId } });

   if (!todoAlreadyExist) {
      return res.status(404).send("To-Do deletado");
   }

   await prisma.todo.delete({
      where: { id: intId }
   });
});


module.exports = todosRoutes;
