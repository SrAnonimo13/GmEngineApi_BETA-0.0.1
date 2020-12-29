const path = require('path')
const express = require('express')
const app = express();
const socket = require('socket.io')
const server = require('http').createServer(app);
const io = socket(server)

io.on('connection', ()=>{
    console.log('Cliente conectado')
})

server.listen(3000, ()=>{
    console.log('Servidor iniciado!')
})

app.use(express.static(path.join(__dirname, '')))
app.set('views', path.join(__dirname, ''))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.get('/', (req, res)=>{
    res.render('teste.html')
})