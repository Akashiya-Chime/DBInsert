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

// 建立模型
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

// 防具
// 防具名称、价格、盔甲或盾牌加值、最大敏捷加值、防具检定减值、奥数失效几率、速度、重量
const armorSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    acp: {
        type: Number,
        require: true
    },
    dexp: {
        type: Number,
        require: true
    },
    acm: {
        type: Number,
        require: true
    },
    disspell: {
        type: Number,
        require: true
    },
    speed: {
        type: Number,
        require: true
    },
    weight: {
        type: Number,
        require: true
    }
})

// 技能
// 技能名称、未受训、属性、（技能说明？）
const skillSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    training: {
        type: Boolean,
        require: true
    },
    ability: {
        type: String,
        require: true
    }
})

// 专长
// 专长名称、专长类型、先决条件、效果、特殊
const featSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    pre: {
        type: String,
        require: true
    },
    effect: {
        type: String,
        require: true
    },
    special: {
        type: String,
        require: true
    }
})

// 法术
// 法术名称、派系、等级、法术成分、施法时间、距离、目标、持续时间、豁免检定、法术抗力、法术描述
const spellSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    school: {
        type: String,
        require: true
    },
    level: {
        type: String,
        require: true
    },
    element: {
        type: String,
        require: true
    },
    spelltime: {
        type: String,
        require: true
    },
    distance: {
        type: String,
        require: true
    },
    target: {
        type: String,
        require: true
    },
    keep: {
        type: String,
        require: true
    },
    saving: {
        type: String,
        require: true
    },
    spellresistance: {
        type: String,
        require: true
    },
    detail: {
        type: String,
        require: true
    }
})


// 启用模型
const Weapon = mongoose.model('Weapon', weaponSchema)
const Armer = mongoose.model('Amer', armorSchema)
const Skill = mongoose.model('Skill', skillSchema)
const Feat = mongoose.model('Feat', featSchema)
const Spell = mongoose.model('Spell', spellSchema)


// 测试录入
let dagger = new Weapon({
    name: '匕首',
    price: 2,
    damageS: '1d3',
    damageM: '1d4',
    ch: '19-20/2',
    shootRange: 10,
    weight: 1,
    damageType: '穿刺或挥砍'
})

// 测试保存
dagger.save((err, ret) => {
    if (err) {
        throw err
    }
    else {
        console.log('保存成功')
    }
})

// 不能调用 close。。。
// db.on('disconnected', () => {
//     console.log('断开连接')
// });