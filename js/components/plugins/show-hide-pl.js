var showHide = function (elem, targClass, animTime) {
   
   elem.on('click', function (e) {
      e.stopPropagation();
      var t = $(this);
      var target = t.find(targClass);
      if (!t.hasClass('_clicked')) {
         elem.removeClass('_clicked');
         t.addClass('_clicked');
         $(targClass).removeClass('_visible _animated');
         target.addClass('_visible _animated');
         $('body').off('click.closeLogin').on('click.closeLogin', function () {
            hideLoginWin(target);
            $('body').off('click.closeLogin');
         });
         
      } else {
         hideLoginWin(target);
      }
      function hideLoginWin(elem) {
         elem.removeClass('_animated');
         t.removeClass('_clicked');
         setTimeout(function () {
            elem.removeClass('_visible');
         }, animTime);
      }
   });
   $('._close').on('click.closeBtn', function () {
      hideLoginWin(target);
   });
   $(targClass).on('click', function (e) {
      e.stopPropagation();
   });
};

module.exports = showHide;


