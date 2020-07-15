const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 武器
// 武器名称、价格、伤害值(S)、伤害值(M)、重击、射程增量、重量、伤害类别 
const weaponSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    damageS: {
        type: String,
        require: true
    },
    damageM: {
        type: String,
        require: true
    },
    CH: {
        type: String,
        require: true
    },
    shootRange: {
        type: Number,
        require: true
    },
    weight: {
        type: Number,
        require: true
    },
    damageType: {
        type: String,
        require: true
    }
})

// 启用
const Weapon = mongoose.model('Weapon', weaponSchema)

module.exports = {
    saveOne:
        function (data) {
            // 测试录入
            let weaponData = new Weapon(data)

            // 测试保存
            weaponData.save((err, ret) => {
                if (err) {
                    throw err
                }
                else {
                    console.log('保存成功')
                }
            })
        }
}