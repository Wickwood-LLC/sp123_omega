!function($){Drupal.theme.prototype.sp123OmegaExampleButton=function(o,e){return $('<a href="'+o+'" title="'+e+'">'+e+"</a>")},Drupal.behaviors.sp123OmegaExampleBehavior={attach:function(o,e){$(".some-selector",o).once("foo",function(){Drupal.theme("sp123OmegaExampleButton",e.myExampleLinkPath,e.myExampleLinkTitle).appendTo(this)}),$("h1.page-title").each(function(){$(this).text().trim().length||($(this).addClass("empty"),$(".secondary-menu").addClass("no-border"))}),$(window).on("resize",function(){var o=$(".front .wwm-sanderson .jspPane").height(),e=$(".panopoly-landing-page .jspPane").height();$(window).width()<1280&&($(".front .wwm-sanderson .scroll-pane").height(o),$(".panopoly-landing-page .scroll-pane").height(e))})}},Drupal.behaviors.accordionNavigation={attach:function(o,e){$(".ui-accordion a.active").parents(".ui-accordion-content").addClass("ui-accordion-content-active").slideDown(),$(".ui-accordion a.active").parents(".ui-accordion-content").prev("h3.ui-accordion-header").addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all")}},Drupal.behaviors.jCarouselNav={attach:function(o,e){$(".jcarousel-item a.active").parents(".jcarousel-item").addClass("active")}},Drupal.behaviors.stickyMenu={attach:function(o,e){var i,a,t,n,s,c,r,l;r=$("#block-superfish-1"),l=$("#admin-menu").height(),$(window).on("load resize",function(){$("#block-superfish-1").each(function(){i=r.offset().top,s=$(window).scrollTop(),c=i-s,t=r.width(),n=r.height(),console.log(i),console.log(c),c<0?(r.css({position:"fixed",top:0,bottom:"initial",zIndex:"1",width:"100%",left:"0"}),$("#block-panels-mini-header").css({"margin-bottom":n+18})):(r.css({position:"static",width:t}),$("#block-panels-mini-header").css({"margin-bottom":0}))})}),$(window).scroll(function(){$("#block-superfish-1").each(function(){s=$(window).scrollTop(),c=i-s,console.log(i),console.log(c),c<0?(r.css({position:"fixed",top:0,bottom:"initial",zIndex:"1",width:"100%",left:"0"}),$("#block-panels-mini-header").css({"margin-bottom":n+18})):(r.css({position:"static",width:t}),$("#block-panels-mini-header").css({"margin-bottom":0}))})})}}}(jQuery);