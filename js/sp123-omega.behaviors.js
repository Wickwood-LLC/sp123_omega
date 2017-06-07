(function ($) {

  /**
   * The recommended way for producing HTML markup through JavaScript is to write
   * theming functions. These are similiar to the theming functions that you might
   * know from 'phptemplate' (the default PHP templating engine used by most
   * Drupal themes including Omega). JavaScript theme functions accept arguments
   * and can be overriden by sub-themes.
   *
   * In most cases, there is no good reason to NOT wrap your markup producing
   * JavaScript in a theme function.
   */
  Drupal.theme.prototype.sp123OmegaExampleButton = function (path, title) {
    // Create an anchor element with jQuery.
    return $('<a href="' + path + '" title="' + title + '">' + title + '</a>');
  };

  /**
   * Behaviors are Drupal's way of applying JavaScript to a page. In short, the
   * advantage of Behaviors over a simple 'document.ready()' lies in how it
   * interacts with content loaded through Ajax. Opposed to the
   * 'document.ready()' event which is only fired once when the page is
   * initially loaded, behaviors get re-executed whenever something is added to
   * the page through Ajax.
   *
   * You can attach as many behaviors as you wish. In fact, instead of overloading
   * a single behavior with multiple, completely unrelated tasks you should create
   * a separate behavior for every separate task.
   *
   * In most cases, there is no good reason to NOT wrap your JavaScript code in a
   * behavior.
   *
   * @param context
   *   The context for which the behavior is being executed. This is either the
   *   full page or a piece of HTML that was just added through Ajax.
   * @param settings
   *   An array of settings (added through drupal_add_js()). Instead of accessing
   *   Drupal.settings directly you should use this because of potential
   *   modifications made by the Ajax callback that also produced 'context'.
   */
  Drupal.behaviors.sp123OmegaExampleBehavior = {
    attach: function (context, settings) {
      // By using the 'context' variable we make sure that our code only runs on
      // the relevant HTML. Furthermore, by using jQuery.once() we make sure that
      // we don't run the same piece of code for an HTML snippet that we already
      // processed previously. By using .once('foo') all processed elements will
      // get tagged with a 'foo-processed' class, causing all future invocations
      // of this behavior to ignore them.
      $('.some-selector', context).once('foo', function () {
        // Now, we are invoking the previously declared theme function using two
        // settings as arguments.
        var $anchor = Drupal.theme('sp123OmegaExampleButton', settings.myExampleLinkPath, settings.myExampleLinkTitle);

        // The anchor is then appended to the current element.
        $anchor.appendTo(this);
      });

      $("h1.page-title").each(function(){
        if (!$(this).text().trim().length) {
            $(this).addClass("empty");

            $(".secondary-menu").addClass("no-border");
        }
      });

      $(window).on('resize', function(){
        var $homeScroll = $(".front .wwm-sanderson .jspPane").height();
        var $landingScroll = $(".panopoly-landing-page .jspPane").height();
        if ($(window).width() < 1280) {
          $(".front .wwm-sanderson .scroll-pane").height($homeScroll);
          $(".panopoly-landing-page .scroll-pane").height($landingScroll);
        }
      });
    }
  };

  Drupal.behaviors.accordionNavigation = {
    attach: function (context, settings) {
    $('.ui-accordion a.active').parents('.ui-accordion-content').addClass('ui-accordion-content-active').slideDown();
    $('.ui-accordion a.active').parents('.ui-accordion-content').prev('h3.ui-accordion-header').addClass('ui-accordion-header-active ui-state-active ui-corner-top').removeClass('ui-corner-all');
    }
  };

  Drupal.behaviors.jCarouselNav = {
    attach: function (context, settings) {
      $('.jcarousel-item a.active').parents('.jcarousel-item').addClass('active');
    }
  };

  Drupal.behaviors.stickyMenu = {
    attach: function (context, settings) {
      var stickyTop;
      var windowHeight;
      var menuWidth;
      var menuHeight;
      var windowTop;
      var currentPosition;
      var $this;

      var topSpacing;

      $this = $('#block-superfish-1');

      stickyTop = $this.offset().top;       // tells how far our target element is from the top of the page
      menuWidth = $this.width(); // gets the width of our button
      menuHeight = $this.height();        // gets the height of our button
      windowTop = $(window).scrollTop();    // tells how far our screen is currently from the top of the page
      currentPosition = stickyTop - windowTop;    // tells how far our target element is from where our screen is currently 

      topSpacing = $('#admin-menu').height();

      $(window).on("load resize scroll", function() {
        $('#block-superfish-1').each(function() {
          // console.log(stickyTop);
          // console.log(currentPosition);

          if (currentPosition < 0) {   // if target element goes above the screen
            $this.css({
              position: 'fixed',
              top: topSpacing,
              bottom: 'initial',
              width: $this.parent().width(),
              zIndex: '1' 
            });   //stick it at the top
            $('#block-panels-mini-header').css({
              "margin-bottom": menuHeight + 18
            });
          }
          else {
            $this.css({ position: 'static', width: menuWidth });
            $('#block-panels-mini-header').css({
              "margin-bottom": 0
            });
          }
        }); 
      });

      // $(window).scroll(function(){ // scroll event 
      //   $('#block-superfish-1').each(function() {
      //     $this = $('#block-superfish-1');

      //     // stickyTop = $this.offset().top;       // tells how far our target element is from the top of the page
      //     // menuWidth = $this.width(); // gets the width of our button
      //     // menuHeight = $this.height();        // gets the height of our button
      //     windowTop = $(window).scrollTop();    // tells how far our screen is currently from the top of the page
      //     currentPosition = stickyTop - windowTop;    // tells how far our target element is from where our screen is currently 

      //     // console.log(stickyTop);
      //     // console.log(currentPosition);

      //     if (currentPosition < 0) {   // if target element goes above the screen
      //       $this.css({
      //         position: 'fixed',
      //         top: '65px',
      //         bottom: 'initial',
      //         width: $this.parent().width(),
      //         zIndex: '1' 
      //       });   //stick it at the top
      //       $('#block-panels-mini-header').css({
      //         "margin-bottom": menuHeight + 18
      //       });
      //     }
      //     else {
      //       $this.css({ position: 'static', width: menuWidth });
      //       $('#block-panels-mini-header').css({
      //         "margin-bottom": 0
      //       });
      //     }
      //   }); 
      // });
    }
  };

})(jQuery);
