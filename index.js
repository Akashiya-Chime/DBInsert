const express = require('express')
const app = express()

app.engine('html', require('express-art-template'))

app.use('/src', express.static('./views/src'))

app.get('/',(req, res) =>{
    res.render('index.html')
})

app.listen(80, () => {
    console.log('Serve is on...')
})