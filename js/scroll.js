$(document).ready(function(){var o=window.CONFIG,e=window.Stun,s=o.header&&o.header.enable,l=s&&o.header.showOnPost,a=0,t=!1,i=!0,n=!1;function d(){var o=!!$("#is-post").length,e=!s||o&&!l,d=$(".header-nav"),r=Math.floor($(window).scrollTop()),c=Math.floor(r-a);if(0===r)e&&(d.addClass("slider--clear"),n=!1),d.removeClass("header-nav--sticky"),d.removeClass("slider--up"),d.addClass("slider--down"),t=!1,i=!0;else{if(e&&r<d.height())return!1;t||(d.addClass("header-nav--sticky"),t=!0);Math.abs(c)>5&&(e&&(n?d.removeClass("slider--clear"):n=!0),c>0?i&&(d.removeClass("slider--down"),d.addClass("slider--up"),i=!1):i||(d.removeClass("slider--up"),d.addClass("slider--down"),i=!0))}a=r}function r(o){$(o).velocity("stop").velocity("scroll",{easing:"ease-in-out",duration:600})}var c=o.back2top&&o.back2top.enable,h=!1;function u(){var o=$("#back2top");0!==$(window).scrollTop()?h||(o.addClass("show"),o.removeClass("hide"),h=!0):(o.addClass("hide"),o.removeClass("show"),h=!1)}c&&(u(),$("#back2top").on("click",function(){$("body").velocity("stop").velocity("scroll")})),d(),$(window).on("scroll",e.utils.throttle(function(){d(),c&&u()},100)),e.utils.pjaxReloadScroll=function(){$("#content-wrap").find("h1,h2,h3,h4,h5,h6").on("click",function(){r("#"+$(this).attr("id"))}),$(".toc-link").on("click",function(o){o.preventDefault(),r($(this).attr("href"))})},e.utils.pjaxReloadScroll()});