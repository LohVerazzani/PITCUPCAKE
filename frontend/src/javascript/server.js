import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;


app.use(cors());
app.use(bodyParser.json());


let usuarios = [];


app.post("/cadastrar", (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ message: "Preencha todos os campos!" });
  }

  const novoUsuario = { nome, email, senha };
  usuarios.push(novoUsuario);

  console.log("Usuário cadastrado:", novoUsuario);
  res.json({ message: "Usuário cadastrado com sucesso!", usuario: novoUsuario });
});


app.get("/", (req, res) => {
  res.send("Servidor PITCUPCAKE rodando! 🚀");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});