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

    var webObject = {
        hotList: [
            {
                title: '吾道幻灯片',
                url: 'https://www.woodo.cn/',
                image: 'https://www.woodo.cn/favicon.ico',
                description: '强大的PPT幻灯片协作工具，轻松创建优秀作品。随时随地多人协同在线编辑，自动保存同步，手机管理文档，一键导出，海量PPT模板免费下载，新一代办公神器',
                imageList: ['https://pic1.zhimg.com/80/v2-8974ad4862692bd5356926cd53ced510_hd.jpg', 'https://pic2.zhimg.com/80/v2-befea47c09bda0b477294977df8023e4_hd.jpg', 'https://pic4.zhimg.com/80/v2-0b786e303a42dc2b4cc5167d2139280b_hd.jpg', 'https://pic4.zhimg.com/80/v2-0d769156c1be70f33f149cabe75755c9_hd.jpg', 'https://pic3.zhimg.com/80/v2-66e9cbe22ffd31db199f55f96cda9138_hd.jpg']
            },
            {
                title: '稿定设计',
                url: 'https://www.gaoding.com/',
                image: 'https://www.gaoding.com/favicon.ico',
                description: '在线快速图片和视频编辑,不会PS也能搞定设计。海报、简历、PPT、公众号配图、电商等海量模板快速出图。三秒抠图实用便捷,抖音快手热门视频轻松搞定。海量正版授权资源,商用无忧。',
                imageList: ['https://pic1.zhimg.com/80/v2-88e004c5c7bc55e1762093c546277588_hd.jpg', 'https://pic2.zhimg.com/80/v2-e580e0945ed3504934db6e620eebc616_hd.jpg', 'https://pic2.zhimg.com/50/v2-ac496115937876fd48212fa42feadd1c_hd.webp', 'https://pic4.zhimg.com/50/v2-bd9088faea4c886d890f46ced633e8fb_hd.webp', 'https://pic3.zhimg.com/50/v2-7bdaf9773fe419ea6dda6cd465626599_hd.webp']
            },
            {
                title: 'Seeseed-无穷尽设计可能',
                url: 'https://www.seeseed.com/',
                image: 'https://www.seeseed.com/favicon.png',
                description: 'Seeseed-无穷尽设计可能，为设计师提供国内外最全的设计灵感、设计素材、设计工具、设计教程。',
                imageList: ['https://pic3.zhimg.com/80/v2-be359bc57880431c355587692d7cf896_hd.jpg', 'https://pic1.zhimg.com/80/v2-afb2a4d4850779e9493c16f7d7f0be4b_hd.jpg', 'https://pic3.zhimg.com/80/v2-c9fe32974396807b42e5496c50cde889_hd.jpg']
            },
            {
                title: 'baidu',
                url: 'http://www.baidu.com',
                image: 'https://pic1.zhimg.com/v2-8974ad4862692bd5356926cd53ced510_r.jpg',
                description: 'baidu',
                imageList: ['https://pic1.zhimg.com/v2-8974ad4862692bd5356926cd53ced510_r.jpg', 'https://pic1.zhimg.com/v2-8974ad4862692bd5356926cd53ced510_r.jpg', 'https://pic1.zhimg.com/v2-8974ad4862692bd5356926cd53ced510_r.jpg']
            }
        ],
        imageList: [
            {
                title: 'BoBoPic',
                key: '',
                url: 'https://bobopic.com/',
                image: 'https://tu.bobopic.com/static/img/favicon.ico',
                description: 'BoBoPic ，这是一家注重品质的图片分享网站。主打二次元插画和视觉系美图，偶尔还会有一些设计素材与手绘教程，很适合日常摸鱼。',
                imageList: ['http://b.hiphotos.baidu.com/image/pic/item/908fa0ec08fa513db777cf78376d55fbb3fbd9b3.jpg', 'http://b.hiphotos.baidu.com/image/pic/item/908fa0ec08fa513db777cf78376d55fbb3fbd9b3.jpg', 'http://b.hiphotos.baidu.com/image/pic/item/908fa0ec08fa513db777cf78376d55fbb3fbd9b3.jpg']
            },
            {
                title: 'Pexels',
                url: 'https://www.pexels.com/',
                image: 'https://www.pexels.com/assets/icons/pexels-icon-644533b609157fd990b1a6675626d63077ae1fb81e819c83f81dc2242877d413.png',
                description: 'The best free stock photos & videos shared by talented creators.',
                imageList: ['http://b.hiphotos.baidu.com/image/pic/item/908fa0ec08fa513db777cf78376d55fbb3fbd9b3.jpg', 'http://b.hiphotos.baidu.com/image/pic/item/908fa0ec08fa513db777cf78376d55fbb3fbd9b3.jpg', 'http://b.hiphotos.baidu.com/image/pic/item/908fa0ec08fa513db777cf78376d55fbb3fbd9b3.jpg']
            },
            {
                title: '我爱斗图',
                url: 'https://www.52doutu.cn/',
                image: 'https://www.52doutu.cn/static/images/others/touch-icon.png',
                description: '斗图终结者创建于 2016年4月7日，是一个以表情包在线制作为主题的工具网站。这里有各式各样的表情模板，还有大量的成品表情图，助您成为真正的斗图终结者！',
                imageList: ['http://b.hiphotos.baidu.com/image/pic/item/908fa0ec08fa513db777cf78376d55fbb3fbd9b3.jpg', 'http://b.hiphotos.baidu.com/image/pic/item/908fa0ec08fa513db777cf78376d55fbb3fbd9b3.jpg', 'http://b.hiphotos.baidu.com/image/pic/item/908fa0ec08fa513db777cf78376d55fbb3fbd9b3.jpg']
            },
            {
                title: 'The stocks',
                url: 'http://thestocks.im/',
                image: 'http://thestocks.im/static/favicon-32x32.png',
                description: '如果看过一些免费优质图片下载网站的推荐，你应该会对unsplash、pexels、pixabay等这些大名鼎鼎的良心免费图片网站有印象。而the stocks网站则是将这些良心的图片网站进行整合，放在左侧的导航栏里，一个更比六十个强。',
                imageList: ['https://pic4.zhimg.com/80/v2-c3f7ac0e6fb4a1cf64e82eccdf51a786_hd.jpg', 'https://pic4.zhimg.com/80/v2-aaf2db5e2476bd14c114058326e433d3_hd.jpg', 'https://pic1.zhimg.com/80/v2-90abb2d27bd2edfeadf07b7fec929010_hd.jpg']
            },
            {
                title: '极简壁纸',
                url: 'https://bz.zzzmh.cn/',
                image: 'https://bz.zzzmh.cn/favicon.ico',
                description: '极简壁纸网,超高清电脑桌面壁纸美图,每天更新海量4K电脑壁纸,9012年最潮的壁纸网站,壁纸包括美女、二次元、自然风景，收录自WallHaven',
                imageList: ['https://pic2.zhimg.com/80/v2-1605e2d3641796528737a372ec2ef383_hd.jpg', 'https://pic4.zhimg.com/80/v2-b03ef5ac00b3f5795ed6fe7cc665da25_hd.jpg']
            },
            {
                title: 'pixabay',
                url: 'https://pixabay.com/',
                image: 'https://pixabay.com/apple-touch-icon.png',
                description: 'Find your perfect free image or video to download and use for anything. ✓ Free for commercial use ✓ No attribution required ✓ High quality images.',
                imageList: ['https://pic3.zhimg.com/80/v2-46ce64a95d712164080854f15a649a5e_hd.png'],
                domain: true
            },
            {
                title: 'StockSnap.io',
                url: 'https://stocksnap.io/',
                image: 'https://stocksnap.io/img/favicon.png',
                description: 'The #1 source for beautiful free photos. High quality and high resolution stock images free from all copyright restrictions (CC0) - no attribution required.',
                imageList: ['https://pic3.zhimg.com/80/v2-3c423c80200989ba33855e71ccc64ba2_hd.jpg']
            },
            {
                title: 'unsplash',
                url: 'https://unsplash.com/',
                image: 'https://unsplash.com/apple-touch-icon.png',
                description: 'Beautiful, free images and photos that you can download and use for any project. Better than any royalty free or stock photos.',
                imageList: ['https://pic2.zhimg.com/80/v2-c78e648700f51c62d54eaba498ebf835_hd.jpg'],
                domain: true
            },
            {
                title: 'foter',
                url: 'https://foter.com/',
                image: 'https://foter.com/img/favicon.ico',
                description: 'Explore the most popular ideas and the best products, curated by interior design experts.',
                imageList: ['https://pic2.zhimg.com/80/v2-712c2730e207f55b9387c159e59df1c9_hd.png']
            },
            {
                title: '沙沙野-让作品遇见全世界',
                url: 'https://www.ssyer.com/',
                image: 'https://www.ssyer.com/favicon.ico',
                description: '沙沙野是一个面向全球的高质量视觉素材平台，拥有百万素材。提供高清图片素材，网页素材，矢量图的免费下载服务。全站图片，视频素材均可在遵守平台规则的情况下直接下载并可商用。',
                imageList: ['https://pic2.zhimg.com/80/v2-712c2730e207f55b9387c159e59df1c9_hd.png']
            },
            {
                title: 'visualhunt',
                url: 'https://visualhunt.com/',
                image: 'https://visualhunt.com/favicon.ico',
                description: 'Visually search the best products and ideas. Curated by experts, powered by community.',
                imageList: ['https://visualhunt.com/img/Visual-Hunt-Share.jpg']
            },
            {
                title: 'streetwill',
                url: 'http://streetwill.co/',
                image: 'http://streetwill.co/tileicon.png',
                description: 'Free vintage photos to use any way you want.',
                imageList: ['https://pic2.zhimg.com/80/v2-c35f6b9ce01cdf9ebfa3a393f8cbaeed_hd.jpg'],
                domain: true
            },
            {
                title: 'lifeofpix',
                url: 'https://www.lifeofpix.com/',
                image: 'https://www.lifeofpix.com/wp-content/uploads/fbrfg/apple-touch-icon.png',
                description: 'Free high resolution photography. Share and download images freely. Search for pictures by color or format. Photographers, get an account now !',
                imageList: ['https://pic3.zhimg.com/80/v2-2706ed95aa31731e3a308e5c6f51fb4e_hd.jpg']
            },
            {
                title: '泼辣有图',
                keywords: '免费图库,免费图床,泼辣有图,开源摄影,免费图片素材,图片素材,摄影素材,素材,stock photos,stock photos,free stock photos,cc0,free photos,free stock photos,polayoutu',
                url: 'http://www.polayoutu.com/collections',
                image: 'http://www.polayoutu.com/favicon-32x32.png',
                description: '开源摄影，为世界提供免费美丽图像。Free stock photos with CC0 license.',
                imageList: ['https://pic3.zhimg.com/80/v2-2706ed95aa31731e3a308e5c6f51fb4e_hd.jpg']
            },
            {
                title: 'foodiesfeed',
                url: 'https://www.foodiesfeed.com/',
                image: 'https://www.foodiesfeed.com/wp-content/themes/foodiesfeed/library/images/favicon/apple-touch-icon.png',
                description: 'Download 1300+ food pictures ⋆ The best free food photos for commercial use ⋆ CC0 license',
                imageList: ['https://pic2.zhimg.com/80/v2-5195887628934c2cfd71d1b2f4c9e5e1_hd.jpg']
            },
            {
                title: '泼辣有图',
                keywords: '免费图库,免费图床,泼辣有图,开源摄影,免费图片素材,图片素材,摄影素材,素材,stock photos,stock photos,free stock photos,cc0,free photos,free stock photos,polayoutu',
                url: 'https://mystock.themeisle.com/',
                image: 'https://s26049.pcdn.co/wp-content/themes/mystock/img/msp-logo.png',
                description: 'A collection of unique, free stock photos for personal or commercial use. Each photo is unique and comes from our travels and findings so you won’t find it elsewhere on the web. Open to modify, copy or distribute.',
                imageList: ['https://pic3.zhimg.com/80/v2-95d88e701d4962e87f9e38ebe1a5005a_hd.jpg']
            },
            {
                title: 'everypixel',
                keywords: '免费图库,免费图床,泼辣有图,开源摄影,免费图片素材,图片素材,摄影素材,素材,stock photos,stock photos,free stock photos,cc0,free photos,free stock photos,polayoutu',
                url: 'https://www.everypixel.com/',
                image: 'https://www.everypixel.com/i/mobile_icons/apple-touch-icon-180x180.png',
                description: 'Stock image finder for all who hate bad stock photos. Use it to find the best licensed images for the lowest price. More than 50 image sources.',
                imageList: ['https://pic2.zhimg.com/v2-233c56ef3ed4f845e7882f5d9637f5b5_r.jpg']
            },
        ],
        textProcessList: [
            {
                title: 'WordArt',
                url: 'https://wordart.com/',
                image: 'https://wordart.com/static/favicons/favicon-32x32.png',
                description: 'WordArt.com is an online word cloud art creator that enables you to create amazing and unique word cloud art with ease.Professional quality results can be achieved in no time at all, even for users with no prior knowledge of graphic design.',
                imageList: ['https://pic1.zhimg.com/80/v2-410195d49fd826447a78239eb31a82c2_hd.jpg', 'https://pic3.zhimg.com/80/v2-722e58dde17a204dedaa172731e8e271_hd.jpg']
            },
        ],
        imageProcessList: [
            {
                title: '创客贴在线抠图',
                url: 'https://www.chuangkit.com/koutu1/index.html',
                image: 'https://www.chuangkit.com/koutu1/img_files/favicon.ico',
                description: '创客贴抠图功能上线，基于AI智能抠图，比PS抠图操作简单，抠图效果棒。通过内容选取就能轻松抠背景、图片元素、头发丝等等。',
                imageList: ['https://mater-local.ckt.cn/static/img/landing_gif.050022c.gif', 'https://www.chuangkit.com/koutu1/img_files/bg-masthead.gif', 'https://www.chuangkit.com/koutu1/img_files/fasi.gif']
            },
            {
                title: '稿定设计|在线PS',
                url: 'https://ps.gaoding.com/#/',
                image: 'https://www.gaoding.com/favicon.ico',
                description: '稿定设计PS是一款专业精简的在线ps图片处理软件，免下载、免安装，直接在浏览器打开网页版就可随时随地用它修正，调整和美化您的图片。',
                imageList: ['https://pic4.zhimg.com/80/v2-1dc51fe3d3b6a0238204601efab9261f_hd.jpg']
            },
            {
                title: 'pdf派',
                url: 'https://www.pdfpai.com/',
                image: 'https://tool.gifhome.com/favicon.ico',
                description: 'GIF之家,最好的GIF动图素材和GIF在线制作工具,专业的GIF动图压缩工具、GIF格式转换工具、GIF动图裁剪工具,视频转gif软件哪个好？就找GIF之家。',
                imageList: ['https://pic2.zhimg.com/80/v2-dcf030d2d9cfc893e29e497a801ddac8_hd.jpg']
            },
        ],
        videoProcessList: [
            {
                title: 'PROMO',
                url: 'https://promo.com/',
                image: 'https://promo.com/favicons/favicon180x180.png',
                description: 'Promo.com gives you ready-made video templates, high-quality footage, fully-licensed music, a built-in editor and free image tools so you can create stunning marketing visuals to promote anything, anywhere.',
                imageList: ['https://pic1.zhimg.com/80/v2-ac7691df56ab1c020fee147864d0ad70_hd.jpg']
            },
        ],
        mixtureProcessList: [
            {
                title: '网易见外工作台',
                url: 'https://jianwai.netease.com/',
                image: 'https://jianwai.netease.com/favicon.ico',
                description: '网易见外是网易出品的一个多功能黑科技办公网站。它支持每日 2 小时免费体验，它支持的黑科技实用功能包括：视频翻译、视频转写、字幕翻译、文档翻译、语音翻译、语音转写、会议同传、图片翻译，每个功能都是非常实用。',
                imageList: ['https://pic3.zhimg.com/80/v2-7bdf43196d90b905607a757b12d8bee8_hd.jpg', 'https://pic1.zhimg.com/80/v2-0adec74a08356cebc971052816bbf1f2_hd.jpg']
            },
        ],
        formatConversion: [
            {
                title: '凹凸凹在线格式转换',
                url: 'http://www.alltoall.net/',
                image: 'http://www.alltoall.net/qfy-content/uploads/2016/06/fa70f63e4bbcc259632aae74746ce5d6.png',
                description: '凹凸凹(www.alltoall.net)是中国最全面的格式转换平台。支持约200多种格式的文件转换，包括：视频、音频、图片、字体等多媒体文件，以及常见的office文件、PDF、电子书等文档。',
                imageList: ['https://pic3.zhimg.com/80/v2-58eaac226adc8041d46b739adf0e22ab_hd.jpg']
            },
            {
                title: 'onlinedoctranslator',
                url: 'https://www.onlinedoctranslator.com/',
                image: 'https://www.onlinedoctranslator.com/resources/img/logo-icons.png',
                description: '免费的在线服务，将办公文档（Word，Excel，Powerpoint，PDF，OpenOffice，文本）翻译成多种语言，并保持原始排版。 支持的文件格式包括，Word文档：doc、docx；PDF文档：pdf； Excel文档：xls、xlsx；PowerPoint文档：ppt、pptx；文本文档：xml、txt等',
                imageList: ['https://pic4.zhimg.com/80/v2-f91aee0ccfdccc55610df5c3f424d051_hd.jpg']
            },
            {
                title: 'pdf派',
                url: 'https://www.pdfpai.com/',
                image: 'https://www.pdfpai.com/statics/images/favicon.ico',
                description: 'PDF派提供20个免费的在线PDF工具，包括PDF转换，PDF合并拆分，加密解密PDF，压缩PDF等。所有功能简单易用，只需上传文件，稍等片刻即可下载，无需下载软件，PDF派是您值得拥有的PDF在线工具包。',
                imageList: ['https://pic3.zhimg.com/80/v2-d39868c212e922f6a2ba10fc88871404_hd.jpg']
            },
            {
                title: 'iLovePDF',
                url: 'https://www.ilovepdf.com/zh-cn',
                image: 'https://www.ilovepdf.com/img/favicons-pdf/favicon-16x16.png',
                description: '合并PDF文件，拆分PDF文件，合并PDF文件，提取PDF文件，压缩PDF文件，转换PDF文件，Word转换为PDF文件，Excel转换为PDF文件，Powerpoint转换为PDF文件，PDF转换为JPG图片，JPG转换为PDF文件',
                imageList: ['https://pic2.zhimg.com/80/v2-0806eb9e6b0ff4b39031d26b160ec910_hd.jpg']
            },
            {
                title: 'smallpdf',
                url: 'https://smallpdf.com/cn/',
                image: 'https://smallpdf.com/favicon.ico',
                description: 'Smallpdf - 让您轻松转换和编辑所有PDF文件的平台。一个网站就能解决您所有的PDF问题 – 是的，免费！',
                imageList: ['https://pic3.zhimg.com/80/v2-68f60d2cb4da2189f5da22a334cd9de6_hd.jpg']
            },
        ]
    }

    var activeList = 'hostList'

    function init () {
        drawList()
    }

    drawList = function(type = 'hotList', index = 0) {
        handleChangeType(index)
        let drawString = ''
        activeList = type
        webObject[activeList].forEach((item,index) => {
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
        $('.right-content').html(drawString)
    }

    handleChangeType = function(value) {
        $('.tree-item').removeClass('active-item')
        $('.tree-item').eq(value).addClass('active-item')
    }

    showSwiper = function(value) {
        let drawString = ''
        webObject[activeList][value].imageList.forEach(item => {
            drawString += `<div class="swiper-slide" style="background-image:url(${item})"></div>`
        })
        $('.swiper-wrapper').html(drawString)
        setTimeout(() => {
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
        if (webObject[activeList][index].domain) {
            window.open(webObject[activeList][index].url)
        } else {
            $('.iframe').attr('src', webObject[activeList][index].url)
            $('.iframe-title').html(webObject[activeList][index].title)
            $('.swiper-shade').eq(1).removeClass('opacity0')
            $('.swiper-shade').eq(1).css('z-index', '2')
            setTimeout(() => {
                $('.iframe-box').css('display', 'block')
                $('.loading').css('display', 'none')
            }, 4000)
        }
        // $('.iframe').attr('src', webObject[activeList][index].url)
        //     $('.iframe-title').html(webObject[activeList][index].title)
        //     setTimeout(() => {
        //         $('.swiper-shade').eq(1).removeClass('opacity0')
        //         $('.swiper-shade').eq(1).css('z-index', '2')
        //     }, 500)
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