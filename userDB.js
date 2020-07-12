const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 创建连接
// 通过将 useNewUrlParser 设置为 true 来避免"不建议使用当前 URL 字符串解析器"警告
mongoose.connect('mongodb://localhost/dnd', { useNewUrlParser: true });
// 连接数据库
const db = mongoose.connection
db.on('error', console.error.bind(console, '连接数据库错误'))
db.once('open', () => {
    console.log('连接数据库成功')
})

const userDB = new Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

const User = mongoose.model('User', userDB)

let akashiya = new User({
    username: 'akashiya',
    password: '00544Kun'
})

let autoai = new User({
    username: 'autoai',
    password: '19760318Kun'
})

akashiya.save((err, ret) => {
    if (err) throw err
    else console.log('保存成功')
})

// 查询
// User.find({'username': 'autoai'}, (err, ret) => {
//     if (err) throw err
//     console.log(ret)
// })