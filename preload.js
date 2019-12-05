document.addEventListener('keydown', event => {
    var keyCode = window.event ? event.keyCode : event.which
    if (keyCode === 13) {
        window.openExternal('http://htmlpreview.github.io/?https://github.com/zhangxinsong/zhanan/blob/master/zhanan/index.html')
    }
})

var main = this.document.getElementById('main')

utools.setSubInput(({text}) => { 
    utools.setExpendHeight(300)
    if (text) {
        console.log(text)
        main.innerHTML = text
    }
}, '搜索')