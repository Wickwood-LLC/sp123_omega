!function($){Drupal.theme.prototype.sp123OmegaExampleButton=function(e,o){return $('<a href="'+e+'" title="'+o+'">'+o+"</a>")},Drupal.behaviors.sp123OmegaExampleBehavior={attach:function(e,o){$(".some-selector",e).once("foo",function(){Drupal.theme("sp123OmegaExampleButton",o.myExampleLinkPath,o.myExampleLinkTitle).appendTo(this)}),$("h1.page-title").each(function(){$(this).text().trim().length||($(this).addClass("empty"),$(".secondary-menu").addClass("no-border"))}),$(window).on("resize",function(){var e=$(".front .wwm-sanderson .jspPane").height(),o=$(".panopoly-landing-page .jspPane").height();$(window).width()<1280&&($(".front .wwm-sanderson .scroll-pane").height(e),$(".panopoly-landing-page .scroll-pane").height(o))})}},Drupal.behaviors.accordionNavigation={attach:function(e,o){$(".ui-accordion a.active").parents(".ui-accordion-content").addClass("ui-accordion-content-active").slideDown(),$(".ui-accordion a.active").parents(".ui-accordion-content").prev("h3.ui-accordion-header").addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all")}},Drupal.behaviors.jCarouselNav={attach:function(e,o){$(".jcarousel-item a.active").parents(".jcarousel-item").addClass("active")}},Drupal.behaviors.stickyMenu={attach:function(e,o){var s,n,i,t,a,c,l;c=$("#block-superfish-1"),l=$("#admin-menu").height(),$(window).on("load resize",function(){n=c.parent().width(),c.css({width:n}),c.removeClass("sticky-menu"),$("#block-panels-mini-header").css({"margin-bottom":0}),s=c.offset().top,t=$(window).scrollTop(),a=s-t,i=c.height(),l=$("#admin-menu").height(),a<0?(c.css({width:"100%",left:"0"}),c.addClass("sticky-menu"),!$("#block-superfish-1 #logo").length&&$(window).width()>1080&&$("#logo").one().clone().prependTo("#block-superfish-1"),$("#block-panels-mini-header").css({"margin-bottom":i+18})):(c.css({width:n}),c.removeClass("sticky-menu"),$("#block-superfish-1 #logo").remove(),$("#block-panels-mini-header").css({"margin-bottom":0})),$("#admin-menu").length&&(t=$(window).scrollTop()+l,a=s-t,a<0?c.css({top:l}):c.css({top:"0"}))}),$("#admin-menu").on("mresize",function(){n=c.parent().width(),c.css({width:n}),c.removeClass("sticky-menu"),$("#block-panels-mini-header").css({"margin-bottom":0}),s=c.offset().top,t=$(window).scrollTop(),a=s-t,i=c.height(),l=$("#admin-menu").height(),a<0?(c.css({width:"100%",left:"0"}),c.addClass("sticky-menu"),!$("#block-superfish-1 #logo").length&&$(window).width()>1080&&$("#logo").one().clone().prependTo("#block-superfish-1"),$("#block-panels-mini-header").css({"margin-bottom":i+18})):(c.css({width:n}),c.removeClass("sticky-menu"),$("#block-superfish-1 #logo").remove(),$("#block-panels-mini-header").css({"margin-bottom":0})),$("#admin-menu").length&&(t=$(window).scrollTop()+l,a=s-t,a<0?c.css({top:l}):c.css({top:"0"}))}),$(window).scroll(function(){t=$(window).scrollTop(),a=s-t,$("#admin-menu").length&&(t=$(window).scrollTop()+l,a=s-t,a<0?(c.css({top:l,width:"100%",left:"0"}),c.addClass("sticky-menu"),$("#block-panels-mini-header").css({"margin-bottom":i+18})):(c.css({top:"0",width:n}),c.removeClass("sticky-menu"),$("#block-panels-mini-header").css({"margin-bottom":0}))),a<0?(c.css({width:"100%",left:"0"}),c.addClass("sticky-menu"),!$("#block-superfish-1 #logo").length&&$(window).width()>1080&&$("#logo").one().clone().prependTo("#block-superfish-1"),$("#block-panels-mini-header").css({"margin-bottom":i+18})):(c.css({width:n}),c.removeClass("sticky-menu"),$("#block-superfish-1 #logo").remove(),$("#block-panels-mini-header").css({"margin-bottom":0}))})}}}(jQuery);