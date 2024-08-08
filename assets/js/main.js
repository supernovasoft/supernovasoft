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
      phone: '905312089995', 
      popupMessage: 'Hello, how can I help you?', 
      showPopup: true,
      showOnIE: false,
      headerTitle: 'Welcome!',
      message: "I want to install and configure system on the Cloud!",
      size: '52px',
    });
  })(jQuery);
