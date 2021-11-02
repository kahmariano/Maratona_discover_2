//express é uma biblioteca para criar um servidor
const express =  require ("express")
//aqui eu acho q é a chamada do servidor 
const server = express()

const routes = require ("./routes")

const path = require("path")

//usando a templete engine
server.set('view engine','ejs')

//mudando a localizaçao da pasta views
server.set('views', path.join(__dirname, 'views'))

//habilitando arquios statics
server.use(express.static("public"))

//usar o rew.body
server.use(express.urlencoded({extended:true}))

//routes
server.use(routes)


//teste do server
server.listen(3000, ()=> console.log("rodando"))
