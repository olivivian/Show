
// $(function(){
//     $("div.productsAsideCategorys div.row a").each(function(){
//         var v = Math.round(Math.random() *6);
//         if(v == 1)
//             $(this).css("color","#EB698C");
//     });
// });
// 
$(function(){
    $("div.productsAsideCategorys div.rowColor1 a").each(function(){
        var v = Math.round(Math.random() *6);
        if(v == 1)
            $(this).css("color","#EB698C");
    });
    $("div.productsAsideCategorys div.rowColor2 a").each(function(){
        var v = Math.round(Math.random() *6);
        if(v == 1)
            $(this).css("color","#65ADF5");
    });
});

function showProductsAsideCategorys(cid){
    $("div.eachCategory[cid="+cid+"]").css("background-color","white");
    $("div.eachCategory[cid="+cid+"] a").css("color","#87CEFA");
    $("div.productsAsideCategorys[cid="+cid+"]").show();
}
 
function hideProductsAsideCategorys(cid){
    $("div.eachCategory[cid="+cid+"]").css("background-color","#e2e2e3");
    $("div.eachCategory[cid="+cid+"] a").css("color","#000");
    $("div.productsAsideCategorys[cid="+cid+"]").hide();
}
 
$(function(){
    $("div.eachCategory").mouseenter(function(){
        var cid = $(this).attr("cid");
        showProductsAsideCategorys(cid);
    });
    $("div.eachCategory").mouseleave(function(){
        var cid = $(this).attr("cid");
        hideProductsAsideCategorys(cid);
    });
    $("div.productsAsideCategorys").mouseenter(function(){
        var cid = $(this).attr("cid");
        showProductsAsideCategorys(cid);
    });
    $("div.productsAsideCategorys").mouseleave(function(){
        var cid = $(this).attr("cid");
        hideProductsAsideCategorys(cid);
    });
});

// $(function(){
//     $("div.eachCategory").mouseenter(function(){
//         var cid = $(this).attr("cid");
//         $("div.productsAsideCategorys[cid="+cid+"]").show();
//     });
//     $("div.eachCategory").mouseleave(function(){
//         var cid = $(this).attr("cid");
//         $("div.productsAsideCategorys[cid="+cid+"]").hide();        
         
//     });
     
//     $("div.productsAsideCategorys").mouseenter(function(){
//         $(this).show();
//     });
     
//     $("div.productsAsideCategorys").mouseleave(function(){
//         $(this).hide();
//     });
// });


 