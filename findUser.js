const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 创建连接
// 通过将 useNewUrlParser 设置为 true 来避免"不建议使用当前 URL 字符串解析器"警告
mongoose.connect('mongodb://localhost/dnd', { useNewUrlParser: true, useUnifiedTopology: true });
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

// let username = 'akashiya'
// let password = '00544Kun'
// User.find({ 'username': username, 'password': password }, (err, ret) => {
//     // if (err) return false
//     // else return true
//     if (err) return 123
//     else return 456
// })

// function userQuery(username, password) {
//     User.find({ 'username': username, 'password': password }, (err, ret) => {
//         // if (err) return false
//         // else return true
//         if (err) return 123
//     })
// }

// userQuery('akashiya', '00544Kun')

function userQuery(username, password) {
    return new Promise((resolve, reject) => {
        User.findOne({ 'username': username, 'password': password }, (err, ret) => {
            // if (err) return false
            // else return true
            if (err) reject(err)
            else resolve(ret)
        })
    })
}


module.exports = userQuery