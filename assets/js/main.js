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
  
    $('#wapp').floatingWhatsApp({
      phone: '90000000000', 
      popupMessage: 'Hello, how can we helo you?', 
      showPopup: true,
      showOnIE: false,
      headerTitle: 'Welcome!',
      message: "I want to Install Website on AWS!",
      size: '52px',
    });
  })(jQuery);
