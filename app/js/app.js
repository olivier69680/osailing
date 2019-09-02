// Je récupère la classe Rellax provenant du package Node rellax
var Rellax = require('rellax');
require('jquery.scrollex');

var app = {
  init: function() {
    console.log('init');

    app.initRellax();
    app.initScrollex();
  },

  /**
   * Initialize Rellax
   *
   * @link https://dixonandmoe.com/rellax/
   */
  initRellax: function() {
    app.rellax = new Rellax('.rellax');
  },

  /**
   * Initilization jQuery scrollex
   *
   * @link https://github.com/ajlkn/jquery.scrollex
   */
  initScrollex: function() {
    $('#intro, #posts, #values').scrollex({
      enter: app.enter,
      leave: app.leave
    });
  },

  /**
   * Callback when entering in a DOMElement
   *
   * @param Event event Event object
   */
  enter: function(event) {
    // this contient l'élément impacté par l'événement
    var $element = $(this);
    // Je récupère la valeur de l'attribut id de mon élément impacté par l'événement
    var elementId = $element.attr('id');

    // console.log("Enter", elementId);

    // Je récupère tous les liens de type ancre
    var $anchorLinks = $('[href^="#"]');
    // Je supprime la classe menu__link--active de tous mes liens de type ancre
    $anchorLinks.removeClass('menu__link--active');

    // Je sélectionne le lien qui pointe vers l'élément dans lequel je viens d'entrer (l'élement impacté par l'événement)
    var $elementAnchorLink = $('[href="#' + elementId + '"]');
    // J'ajoute la classe menu__link--active sur le lien pointant sur mon élément dans lequel je viens d'entrer
    $elementAnchorLink.addClass('menu__link--active');
  },

  /**
   * Callback when leaving a DOMElement
   *
   * @param Event event Event object
   */
  leave: function(event) {
    // this contient l'élément impacté par l'événement
    var $element = $(this);
    // Je récupère la valeur de l'attribut id de mon élément impacté par l'événement
    var elementId = $element.attr('id');

    // console.log("Leave", elementId);

    // Je sélectionne le lien qui pointe vers l'élément dans lequel je viens de sortir (l'élement impacté par l'événement)
    var $elementAnchorLink = $('[href="#' + elementId + '"]');
    // Je supprime la classe menu__link--active sur le lien pointant sur mon élément dans lequel je viens de sortir
    $elementAnchorLink.removeClass('menu__link--active');
  }
};

$(app.init);
