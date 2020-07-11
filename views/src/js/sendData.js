let trdata = {};
function sendmsg(j) {
    // 先拿到所填数据
    for (let i = 0; i < j; i++) {
        let tr = document.getElementById('tr' + i)
        trname = tr.name
        trdata[trname] = tr.value
    }
    console.log(trdata)

    // 再发送数据
    let xhr = new XMLHttpRequest();
    xhr.open('post', 'http://127.0.0.1/post')
    xhr.setRequestHeader('Content-Type', 'application/json', charset = "utf-8")
    xhr.send(JSON.stringify(trdata))
    xhr.onload = function () {
        console.log(xhr.responseText)
    }
}