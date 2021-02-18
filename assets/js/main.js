(function($) {

    var quotes = $(".amazing-text h3");
    var quoteIndex = -1;
    var second = 1000;
    function showNextQuote() {
      ++quoteIndex;
      quotes.eq(quoteIndex % quotes.length)
        .fadeIn(second)
        .delay(second)
        .fadeOut(second, showNextQuote);
    }
  
    showNextQuote();
  
  })(jQuery);