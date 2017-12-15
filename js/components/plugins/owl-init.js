require('../../vendor/owl.carousel.js');

var arrowRight = '<svg class="svg-slide-right-dims"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite-symbol.svg#slide-right"></use></svg>';
var arrowLeft = '<svg class="svg-slide-left-dims"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite-symbol.svg#slide-left"></use></svg>';

var owlForms = $('._owl-carousel-forms').owlCarousel({
   items: 1,
   margin: 10,
   autoHeight: true,
   dots: false,
   smartSpeed: 400,
   navSpeed: 400,
   // fluidSpeed: 8000,
   nav: true,
   navText: [arrowLeft, arrowRight],
   mouseDrag: false,
   touchDrag: false,
   pullDrag: false
});


module.exports = owlForms;
