$(document).ready(function() {
	// 导航鼠标触碰变色
	$(function(){
		$(".nav-t>ul li").hover(
			function(){
				$(this).addClass("nav-t-li-hover");
				$(this).children('a').css('color','#dddddd');
			},
			function(){
				$(this).removeClass("nav-t-li-hover");
				$(this).children('a').css('color','#636363');
			});
	});
});
var i=0;
	$("#disA").hover(function(){
		$("#hideblockA").stop();
		$("#hideblockA").slideUp();
		

	},function(){
		$("#hideblockA").stop();
		$("#disA").stop(true,true);
		
		$("#hideblockA").slideDown();
	})
	$("#disB").hover(function(){
		$("#hideblockB").stop();
		$("#hideblockB").slideUp();
		

	},function(){
		$("#hideblockB").stop();
		$("#disB").stop(true,true);
		
		$("#hideblockB").slideDown();
	})
	$("#disC").hover(function(){
		$("#hideblockC").stop();
		$("#hideblockC").slideUp();
		

	},function(){
		$("#hideblockC").stop();
		$("#disC").stop(true,true);
	
		$("#hideblockC").slideDown();
	})
	$("#disD").hover(function(){
		$("#hideblockD").stop();
		$("#hideblockD").slideUp();
		

	},function(){
		$("#hideblockD").stop();
		$("#disD").stop(true,true);
		
		$("#hideblockD").slideDown();
	})
	var i=0
	$(".function-trigger").bind("click",function(){
		var imgright=(document.body.clientWidth-472)/2
		document.getElementById("iiimage").style.right=imgright+"px";
		setTimeout(function(){
			$(".floating-main").fadeIn("slow");
		},100)

	})
	$("#show-bottom").bind("click",function(){
		$("#hide-bottom").animate({height:"33px"})
		$("#show-bottom").animate({height:"0px"})
		$("#iiimage").animate({right:"150px",width:"350px"})
		$(".hide-page2").fadeIn("slow");
		var positionY=document.getElementById("floating-main").clientHeight-53;
		$("#show-title").animate({bottom:positionY+"px"})
		i++;
	})
	$("#hide-bottom").bind("click",function(){
		$("#hide-bottom").animate({height:"0px"})
		$("#show-bottom").animate({height:"33px"})
		$(".hide-page2").fadeOut("slow");
		var imgright=(document.body.clientWidth-450)/2
		$("#iiimage").animate({right:imgright+"px",width:"430px"})
		$("#show-title").animate({bottom:"0px"})
	})
	$("#neirong-container").bind("click",function(){
		$("#hide-bottom").animate({height:"0px"})
		$("#show-bottom").animate({height:"33px"})
		$(".hide-page2").fadeOut("slow");
		var imgright=(document.body.clientWidth-450)/2
		$("#iiimage").animate({right:imgright+"px",width:"430px"})
		$("#show-title").animate({bottom:"0px"})
		$("#floating-main").fadeOut("slow");
	})
$('#iiimage').click(function(event){
   event.stopPropagation();
  })
$('#teeext').click(function(event){
   event.stopPropagation();
  })