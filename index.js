const express = require('express')
const bodyParser = require('body-parser')
const findUser = require('./local/findUser')
const saveData = require('./local/saveData')

const app = express()

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

app.get('/', (req, res) => {
    res.render('index.html')
})

app.get('/loginpage', (req, res) => {
    res.render('login.html')
})

app.post('/login', (req, res) => {
    // if (findUser(req.body.username, req.body.password)) {
    //     console.log('找到') 
    // } else { 
    //     console.log('没找到') 
    // }
    findUser(req.body.username, req.body.password)
        .then((ret) => {
            res.send(ret)
            console.log(ret)
        })
})

// 这里是接受传入的数据
app.post('/post', (req, res) => {
    res.send(req.body)
})

// ************************************************************************

// 正式录入
app.post('/weapon', (req, res) => {
    // res.send('收到武器录入')
    // if (saveData.findData(req.body.name, 'Weapon')) {}
    saveData.findData(req.body.name, 'Weapon').then((ret) => {
        if (ret == null) {
            saveData.saveWeapon(req.body)
            res.send('成功录入')
        } else {
            res.send('该数据已录入，请勿重复录入')
        }
    })
})

app.post('/spell', (req, res) => {
    saveData.findData(req.body.name, 'Spell').then((ret) => {
        if (ret == null) {
            saveData.saveWeapon(req.body)
            res.send('成功录入')
        } else {
            res.send('该数据已录入，请勿重复录入')
        }
    })
})

app.post('/skill', (req, res) => {
    saveData.findData(req.body.name, 'Skill').then((ret) => {
        if (ret == null) {
            saveData.saveWeapon(req.body)
            res.send('成功录入')
        } else {
            res.send('该数据已录入，请勿重复录入')
        }
    })
})

app.post('/feat', (req, res) => {
    saveData.findData(req.body.name, 'Feat').then((ret) => {
        if (ret == null) {
            saveData.saveWeapon(req.body)
            res.send('成功录入')
        } else {
            res.send('该数据已录入，请勿重复录入')
        }
    })
})

app.post('/armor', (req, res) => {
    saveData.findData(req.body.name, 'Armor').then((ret) => {
        if (ret == null) {
            saveData.saveWeapon(req.body)
            res.send('成功录入')
        } else {
            res.send('该数据已录入，请勿重复录入')
        }
    })
})

// ***********************************************************************

// 展示数据
app.get('/showWeapon', (req, res) => {
    // res.send('已接收')
    saveData.showWeapon()
        .then((ret) => {
            res.send(ret)
            // console.log(ret)
        })
})

app.get('/showArmor', (req, res) => {
    // res.send('已接收')
    saveData.showArmor()
        .then((ret) => {
            res.send(ret)
            // console.log(ret)
        })
})

app.get('/showFeat', (req, res) => {
    // res.send('已接收')
    saveData.showFeat()
        .then((ret) => {
            res.send(ret)
            // console.log(ret)
        })
})

app.get('/showSkill', (req, res) => {
    // res.send('已接收')
    saveData.showSkill()
        .then((ret) => {
            res.send(ret)
            // console.log(ret)
        })
})

app.get('/showSpell', (req, res) => {
    // res.send('已接收')
    saveData.showSpell()
        .then((ret) => {
            res.send(ret)
            // console.log(ret)
        })
})

// *************************************************************************

// 设置监听
app.listen(80, () => {
    console.log('Serve is on...')
})
