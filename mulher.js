const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Ana Paula',
        imagem: 'https://media.licdn.com/dms/image/C4D03AQFgNSytafyXXw/profile-displayphoto-shrink_200_200/0/1660619647278?e=1686787200&v=beta&t=st8UvJTexDxQ6P9ZSyvztnIMx8zH3j2CXZoknZvkLos',
        minibio: 'Atuo atualmente como QA na área de testes e qualidade de software'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)