const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Desafio 1 Back End");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});

const albuns = [
    {
        id: 1,
        artista: "Gaby Amarantos",
        titulo: "Rock Doido",
        faixas: [
            "Te Amo Fudido",
            "Eu Tô Solteira",
            "Foguinho",
        ],
        ano: 2025
    },
    {
        id: 2,
        artista: "Liniker",
        titulo: "CAJU",
        faixas: [
            "TUDO",
            "POPSTAR",
            "FEBRE",
        ],
        ano: 2024
    },
    {
        id: 3,
        artista: "Beyoncé",
        titulo: "Dangerously In Love",
        faixas: [
            "Be With You",
            "Me, Myself And I",
            "Dangerously In Love",
        ],
        ano: 2003
    },
    {
        id: 4,
        artista: "Rihanna",
        titulo: "Good Girl Gone Bad: Reloaded",
        faixas: [
            "Don't Stop the Music",
            "Hate That I Love You",
            "Take A Bow",
        ],
        ano: 2008
    },
    {
        id: 5,
        artista: "Brandy",
        titulo: "Full Moon",
        faixas: [
            "I Thought",
            "Full Moon",
            "When You Touch Me",
        ],
        ano: 2002
    },
];

app.get("/albuns", (req, res) => {
    res.json(albuns);
});

app.get("/albuns/:id", (req, res) => {

    const id = Number(req.params.id);

    const album = albuns.find((albuns) => albuns.id === id);

    res.json(album);
});

app.post("/albuns", (req, res) => {

    const newAlbum = {
        id: albuns.length + 1,
        artista: req.body.artista,
        titulo: req.body.titulo,
        faixas: req.body.faixas,
        ano: req.body.ano,
    };

    albuns.push(newAlbum);

    res.send(`O album ${newAlbum.titulo} foi cadastrado com sucesso!`);
});
