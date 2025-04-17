const express = require('express')
const app = express()
const port = 3000
const postsRouter = require('./routers/post.js')

app.use('/posts', postsRouter)

app.get('/', (req, res) => {
    res.send('i miei post')
})

app.listen(port, () => {
    console.log('Server in ascolto alla porta: ' + port)
})