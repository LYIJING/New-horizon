var floatLight=1;
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
	//第一屏幕手点轮播

	$(function(){
		document.getElementById("float-button"+floatLight).style.backgroundColor="rgb(9,161,236)";
		$(".floating-graybutton").on("click",function(){
			document.getElementById("float-button"+floatLight).style.backgroundColor="gray";
			if(this.id=="float-button1")floatLight=1;
			if(this.id=="float-button2")floatLight=2;
			if(this.id=="float-button3")floatLight=3;
			if(this.id=="float-button4")floatLight=4;
			document.getElementById("float-button"+floatLight).style.backgroundColor="rgb(9,161,236)";
			if(floatLight==1){$("#screen-background").fadeOut();
			setTimeout(function () { 
        	document.getElementById("screen-background").style.backgroundImage="url(./images/screen-first.png)";
        	}, 500);
			setTimeout(function () { 
        	$("#screen-background").fadeIn();
        	}, 700);}
			if(floatLight==2){$("#screen-background").fadeOut();
			setTimeout(function () { 
        	document.getElementById("screen-background").style.backgroundImage="url(./images/screen-second.png)";
        	}, 500);
			setTimeout(function () { 
       		$("#screen-background").fadeIn();
        	}, 700);}
			if(floatLight==3){$("#screen-background").fadeOut();
			setTimeout(function () { 
        	document.getElementById("screen-background").style.backgroundImage="url(./images/screen-first.png)";
        	}, 500);
			setTimeout(function () { 
        	$("#screen-background").fadeIn();
        	}, 700);}
			if(floatLight==4){$("#screen-background").fadeOut();
			setTimeout(function () { 
        	document.getElementById("screen-background").style.backgroundImage="url(./images/screen-second.png)";
        	}, 500);
			setTimeout(function () { 
        	$("#screen-background").fadeIn();
        	}, 700);}

		});
		
	});

})
//第一屏幕自动轮播
		setTimeout("autofloating()",3000)
		function autofloating(){
		document.getElementById("float-button"+floatLight).style.backgroundColor="gray";
		floatLight++;
		if(floatLight==5)floatLight=1;
		document.getElementById("float-button"+floatLight).style.backgroundColor="rgb(9,161,236)";
		if(floatLight==1){$("#screen-background").fadeOut();
		setTimeout(function () { 
        document.getElementById("screen-background").style.backgroundImage="url(./images/screen-first.png)";
        }, 500);
		setTimeout(function () { 
        $("#screen-background").fadeIn();
        }, 700);}
		if(floatLight==2){$("#screen-background").fadeOut();
		setTimeout(function () { 
        document.getElementById("screen-background").style.backgroundImage="url(./images/screen-second.png)";
        }, 500);
		setTimeout(function () { 
        $("#screen-background").fadeIn();
        }, 700);}
		if(floatLight==3){$("#screen-background").fadeOut();
		setTimeout(function () { 
        document.getElementById("screen-background").style.backgroundImage="url(./images/screen-first.png)";
        }, 500);
		setTimeout(function () { 
        $("#screen-background").fadeIn();
        }, 700);}
		if(floatLight==4){$("#screen-background").fadeOut();
		setTimeout(function () { 
        document.getElementById("screen-background").style.backgroundImage="url(./images/screen-second.png)";
        }, 500);
		setTimeout(function () { 
        $("#screen-background").fadeIn();
        }, 700);}
        setTimeout("autofloating()",3000)
	}
	// 双拼右人物头像
$(document).ready(function() {
	$('#man1').hover(function()
	{
		$("#man1").stop(true,true);
		$("#block1-A").stop(true,true);
		$("#block1-B").stop(true,true);
        $("#man1").animate({"background-position-y":"20px"});
		var A=document.getElementById("block1-A")
		A.style.top=-10+"px";
		var B=document.getElementById("block1-B")
		B.style.top=10+"px";
		setTimeout(function()
		{
			
			$("#block1-A").fadeIn("fast");
			$("#block1-A").animate({top:"0px"});
			$("#block1-B").fadeIn("fast");
			$("#block1-B").animate({top:"0px"});
		},100)},function()//这里有个很奇怪的结构$().hover(function(){},function(){})但是特别好用
		{
			
			$("#block1-A").fadeOut();
			$("#block1-B").fadeOut();
			setTimeout(function(){
				$("#man1").animate({"background-position-y":"100px"});
		},100)
			setTimeout(function(){
			$("#block1-A").fadeOut();
			$("#block1-B").fadeOut();
			},500);
    });
});
$(document).ready(function() {
	$('#man2').hover(function()
	{
		$("#man2").stop(true,true);
		$("#block2-A").stop(true,true);
		$("#block2-B").stop(true,true);
        $("#man2").animate({"background-position-y":"20px"});
		var A=document.getElementById("block2-A")
		A.style.top=-10+"px";
		var B=document.getElementById("block2-B")
		B.style.top=10+"px";
		setTimeout(function()
		{
			
			$("#block2-A").fadeIn("fast");
			$("#block2-A").animate({top:"0px"});
			$("#block2-B").fadeIn("fast");
			$("#block2-B").animate({top:"0px"});
		},100)},function()//这里有个很奇怪的结构$().hover(function(){},function(){})但是特别好用
		{
			
			$("#block2-A").fadeOut();
			$("#block2-B").fadeOut();
			setTimeout(function(){
				$("#man2").animate({"background-position-y":"100px"});
		},100)
			setTimeout(function(){
			$("#block2-A").fadeOut();
			$("#block2-B").fadeOut();
			},500);
    });
});
$(document).ready(function() {
	$('#man3').hover(function()
	{
		$("#man3").stop(true,true);
		$("#block3-A").stop(true,true);
		$("#block3-B").stop(true,true);
        $("#man3").animate({"background-position-y":"20px"});
		var A=document.getElementById("block3-A")
		A.style.top=-10+"px";
		var B=document.getElementById("block3-B")
		B.style.top=10+"px";
		setTimeout(function()
		{
			
			$("#block3-A").fadeIn("fast");
			$("#block3-A").animate({top:"0px"});
			$("#block3-B").fadeIn("fast");
			$("#block3-B").animate({top:"0px"});
		},100)},function()//这里有个很奇怪的结构$().hover(function(){},function(){})但是特别好用
		{
			
			$("#block3-A").fadeOut();
			$("#block3-B").fadeOut();
			setTimeout(function(){
				$("#man3").animate({"background-position-y":"100px"});
		},100)
			setTimeout(function(){
			$("#block3-A").fadeOut();
			$("#block3-B").fadeOut();
			},500);
    });
});
$(document).ready(function() {
	$('#man4').hover(function()
	{
		$("#man4").stop(true,true);
		$("#block4-A").stop(true,true);
		$("#block4-B").stop(true,true);
        $("#man4").animate({"background-position-y":"20px"});
		var A=document.getElementById("block4-A")
		A.style.top=-10+"px";
		var B=document.getElementById("block4-B")
		B.style.top=10+"px";
		setTimeout(function()
		{
			
			$("#block4-A").fadeIn("fast");
			$("#block4-A").animate({top:"0px"});
			$("#block4-B").fadeIn("fast");
			$("#block4-B").animate({top:"0px"});
		},100)},function()//这里有个很奇怪的结构$().hover(function(){},function(){})但是特别好用
		{
			
			$("#block4-A").fadeOut();
			$("#block4-B").fadeOut();
			setTimeout(function(){
				$("#man4").animate({"background-position-y":"100px"});
		},100)
			setTimeout(function(){
			$("#block4-A").fadeOut();
			$("#block4-B").fadeOut();
			},500);
    });
});
$(document).ready(function() {
	
	$("#leftcaller").on("click",function(){
		$(".show-center").fadeOut();
		var length=document.body.clientWidth;
		var set=(5760-length)/2;

		document.getElementById("who-center").style.backgroundPositionX = (-set)+'px';
		
		$(".who-center").css("background-color","#F4F4FR");
		$(".who-center").animate({"background-position-x":"4000px"})

		setTimeout(function(){
			$(".left-show-first").fadeIn();
		},300) 
		document.getElementById("left-show-left1").style.left=-200+"px";
		setTimeout(function () { 
		$("#left-show-left1").fadeIn(1000);
         $("#left-show-left1").animate({left:"0px"},1000);
        }, 500);
	
		document.getElementById("left-show-left2").style.left=-200+"px";
		setTimeout(function () { 
		$("#left-show-left2").fadeIn(1000);
         $("#left-show-left2").animate({left:"0px"},1000);
        }, 500);
		document.getElementById("left-show-right1").style.right=-200+"px";
		setTimeout(function () { 
		$("#left-show-right1").fadeIn(1000);
         $("#left-show-right1").animate({left:"0px"},1000);
        }, 500);
	})
});
$(document).ready(function() {
	
	$("#rightcaller").on("click",function(){
		$(".show-center").fadeOut();
		var length=document.body.clientWidth;
		var set=(5760-length)/2;
		document.getElementById("who-center").style.backgroundPositionX = (-set)+'px';
		
		$(".who-center").css("background-color","#333333");
		$(".who-center").animate({"background-position-x":"-4000px"})
		$(".right-show-first").fadeIn();
		$("#right-show-right1").fadeIn(3000);
		setTimeout(function(){$("#right-show-1").fadeIn(1000);},1000)
		setTimeout(function(){$("#right-show-2").fadeIn(1000);},1500)
		setTimeout(function(){$("#right-show-3").fadeIn(1000);},2000)
		setTimeout(function(){$("#right-show-4").fadeIn(1000);},2500)

	})
});



var floatlit=1;
document.getElementById("float-btn"+floatlit).style.backgroundColor="#00A2E9";
$("#float-btn1").on("mouseover",function(){
	document.getElementById("float-btn"+floatlit).style.backgroundColor="gray"
	this.style.backgroundColor="#00A2E9"
	floatlit=1
})
$("#float-btn2").on("mouseover",function(){
	document.getElementById("float-btn"+floatlit).style.backgroundColor="gray"
	this.style.backgroundColor="#00A2E9"
	floatlit=2
})
$("#float-btn3").on("mouseover",function(){
	document.getElementById("float-btn"+floatlit).style.backgroundColor="gray"
	this.style.backgroundColor="#00A2E9"
	floatlit=3
})
$("#float-btn4").on("mouseover",function(){
	document.getElementById("float-btn"+floatlit).style.backgroundColor="gray"
	this.style.backgroundColor="#00A2E9"
	floatlit=4
})




$("#back-right").on("click",function(){
	$(".hide-right").fadeOut();
	var length=document.body.clientWidth;
	var set=(5760-length)/2;
	$("#who-center").animate({backgroundPositionX:(-set)+"px"},1000)
	setTimeout(function(){$(".show-center").fadeIn();},1000)
})
$("#back-left").on("click",function(){
	$(".hide-left").fadeOut();
	var length=document.body.clientWidth;
	var set=(5760-length)/2;
	document.getElementById("who-center").style.backgroundPositionX=4000+"px";
	$("#who-center").animate({backgroundPositionX:(-set)+"px"},1000)
	setTimeout(function(){$(".show-center").fadeIn();},1000)
})


$("#img1").hover(function(){
$("#img-board1").fadeIn()
},function(){
$("#img-board1").fadeOut()
})
$("#img2").hover(function(){
$("#img-board2").fadeIn()
},function(){
$("#img-board2").fadeOut()
})
$("#img3").hover(function(){
$("#img-board3").fadeIn()
},function(){
$("#img-board3").fadeOut()
})

$(document).ready(function() {
	$(function(){
		$(".l-jiantou").hover(
			function(){
				$(this).addClass("l-jiantou-hover");
			},
			function(){
				$(this).removeClass("l-jiantou-hover");
			});
	});

	$(function(){
		$(".r-jiantou").hover(
			function(){
				$(this).addClass("r-jiantou-hover");
			},
			function(){
				$(this).removeClass("r-jiantou-hover");
			});
	});
})
