!function($){Drupal.theme.prototype.sp123OmegaExampleButton=function(o,e){return $('<a href="'+o+'" title="'+e+'">'+e+"</a>")},Drupal.behaviors.sp123OmegaExampleBehavior={attach:function(o,e){$(".some-selector",o).once("foo",function(){Drupal.theme("sp123OmegaExampleButton",e.myExampleLinkPath,e.myExampleLinkTitle).appendTo(this)}),$("h1.page-title").each(function(){$(this).text().trim().length||($(this).addClass("empty"),$(".secondary-menu").addClass("no-border"))}),$(window).on("resize",function(){var o=$(".front .wwm-sanderson .jspPane").height(),e=$(".panopoly-landing-page .jspPane").height();$(window).width()<1280&&($(".front .wwm-sanderson .scroll-pane").height(o),$(".panopoly-landing-page .scroll-pane").height(e))})}},Drupal.behaviors.accordionNavigation={attach:function(o,e){$(".ui-accordion a.active").parents(".ui-accordion-content").addClass("ui-accordion-content-active").slideDown(),$(".ui-accordion a.active").parents(".ui-accordion-content").prev("h3.ui-accordion-header").addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all")}},Drupal.behaviors.jCarouselNav={attach:function(o,e){$(".jcarousel-item a.active").parents(".jcarousel-item").addClass("active")}},Drupal.behaviors.stickyMenu={attach:function(o,e){function n(){a=r.offset().top,c=$(window).scrollTop(),l=a-c,t=r.parent().width(),s=r.height(),d=$("#admin-menu").height(),console.log("Distance from top of page: "+a),console.log("Position on load "+l),l<0?(r.css({width:"100%",left:"0"}),r.addClass("sticky-menu"),$("#block-panels-mini-header").css({"margin-bottom":s+18})):(r.css({width:t}),r.removeClass("sticky-menu"),$("#block-panels-mini-header").css({"margin-bottom":0})),$("#admin-menu").length&&(c=$(window).scrollTop()+d,l=a-c,l<0?r.css({top:d}):r.css({top:"0"}))}var a,i,t,s,c,l,r,d;r=$("#block-superfish-1"),d=$("#admin-menu").height(),$(window).on("load resize",n()),$("#admin-menu").resize(n()),$("#admin-menu").removeResize(n()),$(window).scroll(function(){c=$(window).scrollTop(),l=a-c,console.log("Distance from top of page: "+a),console.log("Current position: "+l),$("#admin-menu").length&&(c=$(window).scrollTop()+d,l=a-c,console.log("[admin] Distance from top of page: "+a),console.log("[admin] Current position: "+l),l<0?(r.css({top:d,width:"100%",left:"0"}),r.addClass("sticky-menu"),$("#block-panels-mini-header").css({"margin-bottom":s+18})):(r.css({top:"0",width:t}),r.removeClass("sticky-menu"),$("#block-panels-mini-header").css({"margin-bottom":0}))),l<0?(r.css({width:"100%",left:"0"}),r.addClass("sticky-menu"),$("#block-panels-mini-header").css({"margin-bottom":s+18})):(r.css({width:t}),r.removeClass("sticky-menu"),$("#block-panels-mini-header").css({"margin-bottom":0}))})}}}(jQuery);