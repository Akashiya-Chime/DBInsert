let trdata = {};
function sendmsg(j, url) {
    // 先拿到所填数据
    for (let i = 0; i < j; i++) {
        let tr = document.getElementById('tr' + i)
        trname = tr.name
        trdata[trname] = tr.value
        tr.value = null
    }
    console.log(trdata)

    // 再发送数据
    let xhr = new XMLHttpRequest();
    // 这里也要改成服务器ip
    xhr.open('post', `http://127.0.0.1/${url}`)
    xhr.setRequestHeader('Content-Type', 'application/json', charset = "utf-8")
    xhr.send(JSON.stringify(trdata))
    xhr.onload = function () {
        // console.log(xhr.responseText)
        // alert('数据已接收')
        alert(xhr.responseText)
    }
}


// 处理数据显示
function showData(what) {
    // 先清空
    let con = document.getElementById('showMe')
    con.innerHTML = ''
    // 再输入
    let getXhr = new XMLHttpRequest();
    getXhr.open('get', `http://127.0.0.1/${what}`)
    getXhr.send()
    getXhr.onload = function () {
        let data = JSON.parse(getXhr.responseText)
        // console.log(data)
        for (i in data) {
            // console.log(data[i])
            let node = document.createElement('h4')
            node.innerHTML = `(${Number(i)+1})${data[i].name}，`
            con.appendChild(node)
        }
    }
}