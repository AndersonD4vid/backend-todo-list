const express = require('express');
const todosRoutes = require('./todos.routes');
const app = express();

app.use(express.json());
app.use(todosRoutes);


app.get("/teste", (req, res) => {
   return res.json("up")
})

app.listen(3333, () => console.log("Servidor rodando na porta 3333"));