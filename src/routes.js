//express é uma biblioteca para criar um servidor
const express = require('express'); 

//router é uma parte do express q vai ajudar a criar os caminhos
const routes = express.Router()

//importando o ProfileController
const ProfileController = require('./controllers/ProfileController')

//importando JobController
const JobController = require('./controllers/JobController');

//importando o DashboardController
const DashboardController = require('./controllers/DashboardController');

//req, res(basicamente um jogo de perguntas e respostas)
routes.get('/',DashboardController.index)
routes.get('/job', JobController.create)
routes.post('/job',JobController.save)
routes.get('/job/:id',JobController.show)
routes.post('/job/:id', JobController.update)
routes.post('/job/delete/:id',JobController.delete)
routes.get('/profile', ProfileController.index)
routes.post('/profile', ProfileController.update)
//quando vou por um valor de propriedade q tem o mesmo nome , posso deixar so uma vez ex:( "profile"{profile: profile}) 

module.exports = routes;   