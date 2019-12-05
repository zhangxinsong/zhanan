window.onload = function() {
    document.addEventListener('keydown', event => {
        var keyCode = window.event ? event.keyCode : event.which
        console.log(keyCode)
        if (keyCode === 13) {
            main.style.display = key ? 'none' : 'block'
            btnBox.style.display = key ? 'none' : 'flex'
            list.style.display = key ? 'inline-block' : 'none'
            key ? getList() : getSingle()
        }
    })

    utools.onPluginEnter(({code, type, payload}) => {
        getSingle()
    })

    function ajax (options) {
        let url = options.url
        const method = options.method.toLocaleLowerCase() || 'get'
        const async = options.async != false // default is true
        const data = options.data || ''
        const xhr = new XMLHttpRequest()

        if (options.timeout && options.timeout > 0) {
            xhr.timeout = options.timeout
        }

        return new Promise ( (resolve, reject) => {
            xhr.ontimeout = () => reject && reject('请求超时')
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                        resolve && resolve(xhr.responseText)
                    } else {
                        reject && reject()
                    }
                }
            }
            xhr.onerror = err => reject && reject(err)

            let paramArr = []
            let encodeData
            if (data && data instanceof Object) {
                for (let key in data) {
                    // 参数拼接需要通过 encodeURIComponent 进行编码
                    paramArr.push( encodeURIComponent(key) + '=' + encodeURIComponent(data[key]) )
                }
                encodeData = paramArr.join('&')
            }

            if (method === 'get') {
                  // 检测 url 中是否已存在 ? 及其位置
                const index = url.indexOf('?')
                if (index === -1) url += '?'
                else if (index !== url.length -1) url += '&'
                  // 拼接 url
                url += encodeData
            }

            xhr.open(method, url, async)
            if (method === 'get') xhr.send(null)
            else {
                // post 方式需要设置请求头
                xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded;charset=UTF-8')
                xhr.send(encodeData)
            }
        } )
    }

    var main = document.getElementById('main')
    var list = document.getElementById('list')
    var btnBox = document.getElementsByClassName('btn-box')[0]
    var copyBox =document.getElementById('copy-box')
    var key = ''
    var sigleWord = ''
    var wordList = []

    getSingle = function() {
        ajax({
            url: 'https://api.lovelive.tools/api/SweetNothings/1/Serialization/Json',
            method: 'get',
            async: true,
            timeout: 1000
        }).then(
            res => {
                main.innerHTML = JSON.parse(res).returnObj[0]
                sigleWord = JSON.parse(res).returnObj[0]
            },
            err => console.log(err)
        )
    }

    getList = function() {
        ajax({
            url: 'https://api.lovelive.tools/api/SweetNothing/Keyword/' + encodeURI(key),
            method: 'get',
            async: true,
            timeout: 1000
        }).then(
            res => {
                let data = JSON.parse(res).returnObj
                if (data.length) {
                    let str = ''
                    wordList = data
                    data.forEach((item,index) => {
                        str += `<div class="list-item"><div class="text">${item}</div><img src="./copy.png" onclick="copy(${index},false)"/></div>`
                    })
                    list.innerHTML = str
                } else {
                    list.innerHTML = '<div class="empty">亲，暂时还有相关的语录呢ε==(づ′▽`)づ</div>'
                }
            },
            err => console.log(err)
        )
    }

    copy = function(e, type) {
        console.log(e)
        copyBox.value = type ? sigleWord : wordList[e]
        copyBox.select() // 选择对象
        document.execCommand("Copy") // 执行浏览器复制命令
        utools.showNotification('复制成功，发给心爱的那个人吧', clickFeatureCode = null, silent = true)
        utools.hideMainWindow()
    }
    
    utools.setSubInput(({text}) => { 
        key = text
        if (text[text.length - 1] == ' ') {
            text = text.replace(/(\s*$)/g,"")
            key = text
            utools.setSubInputValue(text)
            getSingle()
        }
    }, '搜索')
}