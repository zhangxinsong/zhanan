window.onload = function() {
    var main = this.document.getElementById('main')
    utools.onPluginEnter(({code, type, payload}) => {
        utools.setExpendHeight(0)
        utools.setSubInputValue('')
    })
    utools.setSubInput(({text}) => { 
        utools.setExpendHeight(300)
        if (text) {
            console.log(text)
            main.innerHTML = text
        }
    }, '搜索')
}