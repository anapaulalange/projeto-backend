const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Ana Paula Lange Gomes',
        imagem: 'https://media.licdn.com/dms/image/C4D03AQFgNSytafyXXw/profile-displayphoto-shrink_200_200/0/1660619647278?e=1686787200&v=beta&t=st8UvJTexDxQ6P9ZSyvztnIMx8zH3j2CXZoknZvkLos',
        minibio: 'Atuo atualmente como QA na área de testes e qualidade de software'
    },
    {
        nome: 'Mylena P. Annunziato',
        imagem: 'https://media.licdn.com/dms/image/C4E03AQH-xQT__U_5Ig/profile-displayphoto-shrink_100_100/0/1637206097105?e=1686787200&v=beta&t=3635r5Vj2wCRWG6AiYNReHQXMDMnHwuvWt9umWXmR_Q',
        minibio: 'QA Analyst | Analista de Testes'
    },
    {
        nome: 'Ana Carolina Vernizze',
        imagem: 'https://media.licdn.com/dms/image/C5603AQFjAdFFDQIe1g/profile-displayphoto-shrink_200_200/0/1621436382399?e=1686787200&v=beta&t=fvCAjWm-c22kT3DMZftlG5oIzffuV9Qd2ggtW2Ovk9s',
        minibio: 'Analista de Qualidade de Software'
    }
]

function mostraMulheres(request, response) {
    response.send(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)