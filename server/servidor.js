const express = require("express")
const servidor = express()
const dotenv = require("dotenv")
const axios = require("axios")
const cors = require("cors")
const opcoesCors = {
    origin: "http://localhost:5173"
}

servidor.use(cors(opcoesCors))
dotenv.config()

servidor.get("/api", (requisicao, resposta ) =>{
    const opcoes = {
        method: "GET",
        url: "https://githubapi2.onrender.com/api/Github",
        headers: {
            "Content-type": "application/json",
            "Api-Key": process.env.APIKEY
        },
        mode: "cors"
    }
    axios.request(opcoes).then(res => {
        resposta.json(res.data)
    }).catch(erro => resposta.json(projetosLocal))
})

servidor.listen(8080, () => console.log("Servidor iniciou na porta: 8080"))


const projetosLocal = [
    {
        Id: 1,
        Name: "DeméTech",
        Description: `Projeto da faculdade de A.D.S. que desenvolvi usando ASP.Net com arquitetura MVC.
        Este Projeto consiste em uma loja virtual que permite criar contas, logar nessas contas e adicionar e remover itens ao carrinho. 
        O site foi hospedado na nuvem Azure, e possui conexão com uma base de dados SQL Server para armazenar os dados dos clientes e realizar buscar de alimentos disponíveis.`,
        Imagem: "assets/images/projetos/demetech.gif",
        Html_url: "https://github.com/foursimon/DemeTech-Web"
    },
    {
        Id: 2,
        Name: "HttpClientApi",
        Description: `Este projeto consiste em uma API Rest que se comunica com outra API.
        O projeto foi desenvolvido usando ASP.Net C#. Nele, apliquei medidas de seguranças com chave API para autorizar a requisição realizada, e política CORS para definir quem pode realizar a requisição e quais tipos de requisições são permitidas.
        Utilizei a classe HttpClient para realizar as requisições HTTP a outra API, permitindo definir o enderenço de conexão e os serviços que a minha API realiza e permite o usuário realizar.`,
        Imagem:"assets/images/projetos/httpclientapi.gif",
        Html_url: "https://github.com/foursimon/HttpClientApi"
    },
    {
        Id: 3,
        Name: "Viagens - React",
        Description: `Meu primeiro projeto desenvolvido usando a biblioteca React. 
        Desenvolvi este projeto para colocar em pratica o que eu aprendi sobre componentes em React. Mesmo sendo algo simples, é essencial colocar em prática o que aprendi na teoria.`,
        Imagem:"assets/images/projetos/viagens.gif",
        Html_url: "https://github.com/foursimon/Viagens-React"
    },
    {
        Id: 4,
        Name: "Gerador hexadecimal",
        Description: `Este projeto consiste em um simples gerador hexadecimal desenvolvido usando Javascript.
        O foco é praticar minha lógica de programação utilizando Javascript e desenvolver usando vetores, funções e loops.`,
        Imagem:"assets/images/projetos/hexadecimal.gif",
        Html_url: "https://github.com/foursimon/Gerador-Hexadecimal"
    },
]

