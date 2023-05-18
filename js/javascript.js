
//btnbar共用button效果
$(function(){
    $('.btnbar button').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
})

//頁面自由寬高縮放
$(function () {
    var high = $(".rulebox");
    var wH = window.innerHeight;
    high.css("height", (String(wH - 270) + "px"));
    $(window).resize(function () {
            var high = $(".rulebox");
            var wH = window.innerHeight;
            high.css("height", (String(wH - 270) + "px"));

            var btnWdth=$(window).width();
            if(btnWdth <= 767){
                high.css("height", (String(wH - 40) + "px"));
            }
    });

    var wdth = $("body");
    var wW = window.innerWidth;
    wdth.css("width", (String(wW - 70) + "px"));
    $(window).resize(function () {
            var wdth = $("body");
            var wW = window.innerWidth;
            wdth.css("width", (String(wW - 70) + "px"));

            var btnWdth=$(window).width();
            if(btnWdth <= 640){
                wdth.css("width", (String(wW - 0) + "px"));
            }
    });

    var btnWdth=$(window).width()
    if(btnWdth <= 640){
        high.css("height", (String(wH - 40) + "px"));
        wdth.css("width", (String(wW - 0) + "px"));
    }
});

//籃球規則頁面切換
$(function(){
    $('.bask button:nth-of-type(1)').click(function(){
        $('.deal-rule').addClass('display');
        $('.deal-rule').siblings().removeClass('display');
    });
    $('.bask button:nth-of-type(2)').click(function(){
        $('.single-rule').addClass('display');
        $('.single-rule').siblings().removeClass('display');
    });
    $('.bask button:nth-of-type(3)').click(function(){
        $('.half-rule').addClass('display');
        $('.half-rule').siblings().removeClass('display');
    });
    $('.bask button:nth-of-type(4)').click(function(){
        $('.ground-rule').addClass('display');
        $('.ground-rule').siblings().removeClass('display');
    });
    $('.bask button:nth-of-type(5)').click(function(){
        $('.complex-rule').addClass('display');
        $('.complex-rule').siblings().removeClass('display');
    });
})

//棒球規則頁面切換
$(function(){
    $('.base button:nth-of-type(1)').click(function(){
        $('.deal-rule').addClass('display');
        $('.deal-rule').siblings().removeClass('display');
    });
    $('.base button:nth-of-type(2)').click(function(){
        $('.single-rule').addClass('display');
        $('.single-rule').siblings().removeClass('display');
    });
    $('.base button:nth-of-type(3)').click(function(){
        $('.half-rule').addClass('display');
        $('.half-rule').siblings().removeClass('display');
    });
    $('.base button:nth-of-type(4)').click(function(){
        $('.score-rule').addClass('display');
        $('.score-rule').siblings().removeClass('display');
    });
    $('.base button:nth-of-type(5)').click(function(){
        $('.ground-rule').addClass('display');
        $('.ground-rule').siblings().removeClass('display');
    });
    $('.base button:nth-of-type(6)').click(function(){
        $('.let-rule').addClass('display');
        $('.let-rule').siblings().removeClass('display');
    });
    $('.base button:nth-of-type(7)').click(function(){
        $('.complex-rule').addClass('display');
        $('.complex-rule').siblings().removeClass('display');
    });
    $('.base button:nth-of-type(8)').click(function(){
        $('.touch-rule').addClass('display');
        $('.touch-rule').siblings().removeClass('display');
    });
})

//足球/世界盃規則頁面切換
$(function(){
    $('.soc button:nth-of-type(1)').click(function(){
        $('.deal-rule').addClass('display');
        $('.deal-rule').siblings().removeClass('display');
    });
    $('.soc button:nth-of-type(2)').click(function(){
        $('.single-rule').addClass('display');
        $('.single-rule').siblings().removeClass('display');
    });
    $('.soc button:nth-of-type(3)').click(function(){
        $('.half-rule').addClass('display');
        $('.half-rule').siblings().removeClass('display');
    });
    $('.soc button:nth-of-type(4)').click(function(){
        $('.roll-rule').addClass('display');
        $('.roll-rule').siblings().removeClass('display');
    });
    $('.soc button:nth-of-type(5)').click(function(){
        $('.correct-rule').addClass('display');
        $('.correct-rule').siblings().removeClass('display');
    });
    $('.soc button:nth-of-type(6)').click(function(){
        $('.half-all-rule').addClass('display');
        $('.half-all-rule').siblings().removeClass('display');
    });
    $('.soc button:nth-of-type(7)').click(function(){
        $('.all-in-rule').addClass('display');
        $('.all-in-rule').siblings().removeClass('display');
    });
    $('.soc button:nth-of-type(8)').click(function(){
        $('.standard-rule').addClass('display');
        $('.standard-rule').siblings().removeClass('display');
    });
    $('.soc button:nth-of-type(9)').click(function(){
        $('.let-rule').addClass('display');
        $('.let-rule').siblings().removeClass('display');
    });
    $('.soc button:nth-of-type(10)').click(function(){
        $('.complex-rule').addClass('display');
        $('.complex-rule').siblings().removeClass('display');
    });
    $('.soc button:nth-of-type(11)').click(function(){
        $('.champion-rule').addClass('display');
        $('.champion-rule').siblings().removeClass('display');
    });
})

//美式足球
$(function(){
    $('.ftb button:nth-of-type(1)').click(function(){
        $('.deal-rule').addClass('display');
        $('.deal-rule').siblings().removeClass('display');
    });
    $('.ftb button:nth-of-type(2)').click(function(){
        $('.single-rule').addClass('display');
        $('.single-rule').siblings().removeClass('display');
    });
    $('.ftb button:nth-of-type(3)').click(function(){
        $('.half-rule').addClass('display');
        $('.half-rule').siblings().removeClass('display');
    });
    $('.ftb button:nth-of-type(4)').click(function(){
        $('.ground-rule').addClass('display');
        $('.ground-rule').siblings().removeClass('display');
    });
    $('.ftb button:nth-of-type(5)').click(function(){
        $('.let-rule').addClass('display');
        $('.let-rule').siblings().removeClass('display');
    });
    $('.ftb button:nth-of-type(6)').click(function(){
        $('.complex-rule').addClass('display');
        $('.complex-rule').siblings().removeClass('display');
    });
})

//網球
$(function(){
    $('.ten button:nth-of-type(1)').click(function(){
        $('.deal-rule').addClass('display');
        $('.deal-rule').siblings().removeClass('display');
    });
    $('.ten button:nth-of-type(2)').click(function(){
        $('.single-rule').addClass('display');
        $('.single-rule').siblings().removeClass('display');
    });
    $('.ten button:nth-of-type(3)').click(function(){
        $('.standard-rule').addClass('display');
        $('.standard-rule').siblings().removeClass('display');
    });
    $('.ten button:nth-of-type(4)').click(function(){
        $('.roll-rule').addClass('display');
        $('.roll-rule').siblings().removeClass('display');
    });
})

//電競
$(function(){
    $('.esp button:nth-of-type(1)').click(function(){
        $('.deal-rule').addClass('display');
        $('.deal-rule').siblings().removeClass('display');
    });
    $('.esp button:nth-of-type(2)').click(function(){
        $('.SC-rule').addClass('display');
        $('.SC-rule').siblings().removeClass('display');
    });
    $('.esp button:nth-of-type(3)').click(function(){
        $('.CS-rule').addClass('display');
        $('.CS-rule').siblings().removeClass('display');
    });
    $('.esp button:nth-of-type(4)').click(function(){
        $('.LOL-rule').addClass('display');
        $('.LOL-rule').siblings().removeClass('display');
    });
    $('.esp button:nth-of-type(5)').click(function(){
        $('.DOTA-rule').addClass('display');
        $('.DOTA-rule').siblings().removeClass('display');
    });
    $('.esp button:nth-of-type(6)').click(function(){
        $('.FIFA-rule').addClass('display');
        $('.FIFA-rule').siblings().removeClass('display');
    });
})

//其他籃球

$(function(){
    $('.else button:nth-of-type(1)').click(function(){
        $('.deal-rule').addClass('display');
        $('.deal-rule').siblings().removeClass('display');
    });
    $('.else button:nth-of-type(2)').click(function(){
        $('.single-rule').addClass('display');
        $('.single-rule').siblings().removeClass('display');
    });
    $('.else button:nth-of-type(3)').click(function(){
        $('.complex-rule').addClass('display');
        $('.complex-rule').siblings().removeClass('display');
    });
})

//RWD視窗切換
$(function(){
    $('.rwdbtn').click(function(){
        $('.rwd').removeClass('slide');
    })
})

// //手機版第一頁切換
// $(function(){
//     $(window).resize(function(){
//         var btnWdth=$(window).width();
//         if(btnWdth <= 640){
//             window.location.href = "./rwdNav.html";
//             if(window.location.href.indexOf("index") > 0 ){
//                 window.location.href = "./html/rwdNav.html";
//             };
//         };
//         if(btnWdth > 640){
//             if(window.location.href.indexOf("rwdNav") > 0 ){
//                 history.go(-1);
//             };
//         }
//   }  );
// })

// function isMobileDevice() {
//     const mobileDevice = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone']
//     let isMobileDevice = mobileDevice.some(e => navigator.userAgent.match(e))
//     return isMobileDevice
// }

// $(function(){
//     if(isMobileDevice() == 1){
//         window.location.href = "../html/rwdNav.html";
//     };
// })

$(function(){
    if(window.location.href.indexOf('#') > 0 ){
        $('.rwd').addClass('slide');
    };
})