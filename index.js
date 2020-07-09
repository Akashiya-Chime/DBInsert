const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// 配置 body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.engine('html', require('express-art-template'))

app.use('/src', express.static('./views/src'))

app.get('/', (req, res) => {
    res.render('index.html')
})

app.post('/post', (req, res) => {
    res.send(req.body)
})

app.listen(80, () => {
    console.log('Serve is on...')
})