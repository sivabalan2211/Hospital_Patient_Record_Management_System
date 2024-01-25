const express = require("express");
const route = express.Router()
const services = require('../services/render');
const controller = require('../controller/controller')

route.get("/index",services.add_patients);

route.get("/display",services.view_patients);

route.get("/",services.login_page);

route.get("/login",services.logout_page);

route.get("/update",services.update_page);

//api

route.post('/api/users',controller.create);
route.get('/display/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);
route.post('/login',controller.login);
route.get('/index',controller.logout);

module.exports=route;