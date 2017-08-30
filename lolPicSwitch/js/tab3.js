/**
 * Created by Administrator on 17-8-29.
 */
$(document).ready(function(){
    tabFun();
   
});


function tabFun(){
    var  nowp = 0 ;
     $("#JS_tabTitle>li").on("mouseover",function(){
        var _this = $(this);
        nowp = _this.index();  //索引
        moveContent(nowp);
    });

    var myvar = setInterval(function(){ 
        nowp++;
        if( nowp>4){
            nowp = 0;
        }
        moveContent(nowp);
    }, 2000);

     $("#tabBox").hover(function(){
       clearInterval(myvar);
    },function(){
         myvar = setInterval(function(){ 
            nowp++;
            if( nowp>4){
                nowp = 0;
            }
            moveContent(nowp);
        }, 2000);
    });
     
    function  moveContent(x){
        // 标题
        $("#JS_tabTitle>li").eq(x).addClass("current");
        $("#JS_tabTitle>li").eq(x).siblings().removeClass("current");
        //内容
        $("#JS_tabContent").animate({
            marginLeft:(-780*x)+"px"
        },500);
    }
}



