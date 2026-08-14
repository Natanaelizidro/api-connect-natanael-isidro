const express = require('express');
const app = express();

app.use(express.json());

// Banco de dados simulado na memória
const dados = {
    usuarios: [],
    proximoId: 1
};

// POST - Criar usuário
app.post('/api/usuarios', (req, res) => {
    const { nome, email } = req.body;

    if (!nome || !email) {
        return res.status(400).json({
            error: "Nome e e-mail são obrigatórios."
        });
    }

    const usuario = {
        id: dados.proximoId++,
        nome: nome,
        email: email
    };

    dados.usuarios.push(usuario);

    return res.status(201).json({
        data: usuario
    });
});

// GET - Listar usuários
app.get('/api/usuarios', (req, res) => {
    return res.status(200).json({
        data: dados.usuarios
    });
});

// GET - Buscar usuário por ID
app.get('/api/usuarios/:id', (req, res) => {
    const id = Number(req.params.id);

    const usuario = dados.usuarios.find(u => u.id === id);

    if (!usuario) {
        return res.status(404).json({
            error: "Usuário não encontrado."
        });
    }

    return res.status(200).json({
        data: usuario
    });
});

// PUT - Atualizar usuário
app.put('/api/usuarios/:id', (req, res) => {
    const id = Number(req.params.id);
    const indice = dados.usuarios.findIndex(u => u.id === id);

    if (indice === -1) {
        return res.status(404).json({
            error: "Usuário não encontrado."
        });
    }

    const { nome, email } = req.body;

    if (!nome || !email) {
        return res.status(400).json({
            error: "Nome e e-mail são obrigatórios."
        });
    }

    dados.usuarios[indice] = {
        id: id,
        nome: nome,
        email: email
    };

    return res.status(200).json({
        data: dados.usuarios[indice]
    });
});

// DELETE - Excluir usuário
app.delete('/api/usuarios/:id', (req, res) => {
    const id = Number(req.params.id);
    const indice = dados.usuarios.findIndex(u => u.id === id);

    if (indice === -1) {
        return res.status(404).json({
            error: "Usuário não encontrado."
        });
    }

    dados.usuarios.splice(indice, 1);

    return res.status(204).send();
});

// Iniciar servidor
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso na porta ${PORT}`);
});
