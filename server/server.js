const app = require("http").createServer();
const io = require("socket.io")(app, {
    cors: 'http:localhost:3000'
});

const PORT = process.env.PORT || 5000

io.on('connection', (socket) => {
    const id = socket.handshake.query.id
    socket.join(id)
    console.log('user connected')
    socket.on('send-message', (text) => {
        console.log('message: ' + text)
        // io.emit('send-message', text)
        socket.broadcast.emit('get-message', text)
    })
})

app.listen(PORT, () => {
    console.log(`listening on: ${PORT}`)
})
