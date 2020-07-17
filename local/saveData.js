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
    },
    minus: {
        type: Number,
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
    SR: {
        type: String,
        require: true
    },
    detail: {
        type: String,
        require: true
    }
})

// 启用
const Weapon = mongoose.model('Weapon', weaponSchema)
const Armor = mongoose.model('Armor', armorSchema)
const Skill = mongoose.model('Skill', skillSchema)
const Feat = mongoose.model('Feat', featSchema)
const Spell = mongoose.model('Spell', spellSchema)

module.exports = {
    saveWeapon: function (data) {
        // 录入
        let weaponData = new Weapon(data)
        // 保存
        weaponData.save((err, ret) => {
            if (err) {
                throw err
            }
            else {
                console.log('保存成功')
            }
        })
    },
    saveArmor: function (data) {
        // 录入
        let armorData = new Armor(data)
        // 保存
        armorData.save((err, ret) => {
            if (err) {
                throw err
            }
            else {
                console.log('保存成功')
            }
        })
    },
    saveSkill: function (data) {
        // 录入
        let skillData = new Skill(data)
        // 保存
        skillData.save((err, ret) => {
            if (err) {
                throw err
            }
            else {
                console.log('保存成功')
            }
        })
    },
    saveFeat: function (data) {
        // 录入
        let featData = new Feat(data)
        // 保存
        featData.save((err, ret) => {
            if (err) {
                throw err
            }
            else {
                console.log('保存成功')
            }
        })
    },
    saveSpell: function (data) {
        // 录入
        let spellData = new Spell(data)
        // 保存
        spellData.save((err, ret) => {
            if (err) {
                throw err
            }
            else {
                console.log('保存成功')
            }
        })
    },

    // **************************************************************

    // 展示数据
    showWeapon: function () {
        return new Promise((resolve, reject) => {
            Weapon.find({}, (err, ret) => {
                if (err) reject(err)
                else resolve(ret)
            })
        })
    },
    showArmor: function () {
        return new Promise((resolve, reject) => {
            Armor.find({}, (err, ret) => {
                if (err) reject(err)
                else resolve(ret)
            })
        })
    },
    showFeat: function () {
        return new Promise((resolve, reject) => {
            Feat.find({}, (err, ret) => {
                if (err) reject(err)
                else resolve(ret)
            })
        })
    },
    showSkill: function () {
        return new Promise((resolve, reject) => {
            Skill.find({}, (err, ret) => {
                if (err) reject(err)
                else resolve(ret)
            })
        })
    },
    showSpell: function () {
        return new Promise((resolve, reject) => {
            Spell.find({}, (err, ret) => {
                if (err) reject(err)
                else resolve(ret)
            })
        })
    },
}