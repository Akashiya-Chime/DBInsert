const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// 配置 body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//设置跨域请求
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    // res.header("Content-Type", "application/json;charset=utf-8");
    next();
  });

app.engine('html', require('express-art-template'))

app.use('/src', express.static('./views/src'))

app.get('/',(req, res) =>{
    res.render('index.html')
})

app.post('/post', (req, res) => {
    res.send(req.body)
})
 
app.listen(80, () => {
    console.log('Serve is on...')
})
