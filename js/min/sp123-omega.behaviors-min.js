!function($){Drupal.theme.prototype.sp123OmegaExampleButton=function(a,e){return $('<a href="'+a+'" title="'+e+'">'+e+"</a>")},Drupal.behaviors.sp123OmegaExampleBehavior={attach:function(a,e){$(".some-selector",a).once("foo",function(){Drupal.theme("sp123OmegaExampleButton",e.myExampleLinkPath,e.myExampleLinkTitle).appendTo(this)}),$("h1.page-title").each(function(){$(this).text().trim().length||($(this).addClass("empty"),$(".secondary-menu").addClass("no-border"))}),$(window).on("resize",function(){var a=$(".front .wwm-sanderson .jspPane").height(),e=$(".panopoly-landing-page .jspPane").height();$(window).width()<1280&&($(".front .wwm-sanderson .scroll-pane").height(a),$(".panopoly-landing-page .scroll-pane").height(e))})}},Drupal.behaviors.accordionNavigation={attach:function(a,e){$(".ui-accordion a.active").parents(".ui-accordion-content").addClass("ui-accordion-content-active").slideDown(),$(".ui-accordion a.active").parents(".ui-accordion-content").prev("h3.ui-accordion-header").addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all")}},Drupal.behaviors.jCarouselNav={attach:function(a,e){$(".jcarousel-item a.active").parents(".jcarousel-item").addClass("active")}},Drupal.behaviors.stickyMenu={attach:function(a,e){var o,t,i,n,c,s,r,l;r=$("#block-superfish-1"),o=r.offset().top,i=r.width(),n=r.height(),c=$(window).scrollTop(),s=o-c,l=$("#admin-menu").height(),$(window).on("load resize scroll",function(){$("#block-superfish-1").each(function(){s<0?(r.css({position:"fixed",top:l,bottom:"initial",width:r.parent().width(),zIndex:"1"}),$("#block-panels-mini-header").css({"margin-bottom":n+18})):(r.css({position:"static",width:i}),$("#block-panels-mini-header").css({"margin-bottom":0}))})})}}}(jQuery);