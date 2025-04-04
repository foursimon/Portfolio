export default [
    {
        id: 1,
        nome: "DeméTech",
        descricao: "Projeto da faculdade de A.D.S. que desenvolvi usando ASP.Net com arquitetura MVC." 
        + " Este Projeto consiste em uma loja virtual que permite criar contas, logar nessas contas e adicionar e remover itens ao "
        + "carrinho. O site foi hospedado na nuvem Azure, e possui conexão com uma base de dados SQL Server para armazenar os dados "
        + "dos clientes e realizar buscar de alimentos disponíveis.",
        imagem:{
            src: "/assets/images/projetos/demetech.gif",
            alt: "Gif mostrando a loja virtual chamada DeméTech, onde é aprensentado o login de usuário e o carrinho de compras virtual."
        },
        link: "https://github.com/foursimon/DemeTech-Web"
    },
    {
        id: 2,
        nome: "HttpClientApi",
        descricao: "Este projeto consiste em uma API Rest que se comunica com outra API."
        + "Este projeto foi desenvolvido usando ASP.Net C#. Nele, apliquei medidas de seguranças com chave API para autorizar a"
        + " requisição realizada, e política CORS para definir quem pode realizar a requisição e quais tipos de requisições são permitidas."
        + " Utilizei a classe HttpClient para realizar as requisições HTTP a outra API, permitindo definir o enderenço de conexão e os"
        + " serviços que a minha API realiza e permite o usuário realizar.",
        imagem:{
            src: "/assets/images/projetos/httpclientapi.gif",
            alt: "Gif mostrando um pouco do projeto HttpClientApi, onde é realizado uma requisição http get para receber os dados de outra api."
        },
        link: "https://github.com/foursimon/HttpClientApi"
    },
    {
        id: 3,
        nome: "Viagens - React",
        descricao: "Meu primeiro projeto desenvolvido usando a biblioteca React. Desenvolvi este projeto para colocar em pratica o que"
        + " eu aprendi sobre componentes em React. Mesmo sendo algo simples, é essencial colocar em prática o que aprendi na teoria.",
        imagem:{
            src: "/assets/images/projetos/viagens.gif",
            alt: "Gif mostrando o projeto Viagens, onde aparece três registros de viagens a diferentes lugares no mundo."
        },
        link: "https://github.com/foursimon/Viagens-React"
    },
    {
        id: 4,
        nome: "Gerador hexadecimal",
        descricao: "Este projeto consiste em um simples gerador hexadecimal desenvolvido usando Javascript."
        + " O foco é praticar minha lógica de programação utilizando Javascript e desenvolver usando vetores, funções e loops.",
        imagem:{
            src: "/assets/images/projetos/hexadecimal.gif",
            alt: "Gif mostrando o gerador hexadecimal, onde é mostrado cada cor sendo gerada ao clicar no botão gerar cor."
        },
        link: "https://github.com/foursimon/Gerador-Hexadecimal"
    },
]