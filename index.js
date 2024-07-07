// import json-server
const jsonServer = require('json-server')

// create server for media player
const UserPortalServer = jsonServer.create()

// create middleware used by JSON server
const middleware = jsonServer.defaults()

// set up route fro json file in server
const route = jsonServer.router('db.json')

// set up pot for running server app
const PORT = 3000 || process.env.PORT


UserPortalServer.use(middleware)
UserPortalServer.use(route)
UserPortalServer.listen(PORT,()=>
{
    console.log(`User Portal Server Startedat Port ${PORT} and waiting for client Request`);
})