!function($){Drupal.theme.prototype.sp123OmegaExampleButton=function(o,a){return $('<a href="'+o+'" title="'+a+'">'+a+"</a>")},Drupal.behaviors.sp123OmegaExampleBehavior={attach:function(o,a){$(".some-selector",o).once("foo",function(){Drupal.theme("sp123OmegaExampleButton",a.myExampleLinkPath,a.myExampleLinkTitle).appendTo(this)}),$("h1.page-title").each(function(){$(this).text().trim().length||($(this).addClass("empty"),$(".secondary-menu").addClass("no-border"))}),$(window).on("resize",function(){var o=$(".front .wwm-sanderson .jspPane").height(),a=$(".panopoly-landing-page .jspPane").height();$(window).width()<1280&&($(".front .wwm-sanderson .scroll-pane").height(o),$(".panopoly-landing-page .scroll-pane").height(a))})}},Drupal.behaviors.accordionNavigation={attach:function(o,a){$(".ui-accordion a.active").parents(".ui-accordion-content").addClass("ui-accordion-content-active").slideDown(),$(".ui-accordion a.active").parents(".ui-accordion-content").prev("h3.ui-accordion-header").addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all")}},Drupal.behaviors.jCarouselNav={attach:function(o,a){$(".jcarousel-item a.active").parents(".jcarousel-item").addClass("active")}},Drupal.behaviors.stickyMenu={attach:function(o,a){var e,t,i,n,c,s,r;$(window).on("load resize scroll",function(){$("#block-superfish-1").each(function(){r=$("#block-superfish-1"),console.log(r.offset().top),e=r.offset().top,t=$(window).height(),i=r.parent().width(),n=r.parent().height(),c=$(window).scrollTop(),s=c,console.log(e),console.log(s),e<0?r.css({position:"fixed",top:"65px",bottom:"initial",width:r.parent().width()}):r.css({position:"static",width:i})})})}}}(jQuery);