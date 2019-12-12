window.onload = function () {
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    })

    var activeType = 'hot'
    var activeList = []
    var keyword =''

    function init () {
        handleLeftItem()
    }

    handleLeftItem = function(type = 'hot', index = 0) {
        activeType = type
        activeList = webObject[`${activeType}List`]
        handleChangeType(index)
        drawClassifyList()
        drawWebList()
    }

    handleClassifyItem = function(keyword, index) {
        keyword = keyword
        activeList = webObject[`${activeType}List`].filter(item => { return item.keywords.indexOf(keyword) > -1})
        drawWebList()
        $('.active-classify-item').css('display', 'none')
        $('.active-classify-item').eq(index).css('display', 'inline-block')
    }

    closeActiveClassify = function(event, index) {
        event.stopPropagation()
        keyword = ''
        activeList = webObject[`${activeType}List`].filter(item => { return item.keywords.indexOf(keyword) > -1})
        drawWebList()
        $('.active-classify-item').eq(index).css('display', 'none')
    }

    drawClassifyList = function() {
        let drawString = ''
        webObject[`${activeType}KeyWord`].forEach((item, index) => {
            drawString += `<span class="item bg-color-${Math.floor(Math.random()*10)}" onclick="handleClassifyItem('${item}', ${index})">
            ${item}
            <span class="active-classify-item" onclick="closeActiveClassify(event, ${index})">x</span>
            </span>`
        })
        $('.classify-item').html(drawString)
    }

    drawWebList = function() {
        let drawString = ''
        activeList.forEach((item, index) => {
            drawString += `<div class="web-item">
                    <img src="${item.image}" >
                    <div class="web-content">
                        <h1>${item.title}</h1>
                        <span>${item.description}</span>
                    </div>
                    <div class="web-btn">
                        <div onclick="showIframe(${index})">点击跳转</div>
                        <div onclick="showSwiper(${index})">查看例图</div>
                    </div>
                </div>`
        })
        $('.content-box').html(drawString)
    }

    handleChangeType = function(index) {
        $('.tree-item').removeClass('active-item')
        $('.tree-item').eq(index).addClass('active-item')
    }

    showSwiper = function(index) {
        let drawString = ''
        activeList[index].imageList.forEach(item => {
            drawString += `<div class="swiper-slide" style="background-image:url(${item})"></div>`
        })
        $('.swiper-wrapper').html(drawString)
        setTimeout(() => {
            swiper.slideTo(0,0)
            swiper.update()
            $('.swiper-shade').eq(0).removeClass('opacity0')
            $('.swiper-shade').eq(0).css('z-index', '2')
        }, 100)
    }

    hideSwiper = function() {
        $('.swiper-shade').eq(0).addClass('opacity0')
        setTimeout(() => {
            $('.swiper-shade').eq(0).css('z-index', '-1')
        }, 1000)
    }

    showIframe = function(index) {
        if (activeList[index].domain) {
            window.open(activeList[index].url)
        } else {
            $('.iframe').attr('src',activeList[index].url)
            $('.iframe-title').html(activeList[index].title)
            $('.swiper-shade').eq(1).removeClass('opacity0')
            $('.swiper-shade').eq(1).css('z-index', '2')
            setTimeout(() => {
                $('.iframe-box').css('display', 'block')
                $('.loading').css('display', 'none')
            }, 4000)
        }
    }

    hideIframe = function() {
        $('.swiper-shade').eq(1).addClass('opacity0')
        setTimeout(() => {
            $('.swiper-shade').eq(1).css('z-index', '-1')
            $('.iframe-box').css('display', 'none')
            $('.loading').css('display', 'block')
        }, 1000)
    }

    init()
}