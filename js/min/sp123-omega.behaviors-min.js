!function($){Drupal.theme.prototype.sp123OmegaExampleButton=function(e,o){return $('<a href="'+e+'" title="'+o+'">'+o+"</a>")},Drupal.behaviors.sp123OmegaExampleBehavior={attach:function(e,o){$(".some-selector",e).once("foo",function(){Drupal.theme("sp123OmegaExampleButton",o.myExampleLinkPath,o.myExampleLinkTitle).appendTo(this)}),$("h1.page-title").each(function(){$(this).text().trim().length||($(this).addClass("empty"),$(".secondary-menu").addClass("no-border"))}),$(window).on("resize",function(){var e=$(".front .wwm-sanderson .jspPane").height(),o=$(".panopoly-landing-page .jspPane").height();$(window).width()<1280&&($(".front .wwm-sanderson .scroll-pane").height(e),$(".panopoly-landing-page .scroll-pane").height(o))})}},Drupal.behaviors.accordionNavigation={attach:function(e,o){$(".ui-accordion a.active").parents(".ui-accordion-content").addClass("ui-accordion-content-active").slideDown(),$(".ui-accordion a.active").parents(".ui-accordion-content").prev("h3.ui-accordion-header").addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all")}},Drupal.behaviors.jCarouselNav={attach:function(e,o){$(".jcarousel-item a.active").parents(".jcarousel-item").addClass("active")}},Drupal.behaviors.stickyMenu={attach:function(e,o){var s,i,n,a,t,l,c;l=$("#block-superfish-1"),c=$("#admin-menu").height(),$(window).on("load resize",function(){i=l.parent().width(),l.css({width:i}),l.removeClass("sticky-menu"),$("#block-panels-mini-header").css({"margin-bottom":0}),s=l.offset().top,a=$(window).scrollTop(),t=s-a,n=l.height(),c=$("#admin-menu").height(),t<0?(l.css({width:"100%",left:"0"}),l.addClass("sticky-menu"),!$("#block-superfish-1 #logo").length&&$(window).width()>1080&&($("#logo").clone().prependTo("#block-superfish-1"),$("#block-superfish-1 #logo").delay(1e3).addClass("animate")),$("#block-panels-mini-header").css({"margin-bottom":n+18})):(l.css({width:i}),l.removeClass("sticky-menu"),$("#block-superfish-1 #logo").remove(),$("#block-panels-mini-header").css({"margin-bottom":0})),$("#admin-menu").length&&(a=$(window).scrollTop()+c,t=s-a,t<0?l.css({top:c}):l.css({top:"0"}))}),$("#admin-menu").on("mresize",function(){i=l.parent().width(),l.css({width:i}),l.removeClass("sticky-menu"),$("#block-panels-mini-header").css({"margin-bottom":0}),s=l.offset().top,a=$(window).scrollTop(),t=s-a,n=l.height(),c=$("#admin-menu").height(),t<0?(l.css({width:"100%",left:"0"}),l.addClass("sticky-menu"),!$("#block-superfish-1 #logo").length&&$(window).width()>1080&&($("#logo").clone().prependTo("#block-superfish-1"),$("#block-superfish-1 #logo").delay(1e3).addClass("animate")),$("#block-panels-mini-header").css({"margin-bottom":n+18})):(l.css({width:i}),l.removeClass("sticky-menu"),$("#block-superfish-1 #logo").remove(),$("#block-panels-mini-header").css({"margin-bottom":0})),$("#admin-menu").length&&(a=$(window).scrollTop()+c,t=s-a,t<0?l.css({top:c}):l.css({top:"0"}))}),$(window).scroll(function(){a=$(window).scrollTop(),t=s-a,$("#admin-menu").length&&(a=$(window).scrollTop()+c,t=s-a,t<0?(l.css({top:c,width:"100%",left:"0"}),l.addClass("sticky-menu"),$("#block-panels-mini-header").css({"margin-bottom":n+18})):(l.css({top:"0",width:i}),l.removeClass("sticky-menu"),$("#block-panels-mini-header").css({"margin-bottom":0}))),t<0?(l.css({width:"100%",left:"0"}),l.addClass("sticky-menu"),!$("#block-superfish-1 #logo").length&&$(window).width()>1080&&($("#logo").clone().prependTo("#block-superfish-1"),$("#block-superfish-1 #logo").delay(1e3).addClass("animate")),$("#block-panels-mini-header").css({"margin-bottom":n+18})):(l.css({width:i}),l.removeClass("sticky-menu"),$("#block-superfish-1 #logo").remove(),$("#block-panels-mini-header").css({"margin-bottom":0}))})}}}(jQuery);