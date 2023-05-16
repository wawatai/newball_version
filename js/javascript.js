//time
function currentTime() {
    now = new Date();
    yy = now.getFullYear();
    mm = now.getMonth() + 1;
    dd = now.getDate();
    h = now.getHours();
    m = now.getMinutes();
    s = now.getSeconds();
    var curTime = document.getElementsByClassName('time');
    curTime[0].innerHTML = yy+'/'+mm+'/'+dd+'&emsp;'+h+' : '+m+' : '+s;
    setTimeout('currentTime()',1000);

    if(h < 10)
    {
        curTime[0].innerHTML = yy+'/'+mm+'/'+dd+'&emsp;0'+h+' : '+m+' : '+s;
    }
    if(m < 10)
    {
        curTime[0].innerHTML = yy+'/'+mm+'/'+dd+'&emsp;'+h+' : 0'+m+' : '+s;
    }
    if(s < 10)
    {
        curTime[0].innerHTML = yy+'/'+mm+'/'+dd+'&emsp;'+h+' : '+m+' : 0'+s;
    }
}

//cube
$(function(){
    $(".cube").on("click",function(){
        $(this)
        .toggleClass("active");
    })
})

//chleague
$(function(){
    $(".topfix .chooseLeague").on("click",function(){
        $(".chleague")
        .toggleClass("display");
    })

    $(".chleague button").on("click",function(){
        $(".chleague")
        .removeClass("display");
    })
})

//自動高度
$(function(){
    var h = $(window).innerHeight();
    $(".left").css("height",""+ (h - 105) +"px");
    $(".middle").css("height",""+ (h - 160) +"px");
    $(".middle.inner").css("height",""+ (h - 235) +"px");
    $(".innerBetBox").css("height",""+ (h - 300) +"px");
    $(".right .liveListBox").css("height",""+ (h - 453) +"px");
    $(".right .bettingStatus").css("height",""+ (h - 453) +"px");

    $(window).resize(function(){
        var h = $(window).innerHeight();
        $(".left").css("height",""+ (h - 105) +"px");
        $(".middle").css("height",""+ (h - 160) +"px");
        $(".middle.inner").css("height",""+ (h - 235) +"px");
        $(".innerBetBox").css("height",""+ (h - 300) +"px");
        $(".right .liveListBox").css("height",""+ (h - 453) +"px");
        $(".right .bettingStatus").css("height",""+ (h - 453) +"px");
    })
})

//leftNAV
$(function(){
    $(".left li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        $(".mainArea .center")
        .addClass("display")
        .siblings().removeClass("display");
    })

    $(".left li").on("click",function(){
        var n = $(this).index();

        $(".center .mainBox:eq("+ n +"),.center .market:eq("+ n +"),.center .score:eq("+ n +"),.center .result:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })

    $(".left .smallList").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");
    })
})

//innerBtn
$(function(){
    $(".market .innerBtn").on("click",function(){
        
        if($(this).closest(".market").hasClass("soccer"))
        {
            $(".innerPage,.innerBox.soccer")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if($(this).closest(".market").hasClass("basketball USA"))
        {
            $(".innerPage,.innerBox.basketball.USA")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if($(this).closest(".market").hasClass("basketball else"))
        {
            $(".innerPage,.innerBox.basketball.else")
            .addClass("display")
            .siblings().removeClass("display");
        }
    })

    $(".innerBox .topfix button").on("click",function(){

        if($(this).closest(".innerBox").hasClass("soccer"))
        {
            $(".center,.market.soccer.type_1")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if($(this).closest(".innerBox").hasClass("basketball USA"))
        {
            $(".center,.market.basketball.USA.type_1")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if($(this).closest(".innerBox").hasClass("basketball else"))
        {
            $(".center,.market.basketball.else.type_1")
            .addClass("display")
            .siblings().removeClass("display");
        }
    })
})

//right
$(function(){
    //即時資訊單數
    var count = $(".right .statusWindow .ST_Window li").length;
    $(".right .statusWindow .stNumber").text(count);

    //room livelist展開切換
    $(".right .room .twobut button").click(function(){
        var btn = $(this).index();

        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        if(btn == 0) {
            $(".right .room .liveListBox")
            .addClass("display")
            .siblings().removeClass("display");
        }
        if(btn == 1) {
            $(".right .room .bettingStatus")
            .addClass("display")
            .siblings().removeClass("display");
        }
    })

    //room livelist點擊選擇播放影片
    $(".right .room .livelist .innerList").click(function(){
        var leftTeam = $(this).find(".teamA").text();
        var rightTeam = $(this).find(".teamB").text();

        if ($(this).find("button").prop("disabled"))
        {
            alert("視頻尚未準備完成，請稍後在試");
        } 
        else {
            $(".right .liveWindow .teamWindow .leftTeam").text(leftTeam);
            $(".right .liveWindow .teamWindow .rightTeam").text(rightTeam);
           
            $(".right .liveWindow .teamWindow")
            .addClass("display");
    
            $(this)
            .addClass("active");
        }
    })

    //room livelist展開切換
    $(".right .room .livelist .liveTitle").click(function(){
        $(this).parent()
        .toggleClass("display")
        .siblings().removeClass("display");
    })
})

//teach 盤口教程
$(function(){
    $(".teach .topfix ul li").click(function(){
        var count = $(this).index();
       
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        $(".teach .teachContent:eq("+ count +")")
        .addClass("display")
        .siblings().removeClass("display");

        //針對比分字長調整font-size
        $(".teach .midBox .score").each(function(){
            
            if($(this).text().length >= 6)
            {
                $(this)
                .css("font-size","16px");
            }
            else if($(this).text().length >= 5)
            {
                $(this)
                .css("font-size","18px");
            }
        })
    })
})

//instantBet
$(function(){
    $(".instantBet table").click(function(){
        $(this)
        .toggleClass("active");
    })
})

//contact
$(function(){
    $(".topfix.contact .fixbar li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".middle.inner .contact:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//message
$(function(){
    $(".message .questionBox .title").on("click",function(){
        $(this)
        .addClass("active")
        .next().addClass("active");

        $(this).closest(".questionBox")
        .siblings().find(".title,.textBox")
        .removeClass("active");
    })
})

//betRecord
$(function(){
    $(".betRecord .detaBox .firstLine").click(function(){

        if($(this).next().hasClass("recordbox"))
        {
            $(this).parent()
            .toggleClass("active");
        }

        $(this).parent()
        .siblings().removeClass("active");
    })
    $(".betRecord .recordbox table").click(function(){
        $(this)
        .toggleClass("active");
    })
})

//row
$(function(){
    $(".row").on("click",function(){
        $(this)
        .toggleClass("turn");
    })

    $(".controlWindow .row").on("click",function(){
        var n = $(".left li.active").index();

        console.log(n);
    })
})

//jumpWindow
$(function(){
    $(".jumpWindow .close").on("click",function(){
        $(".filter")
        .removeClass("display");
    })

    $(".conversionBtn").on("click",function(){
        $(".jumpWindow")
        .removeClass("display");

        $(".filter,.conversionWindow")
        .addClass("display");
    })

    $(".controlBtn").on("click",function(){
        $(".jumpWindow")
        .removeClass("display");

        $(".filter,.controlWindow")
        .addClass("display");
    })

    $(document).on("click",".market table button:not(.mixStyle)",function(){
        $(".jumpWindow")
        .removeClass("display");

        $(".filter,.betWindow")
        .addClass("display");
    })

    $(".betWindow .betBox button:last-child").on("click",function(){
        $(".jumpWindow")
        .removeClass("display");

        $(".filter,.checkWindow")
        .addClass("display");
    })

    $(".changePwBtn").on("click",function(){
        $(".jumpWindow")
        .removeClass("display");

        $(".filter,.changePwWindow")
        .addClass("display");
    })

    $(".mixpass .betBtn").on("click",function(){
        $(".jumpWindow")
        .removeClass("display");

        $(".filter,.checkMixWindow")
        .addClass("display");
    })
})

//mixpass
$(function(){
    $(".innerSide .left ul li .smallList").click(function(event){
        var mix = "混合過關";

        if($(this).find("p").text() == mix) 
        {
            $(".center .mixpass")
            .addClass("display");

            $(".market table button")
            .addClass("mixStyle");
        }
        else
        {
            $(".center .mixpass")
            .removeClass("display");

            $(".market table button")
            .removeClass("mixStyle active");
        }

        event.stopPropagation();
    })

    $(".innerSide .left ul li").click(function(){
    
        $(".mixpass")
        .removeClass("display");

        $(".market table button")
        .removeClass("mixStyle active");

        $(this).find(".smallList:eq(0)")
        .addClass("active")
        .siblings()
        .removeClass("active");
    })

    $('.mixpass .title').click(function(){
        $(this).parent()
        .toggleClass("active");

        if($(".mixpass .countingBox").find("table").length > 1 )
        {
            $(".mixpass .content")
            .css("height","464px");

        } else {
            $(".mixpass .content")
            .css("height","335px");
        }

        if($(".mixpass .content").height() > 1)
        {
            $(".mixpass .content")
            .css("height","0px");
        }
    })

    $(".calbtn").on("click",function(event){
        $(".jumpWindow")
        .removeClass("display");

        $(".filter,.calcWindow")
        .addClass("display");

        event.stopPropagation();
    })

    $(document).on("click",".mixStyle",function(){
        $(this)
        .toggleClass("active")
        .siblings().removeClass("active");

        $(this).closest("td")
        .siblings().find("button")
        .removeClass("active");
    })

    var f = 0;
    $(".mixpass .calculate button").on("click",function(){
        var n = parseInt($(this).val());

        f = f + n;

        $(".mixpass .calculate label:first-child input")
        .attr("value",""+ f +"");

        if($(this).hasClass("clear") || $(this).hasClass("betBtn"))
        {
            $(".mixpass .calculate label:first-child input")
            .attr("value","");
        }

        if($(".mixpass .calculate label:first-child input").val() != "")
        {
            $(".mixpass .betBtn").prop("disabled",false);
        }
        else
        {
            $(".mixpass .betBtn").prop("disabled",true);
        }
    })
})

//onTime
$(function(){
    $(".center .market.onTime table tr:first-child").on("click",function(){
        $(this).closest("table")
        .toggleClass("active");
    })

    $(".center .market.onTime .title").on("click",function(){
        $(this).closest("ol")
        .toggleClass("active");
    })
})