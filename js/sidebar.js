$(document).ready(function(){var t=CONFIG.sidebar&&CONFIG.sidebar.tocMaxDepth||4,e="h1,h2,h3,h4,h5,h6,".slice(0,3*t).slice(0,-1);var s=null,o=null,i=!1;function a(){var t=$(".post-body"),a=$(".sidebar-toc li"),n=t.find(e),r=n.first();if(n.each(function(){this.getBoundingClientRect().top<=5&&(s=this.getAttribute("id"))}),t[0]&&r[0]&&r.offset().top-$(window).scrollTop()>0)i||(a.removeClass("active current"),i=!0);else if(s!==o){var d=$('.sidebar-toc a[href="#'+s+'"]');d[0]&&a.removeClass("active current"),d.parents("li").addClass("active"),d.parent().addClass("current"),o=s}}var n=!1;function r(){var t=$(".sidebar-toc").height();if(!($(".sidebar-toc > div").height()<=t)){var e=$(".sidebar-toc"),s=$(".sidebar-toc .current a");if(s[0]&&e[0]){var o=s.offset().top-e.offset().top;n=o>t||o<0}n&&s.velocity("stop").velocity("scroll",{container:e,offset:-t/2,duration:500,easing:"easeOutQuart"})}}var d=0;function c(){var t=$(".sidebar-inner");document.getElementById("content-wrap").getBoundingClientRect().top<d?t.addClass("sticky"):t.removeClass("sticky")}function l(){if(0!==$("#is-post").length){var t=$(".content"),e=t.offset().top,s=0,o=!1,i=0;CONFIG.post_widget&&CONFIG.post_widget.end_text&&(o=!0),s=o?$(".post-end").offset().top-e+$(".post-end").outerHeight():$(".post-footer").offset().top-e;var a=$(window).height(),n=0;0!==t.length&&(n=parseInt(-1*t[0].getBoundingClientRect().top)+a);var r=Number($(".sidebar-reading-info-num").text());s=parseInt(Math.abs(s)),0===(i=(i=parseInt(n/s*100))>100?100:i<0?0:i)&&0===r||100===i&&100===r||($(".sidebar-reading-info-num").text(i),$(".sidebar-reading-line").css("transform","translateX("+(i-100)+"%)"))}}CONFIG.sidebar&&CONFIG.sidebar.offsetTop&&(d=parseInt(CONFIG.sidebar.offsetTop)),a(),c(),r(),l(),$(window).on("scroll",function(){c()}),$(window).on("scroll",Stun.utils.throttle(function(){a(),r(),l()},150)),Stun.utils.pjaxReloadSidebar=function(){var t=$(".sidebar-nav-toc"),s=$(".sidebar-nav-ov"),o=$(".sidebar-toc"),i=$(".sidebar-ov");t.on("click",function(){$(this).hasClass("current")||(t.addClass("current"),s.removeClass("current"),o.css("display","block"),o.velocity("stop").velocity("fadeIn"),i.css("display","none"),i.velocity("stop").velocity("fadeOut"))}),s.on("click",function(){$(this).hasClass("current")||(s.addClass("current"),t.removeClass("current"),o.css("display","none"),o.velocity("stop").velocity("fadeOut"),i.css("display","block"),i.velocity("stop").velocity("fadeIn"))}),$(".post-body").find(e)[0]||($(".sidebar-nav").addClass("hide"),$(".sidebar-toc").addClass("hide"),$(".sidebar-ov").removeClass("hide"))},Stun.utils.pjaxReloadSidebar()});