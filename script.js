function t2_win() {
window.open('https://webrage.jp', 'mywindow2', 'width=400, height=300, menubar=no, toolbar=no, scrollbars=yes');
}


timerID = setInterval('clock()',500);
function clock() {
	document.getElementById("view_clock").innerHTML = getNow();
}

function getNow() {
	var now = new Date();
	var year = now.getFullYear();
	var mon = now.getMonth()+1; //１を足すこと
	var day = now.getDate();
	var hour = now.getHours();
	var min = now.getMinutes();
	var sec = now.getSeconds();

	//出力用
	var s = year + "/" + mon + "/" + day + "  " + hour + ":" + min + ":" + sec + "";
	return s;
}


var pics_src = new Array("img/top_img100.jpg","img/top_img50.jpg","img/top_img25.jpg");
var num = 0;

function slideshow(){
if (num == 2) {
    num = 0;
}
else {
    num ++;
}
document.getElementById("mypic").src=pics_src[num];
}




/* var pics_src = new Array("img/top_img100.jpg","img/top_img50.jpg","img/top_img25.jpg");
            var num = -1;

            slideshow_timer();

            function slideshow_timer(){
                if (num == 2){
                    num = 0;
                }
                else {
                    num ++;
                }
                document.getElementById("mypic").src=pics_src[num];
                setTimeout("slideshow_timer()",1000);
            } */

var target = "";

// 設定終了


function jump(){
	var url = document.form1.select.options[document.form1.select.selectedIndex].value;
	if(url != "" ){
		if(target == 'top'){
			top.location.href = url;
		}
		else if(target == 'blank'){
			window.open(url, 'window_name');
		}
		else if(target != ""){
			eval('parent.' + target + '.location.href = url');
		}
		else{
			location.href = url;
		}
	}
}


function backToTop() {
    var x1 = x2 = x3 = 0;
    var y1 = y2 = y3 = 0;

    if (document.documentElement) {
        x1 = document.documentElement.scrollLeft || 0;
        y1 = document.documentElement.scrollTop || 0;
    }

    if (document.body) {
        x2 = document.body.scrollLeft || 0;
        y2 = document.body.scrollTop || 0;
    }

    x3 = window.scrollX || 0;
    y3 = window.scrollY || 0;

    var x = Math.max(x1, Math.max(x2, x3));
    var y = Math.max(y1, Math.max(y2, y3));

    window.scrollTo(Math.floor(x / 1.5), Math.floor(y / 1.5));

    if (x > 0 || y > 0) {
        window.setTimeout("backToTop()", 25);
    }
}

var j$ = jQuery;

j$(function(){
	j$(".side_menu").each(function(){
		j$("li > a", this).each(function(index){
			var $this = j$(this);
			if(index > 0) $this.next().hide();

			$this.mousedown(function(){
				var params = {height:"toggle", opacity:"toggle"};
				j$(this).next().animate(params).parent().siblings()
				.children("ul:visible").animate(params);

				return false;

			});
		});
	});
});

$(function() {
    $('#nav').droppy({speed: 200});
  });

/*
 * Droppy 0.1.2
 * (c) 2008 Jason Frame (jason@onehackoranother.com)
 */
$.fn.droppy = function(options) {

  options = $.extend({speed: 250}, options || {});

  this.each(function() {

    var root = this, zIndex = 1000;

    function getSubnav(ele) {
      if (ele.nodeName.toLowerCase() == 'li') {
        var subnav = $('> ul', ele);
        return subnav.length ? subnav[0] : null;
      } else {
        return ele;
      }
    }

    function getActuator(ele) {
      if (ele.nodeName.toLowerCase() == 'ul') {
        return $(ele).parents('li')[0];
      } else {
        return ele;
      }
    }

    function hide() {
      var subnav = getSubnav(this);
      if (!subnav) return;
      $.data(subnav, 'cancelHide', false);
      setTimeout(function() {
        if (!$.data(subnav, 'cancelHide')) {
          $(subnav).slideUp(options.speed);
        }
      }, 500);
    }

    function show() {
      var subnav = getSubnav(this);
      if (!subnav) return;
      $.data(subnav, 'cancelHide', true);
      $(subnav).css({zIndex: zIndex++}).slideDown(options.speed);
      if (this.nodeName.toLowerCase() == 'ul') {
        var li = getActuator(this);
        $(li).addClass('hover');
        $('> a', li).addClass('hover');
      }
    }

    $('ul, li', this).hover(show, hide);
    $('li', this).hover(
      function() { $(this).addClass('hover'); $('> a', this).addClass('hover'); },
      function() { $(this).removeClass('hover'); $('> a', this).removeClass('hover'); }
    );

  });

};
