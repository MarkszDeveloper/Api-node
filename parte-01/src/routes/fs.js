const mongoose = require("mongoose");
const { Schema } = mongoose;
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    console.log("Tipo de requisição: " + req.method);
    next();
});
connectDatabase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_API_BASENAME}.ndqwj.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.MONGODB_API_BASENAME}`)
    .then(() => {
        console.log("Conexão efetuada com sucesso!")
    })
    .catch((erro) => {
        throw erro;
    });
};
dotenv.config();
connectDatabase();

const SchemaSerie3 = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    duration: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
});

const Serie3 = mongoose.model("Series 222", SchemaSerie3);

// const router = express.Router();
// app.use("/api", router);

app.listen(3433, () => {
    console.log("Ta rodando de boa");
})

app.get("/", async (req, res) => {
    const filmes = await Serie3.find();
    res.status(200).json(filmes);
});

app.delete("/filme/remover/:id", async (req, res) => {
    const filmeDeletado = await Serie3.findByIdAndDelete(req.params.id);
    res.status(200).json(filmeDeletado);
});


app.post("/filme/adicionar", async (req, res) => {
    try {
        const propriedades = req.body;
        const serie = await Serie3.create({
            name: propriedades.name,
            duration: propriedades.duration,
            year: propriedades.year
        }); 
        console.log(serie);
        res.status(200).send("Filme adicionado com sucesso!");
        console.log("Post executado corretamente!");
    } catch (error) {
        res.status(400).send("Nome já em uso ou propriedade inválida!");
    }
});

app.patch("/filme/atualizar/name/:id/:valor", async(req, res) => {
    let id = req.params.id;
    if (!id) throw new Error("Id inválido");
    let valorNome = req.params.valor;
    await Serie3.findByIdAndUpdate(id, {name: valorNome});
    res.status(200).json("Nome atualizado com sucesso!");
});

app.put("/filme/atualizar/:id", async(req, res) => {
    let id = req.params.id;
    if (!id) throw new Error("Id inválido");
    await Serie3.findByIdAndUpdate(id, req.body);
    res.status(200).json("Filme atualizado com sucesso!");
});

// const server = http.createServer((req, res) => {
//     fs.readFile(path.join(__dirname, "a.txt"), (err, arquivo) => {
//         res.write(arquivo)
//         return res.end();
//     });
// })

// server.listen(3500, () => {
//     console.log("Rodando");
// });

// fs.appendFile(path.join(__dirname, "valor.txt"), "\n escrevendo aaaaaaaa", (erro, dados) => {
//     if (erro) throw erro;
//     console.log("Deu certo!");
// });

// fs.readFile(path.join(__dirname, "valor.txt"), "utf8", (error, conteudo) => {
//     if (error) throw error;
//     console.log(conteudo);
// });


