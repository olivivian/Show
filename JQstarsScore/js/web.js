$(document).ready(function(){
	starsFun();
});//end ready


//stars function
function starsFun(){
	$("#JS_xing>span").on("mouseover",function(){
		var _this = $(this);
		var n = _this.index()+1; //当前标签的索引
		_this.prevAll("span").removeClass("star_gray");
		_this.nextAll("span").addClass("star_gray");
		_this.removeClass("star_gray");
		//console.log(n);
		$("#JS_fenshu").html(n);
	});
	$("#JS_xing>span").on("click",function(){
		$("#JS_xing>span").off();//删除所有事件
	});
}










