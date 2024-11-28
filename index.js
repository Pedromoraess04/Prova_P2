const express = require('express');
const app = express();
const port = 3000;
const sequelize = require('./config/sequelize'); 
const Contract = require('./models/Contracts'); 

app.use(express.json());

app.get('/contracts', async (req, res) => {
    try {
        const contracts = await Contract.findAll(); 
        res.json(contracts); 
    } catch (error) {
        console.error('Erro ao buscar contratos:', error);
        res.status(500).json({ message: 'Erro ao buscar contratos', error });
    }
});
app.get('/contracts/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const contract = await Contract.findByPk(id); 
        if (contract) {
            res.json(contract); 
        } else {
            res.status(404).json({ message: 'Contrato não encontrado' }); 
        }
    } catch (error) {
        console.error('Erro ao buscar contrato:', error);
        res.status(500).json({ message: 'Erro ao buscar contrato', error });
    }
});
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);

    sequelize.authenticate()
        .then(() => {
            console.log('Conexão com o banco de dados bem-sucedida!');
        })
        .catch(err => {
            console.error('Erro na conexão com o banco de dados:', err);
        });
});
app.post('/contracts', async (req, res) => {
    const { terms, clientId, contractorId, status, operationDate, profileId } = req.body;
    try {
        const newContract = await Contract.create({
            terms,
            clientId,
            contractorId,
            status,
            operationDate,
            profileId, 
        });
        res.status(201).json(newContract); 
    } catch (error) {
        console.error('Erro ao criar contrato:', error);
        res.status(500).json({ message: 'Erro ao criar contrato', error });
    }
});

