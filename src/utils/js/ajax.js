const Ajax = {
    get: function (url, data, callback) {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', url, false)
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    callback(xhr.responseText)
                }
            }
        }
        xhr.send()
    },
    post: function (url, data, callback) {
        let xhr = new XMLHttpRequest()
        xhr.open('POST', url, false)
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    callback(xhr.responseText)
                }
            }
        }
        xhr.send(data)
    }
}
export default Ajax