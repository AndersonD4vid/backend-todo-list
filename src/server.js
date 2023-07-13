const express = require('express');
const cors = require('cors');
const todosRoutes = require('./todos.routes');
const app = express();

app.use(express.json());
app.use(cors());
app.use(todosRoutes);



app.get("/teste", (req, res) => {
   return res.json("up")
})

app.listen(3333, () => console.log("Servidor rodando na porta 3333"));