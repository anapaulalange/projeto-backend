const express = require("express") //iniciando o express
const router = express.Router() //configurando a primeira parte da rota
const { v4: uuidv4 } = require('uuid');

const app = express() //iniciando o app
app.use(express.json())
const porta = 3333 //criação da porta

const mulheres = [
    {
        id: '1',
        nome: 'Ana Paula Lange Gomes',
        imagem: 'https://media.licdn.com/dms/image/C4D03AQFgNSytafyXXw/profile-displayphoto-shrink_200_200/0/1660619647278?e=1686787200&v=beta&t=st8UvJTexDxQ6P9ZSyvztnIMx8zH3j2CXZoknZvkLos',
        minibio: 'Atuo atualmente como QA na área de testes e qualidade de software'
    },
    {
        id: '2',
        nome: 'Mylena P. Annunziato',
        imagem: 'https://media.licdn.com/dms/image/C4E03AQH-xQT__U_5Ig/profile-displayphoto-shrink_100_100/0/1637206097105?e=1686787200&v=beta&t=3635r5Vj2wCRWG6AiYNReHQXMDMnHwuvWt9umWXmR_Q',
        minibio: 'QA Analyst | Analista de Testes'
    },
    {
        id: '3',
        nome: 'Ana Carolina Vernizze',
        imagem: 'https://media.licdn.com/dms/image/C5603AQFjAdFFDQIe1g/profile-displayphoto-shrink_200_200/0/1621436382399?e=1686787200&v=beta&t=fvCAjWm-c22kT3DMZftlG5oIzffuV9Qd2ggtW2Ovk9s',
        minibio: 'Analista de Qualidade de Software'
    }
]

function mostraMulheres(request, response) {
    response.send(mulheres)
}

function criaMulheres(request, response) {
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }

    mulheres.push(novaMulher)

    response.json(mulheres)

    function corrigeMulheres(request, response) {
        function encontraMulher(mulher) {
            if(mulher.id === request.params.id) {
                return mulher
            }
        }

        const mulherEncontrada = mulheres.find(encontraMulher)

        if (request.body.nome) {
            mulherEncontrada = request.body.nome
        }

        if (request.body.minibio) {
            mulherEncontrada = request.body.minibio
        }

        if (request.body.imagem) {
            mulherEncontrada = request.body.imagem
        }

        response.json = mulheres
    }

    function deletaMulheres(request, response) {

    }
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.use(router.post('/mulheres', criaMulheres))
app.use(router.patch('/mulheres', corrigeMulheres))
app.use(router.delete('/mulheres', deletaMulheres))
app.listen(porta, mostraPorta)