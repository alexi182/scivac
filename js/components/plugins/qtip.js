require('../../vendor/jquery.qtip.js');


$('[title!=""]').qtip({
   position: {
      target: 'mouse',
      my: 'top center',
      adjust: {x: 0, y: 30}
   },
   show: {
      delay: 300
   }
});


// $('body').on('mouseenter', '[title!=""]', function (event) {
//    $(this).qtip({
//       position: {
//          viewport: $(window),
//          content: $('#menu'),
//          target: 'mouse',
//          my: 'top center',
//          adjust: {x: 0, y: 30}
//       },
//       overwrite: false,
//       show: {
//          event: event.type,
//          ready: true,
//          delay: 300
//       }
//    });
// });
