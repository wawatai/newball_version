//ad
$(document).on('ready', function () {
	$(".single-item").slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
		arrows: false,
	})
})

//mainList list切換
$(function(){
	$(".mainList .list li").click(function(){
		$(this)
		.addClass("active")
		.siblings().removeClass("active");
	})
})

//login slip
$(function(){
	$(".loginWrap .slip").click(function(){
		window.location.href="./html/innerIndex.html";
	})
})

//chart
$(function(){
	$(".chartWrap .listBox li,.chartWrap .btnBox button").click(function(){
		$(this)
		.addClass("active")
		.siblings().removeClass("active");
	})

	$(".chartWrap .btnBox button").click(function(){
		var n = $(this).index();
		
		$(".chartWrap .listBox li:eq("+ n +")")
		.addClass("active")
		.siblings().removeClass("active");
	})
	$(".chartWrap .listBox li").click(function(){
		var n = $(this).index();

		$(".chartWrap .btnBox button:eq("+ n +")")
		.addClass("active")
		.siblings().removeClass("active");
	})
})

//innerTopList
$(function(){
	$(".innerTopList li").click(function(){
		$(this)
		.addClass("active")
		.siblings().removeClass("active");
	})

	$(".innerTopList li:eq(0)").click(function(){
		$(".typeBox")
		.addClass("display");

		$(".emptyBox")
		.removeClass("display");
	})
	$(".innerTopList li:eq(0)").siblings().click(function(){
		$(".typeBox")
		.removeClass("display");

		$(".emptyBox")
		.addClass("display");
	})
})

//nameType
$(function(){
	$(".nameType .row").click(function(){
		$(this)
		.toggleClass("old");

		$(".gameWrap")
		.siblings(".gameWrap").toggleClass("display");

		$(".setMenu .row.type")
		.toggleClass("active");
	})
})

//進行中未開賽收放
$(function(){
	$(".gameWrap .ing .titleTime,.gameWrap .ready .titleTime").click(function(){
		$($(this).closest("div"))
		.toggleClass("active");
	})
})

//filter
$(function(){
	$("header .title.list").click(function(){
		$(".jumpWindow")
		.removeClass("display");

		$(".filter,.mainWrapList")
		.addClass("display");
	})
	$(".mainWrapList button").click(function(){
		$(this)
		.addClass("active")
		.siblings().removeClass("active");

		$(".filter")
		.removeClass("display");
	})

	$("footer .setBtn").click(function(){
		$(".jumpWindow")
		.removeClass("display");

		$(".filter,.setMenu")
		.addClass("display");
	})
	$(".setMenu .check").click(function(){
		$(".filter")
		.removeClass("display");
	})

	$(".gameWrap .btnBox button").click(function(){
		$(".jumpWindow")
		.removeClass("display");

		$(".filter,.betWindow")
		.addClass("display");
	})
	$(".betWindow .cancelBtn").click(function(){
		$(".filter")
		.removeClass("display");
	})

	$(".resultWrap .resultList .ballBtn").click(function(){
		$(this)
		.addClass("active")
		.siblings().removeClass("active");

		$(".jumpWindow")
		.removeClass("display");

		$(".filter,.ballType")
		.addClass("display");
	})
	$(".resultWrap .resultList .timeBtn").click(function(){
		$(this)
		.addClass("active")
		.siblings().removeClass("active");

		$(".jumpWindow")
		.removeClass("display");

		$(".filter,.timeType")
		.addClass("display");
	})
	$(".ballType .close_ic,.timeType .close_ic").click(function(){
		$(".filter")
		.removeClass("display");

		$(".resultWrap .resultList li")
		.removeClass("active");
	})

	$(".betListBtn").click(function(){
		$(".jumpWindow")
		.removeClass("display");

		$(".filter,.betListWindow")
		.addClass("display");
	})
	$(".betListWindow .cancelBtn").click(function(){
		$(".filter")
		.removeClass("display");
	})

	$(".multiWrap .bottomBox.finish .lastBtn").click(function(){
		$(".jumpWindow")
		.removeClass("display");

		$(".multiWrap")
		.removeClass("display");

		$(".filter,.goWindow")
		.addClass("display");
	})

	$(".passwordWrap .check").click(function(){
		$(".jumpWindow")
		.removeClass("display");

		$(".filter")
		.css("z-index","101");

		$(".filter,.goWindow")
		.addClass("display");
	})

	$(".memberWrap .bottom .forBasic").click(function(){
		$(".jumpWindow")
		.removeClass("display");

		$(".filter")
		.css("z-index","101");
		$("footer")
		.css("display","none");

		$(".filter,.noviceWindow.basic")
		.addClass("display");
	})
	$(".memberWrap .bottom .forSingle").click(function(){
		$(".jumpWindow")
		.removeClass("display");

		$(".filter")
		.css("z-index","101");
		$("footer")
		.css("display","none");

		$(".filter,.noviceWindow.single")
		.addClass("display");
	})
	$(".memberWrap .bottom .forMulti").click(function(){
		$(".jumpWindow")
		.removeClass("display");

		$(".filter")
		.css("z-index","101");
		$("footer")
		.css("display","none");

		$(".filter,.noviceWindow.multi")
		.addClass("display");
	})
	$(".memberWrap .bottom .forBet").click(function(){
		$(".jumpWindow")
		.removeClass("display");

		$(".filter")
		.css("z-index","101");
		$("footer")
		.css("display","none");

		$(".filter,.noviceWindow.bet")
		.addClass("display");
	})


	$(".goWindow .cancelBtn,.goWindow .content button").click(function(){
		$(".filter")
		.removeClass("display");
	})
	$(".noviceWindow .cancelBtn,.noviceWindow .cancel").click(function(){
		$(".filter")
		.removeClass("display");

		$("footer")
		.css("display","block");
	})
})

//setMenu
$(function(){
	$(".setMenu .row").click(function(){
		$(this)
		.toggleClass("active");
	})

	//新手老手版切換
	$(".setMenu .row.type").click(function(){
		$(".gameWrap")
		.toggleClass("display");

		$(".nameType .row")
		.toggleClass("old");
	})

	//聯盟時間排序切換
	$(".setMenu .row.leagueTime").click(function(){
		$(".gameWrap .gameBox .title,.gameWrap .more .league")
		.toggleClass("display");
	})
})

//searchWrap
$(function(){
	$("header .search_ic").click(function(){
		$(".searchWrap")
		.addClass("active");
	})

	$(".searchWrap .cancel_ic,.searchWrap .back").click(function(){
		$(".searchWrap")
		.removeClass("active");
	})
})

//multiWrap
$(function(){
	$(".mainWrapList button:eq(3)").click(function(){
		$(".multiWrap")
		.addClass("display");
	})
	$(".mainWrapList button:eq(3)").siblings().click(function(){
		$(".multiWrap")
		.removeClass("display");
	})

	$(".multiWrap .title").click(function(){
		$(".multiWrap")
		.toggleClass("active");

		$(".jumpWindow.calc")
		.siblings().removeClass("display");

		$(".filter")
		.toggleClass("display");
	})

	$(".multiWrap .calcBtn").click(function(){
		$(".calc")
		.addClass("display");

		$(".multiWrap")
		.addClass("active");
	})
	$(".calc .cancelBtn").click(function(){
		$(".calc,.filter")
		.removeClass("display");
	})

	$(".multiWrap .bottomBox.unready .checkBtn").click(function(){
		$(".multiWrap .bottomBox")
		.toggleClass("display");
	})
})

//bettingRecord
$(function(){
	$(".recordList li").click(function(){
		$(this)
		.addClass("active")
		.siblings().removeClass("active");
	})
	$(".recordList li:eq(0)").click(function(){
		$(".recordWrap .nowBetting")
		.addClass("display")
		.siblings().removeClass("display");
	})
	$(".recordList li:eq(1)").click(function(){
		$(".recordWrap .historyBetting")
		.addClass("display")
		.siblings().removeClass("display");
	})

	$(".nowBetting .bettingBox .title").click(function(){
		$(this).closest(".bettingBox")
		.toggleClass("active");

		$(this).next(".outerCnt")
		.toggleClass("display");
	})

	$(".historyBetting .bettingBox .bigTitle").click(function(){
		$(this).closest(".bettingBox")
		.toggleClass("active");
	})
	$(".historyBetting .box .title").click(function(){
		$(this).closest(".box")
		.toggleClass("active");

		$(this).next(".outerCnt")
		.toggleClass("display");
	})

	$(".recordWrap .historyBetting .historyList li").click(function(){
		$(this)
		.addClass("active")
		.siblings().removeClass("active");
	})
	$(".recordWrap .historyBetting .historyList li:eq(0)").click(function(){
		$(".recordWrap .historyBetting .dateBox:eq(0)")
		.addClass("display")
		.siblings().removeClass("display");
	})
	$(".recordWrap .historyBetting .historyList li:eq(0)").siblings().click(function(){
		$(".recordWrap .historyBetting .dateBox:eq(0)")
		.removeClass("display")
		.siblings().addClass("display");
	})
})

//betListWindow
$(function(){
	$(".betListWindow .bettingBox .title").click(function(){
		$(this).closest(".bettingBox")
		.toggleClass("active");

		$(this).next(".outerCnt")
		.toggleClass("display");
	})
})

//member
$(function(){
	$(".memberWrap .top .link").click(function(){
		$(".infoWrap")
		.addClass("display");
	})
	$(".infoWrap .cancel_ic").click(function(){
		$(".infoWrap")
		.removeClass("display");
	})

	$(".infoWrap .content.unready .check").click(function(){
		$(".infoWrap .content")
		.toggleClass("display");
	})

	$(".infoWrap .content.finish .changeBtn").click(function(){
		$(".changeBtn")
		.text("終了");

		$(".infoWrap .content.finish .fake")
		.removeClass("display");

		$(".infoWrap .content.finish .check")
		.addClass("display");
	})
	$(".infoWrap .content.finish .check").click(function(){
		$(".changeBtn")
		.text("改訂");

		$(".infoWrap .content.finish .fake")
		.addClass("display");

		$(".infoWrap .content.finish .check")
		.removeClass("display");
	})
})

//control
$(function(){
	$(".controlWrap .rowBox .row,.controlWrap .spRow .row").click(function(){
		$(this)
		.toggleClass("active");
	})

	$(".controlWrap .passwordBtn").click(function(){
		$(".passwordWrap")
		.addClass("active");
	})

	$(".passwordWrap .cancel_ic").click(function(){
		$(".passwordWrap")
		.removeClass("active");
	})
})

//service
$(function(){
	$("header .optionBtn").click(function(){
		$(".optionWrap")
		.addClass("display");
	})
	$(".optionWrap .cancel_ic").click(function(){
		$(".optionWrap")
		.removeClass("display");
	})

	$(".optionWrap .header a").click(function(){
		$(".mineOptionWrap")
		.addClass("display");
	})
	$(".mineOptionWrap .cancel_ic").click(function(){
		$(".mineOptionWrap")
		.removeClass("display");
	})
})

//inner
$(function(){
	$(".mainWrap .more .listBox").click(function(){
		$(".innerWrap")
		.addClass("active");
	})
	$(".innerWrap .leave .arrow_ic").click(function(){
		$(".innerWrap")
		.removeClass("active");
	})

	$(".innerWrap .liveBtn,.innerWrap .top.live .arrow_ic").click(function(){
		$(".innerWrap .top")
		.toggleClass("display");
	})
})

//bettingAmount
$(function(){
	$(".amountWrap li").click(function(){
		$(this)
		.addClass("active")
		.siblings().removeClass("active");
	})
})

//transfer
$(function(){
	$(".transferWrap .bottom .row").click(function(){
		$(this)
		.toggleClass("active");
	})
})

//post
$(function(){
	$(".postWrap .postList li").click(function(){
		$(this)
		.addClass("active")
		.siblings().removeClass("active");
	})

	$(".postWrap .postList li:eq(0)").click(function(){
		$(".postWrap .postCnt .cntBox:eq(0)")
		.addClass("display")
		.siblings().removeClass("display");
	})
	$(".postWrap .postList li:eq(0)").siblings().click(function(){
		$(".postWrap .postCnt .cntBox:eq(0)")
		.removeClass("display")
		.siblings().addClass("display");
	})
})

//teach
$(function(){
	$(".teachWrap .teachList li").click(function(){
		$(this)
		.addClass("active")
		.siblings().removeClass("active");

		var n = $(this).index();
		
		$(".teachWrap .teachBox .teachType:eq("+ n +")")
		.addClass("display")
		.siblings().removeClass("display");
	})

	$(".teachWrap .type li").click(function(){
		$(this)
		.addClass("active")
		.siblings().removeClass("active");
	})
	$(".teachWrap .type li:eq(0)").click(function(){
		$(".teachWrap .teachType .type.p1")
		.addClass("display")
		.siblings().removeClass("display");
	})
	$(".teachWrap .type li:eq(1)").click(function(){
		$(".teachWrap .teachType .type.p2")
		.addClass("display")
		.siblings().removeClass("display");
	})
})

//result
$(function(){
	$(".resultWrap .dayList li").click(function(){
		$(this)
		.addClass("active")
		.siblings().removeClass("active");
	})
})

//novice
$(function(){
	$(".memberWrap .bottom .noviceBtn").click(function(){
		$(".memberWrap .bottom")
		.toggleClass("display");
	})

	$(".noviceWindow .next").click(function(){
		$(this).closest("div").next()
		.addClass("display")
		.siblings().removeClass("display");
	})
})