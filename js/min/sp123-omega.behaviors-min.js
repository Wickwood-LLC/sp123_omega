!function($){Drupal.theme.prototype.sp123OmegaExampleButton=function(e,a){return $('<a href="'+e+'" title="'+a+'">'+a+"</a>")},Drupal.behaviors.sp123OmegaExampleBehavior={attach:function(e,a){$(".some-selector",e).once("foo",function(){Drupal.theme("sp123OmegaExampleButton",a.myExampleLinkPath,a.myExampleLinkTitle).appendTo(this)}),$("h1.page-title").each(function(){$(this).text().trim().length||($(this).addClass("empty"),$(".secondary-menu").addClass("no-border"))}),$(window).on("resize",function(){var e=$(".front .wwm-sanderson .jspPane").height(),a=$(".panopoly-landing-page .jspPane").height();$(window).width()<1280&&($(".front .wwm-sanderson .scroll-pane").height(e),$(".panopoly-landing-page .scroll-pane").height(a))})}},Drupal.behaviors.accordionNavigation={attach:function(e,a){$(".ui-accordion a.active").parents(".ui-accordion-content").addClass("ui-accordion-content-active").slideDown(),$(".ui-accordion a.active").parents(".ui-accordion-content").prev("h3.ui-accordion-header").addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all")}},Drupal.behaviors.jCarouselNav={attach:function(e,a){$(".jcarousel-item a.active").parents(".jcarousel-item").addClass("active")}},Drupal.behaviors.stickyMenu={attach:function(e,a){var o,t,i,n,c,s,r;$(window).on("load resize scroll",function(){$("#block-superfish-1").each(function(){r=$("#block-superfish-1"),o=r.offset().top,t=$(window).height(),i=r.width(),n=r.height(),spacer=n+"1em",c=$(window).scrollTop(),s=o-c,console.log(o),console.log(s),s<0?(r.css({position:"fixed",top:"65px",bottom:"initial",width:r.parent().width(),zIndex:"1"}),$("#block-panels-mini-header").css({"margin-bottom":"calc(menuHeight + 1em)"})):r.css({position:"static",width:i})})})}}}(jQuery);