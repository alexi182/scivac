var owlForms = require('./../plugins/owl-init.js');
var select = require('./../plugins/select2-init.js');

var dotsBar = $('._dots-bar');
var dots = dotsBar.find('._dot-clickable');

owlForms.on('changed.owl.carousel', function (event) {
   var formCurrent = event.item.index;
   var dotCurrent = dots.eq(formCurrent);
   makeActive(dotCurrent);
   getPublishBtn();
});

// owlForms.on('translated.owl.carousel', function (e) {
//    var height = e.currentTarget.clientHeight;
//    $('.owl-height').height(height + 50);
// });


dots.on('click', function () {
   var index = dots.index(this);
   owlForms.trigger('to.owl.carousel', index);
   
});

function makeActive(dot) {
   dotsBar.find('.progr-bar__item').removeClass('_passed _active');
   dot.addClass('_active').prevAll().addClass('_passed');
}

function getPublishBtn() {
    var btn = $('._slide-forms__submit-btn');
    $('._last-frame').hasClass('_active') ? btn.text('Опубликовать') : btn.text('Сохранить');
}

//
//
//
//-------------------------------
//  select
//-------------------------------
//



$('form[name=vacancies]').on('keyup keypress', function (e) {
   if (e.keyCode == 13) {
      e.preventDefault();
      return false;
   }
});

$('._add-option').on('keyup', function (e) {
   if (e.keyCode == 13) {
      var text = $(this).val();
      var option = '<option value="' + text + '" selected>' + text + '</option>';
      var self = $(this);
      if (self.val()) {
         self.closest('.slide-forms__block').find('select').append(option);
         self.val('');
         select.selectMult1.trigger('change');

         select.selectSingle2.trigger('change');
      }
   }
});

select.selectMult1.on('change', function (e) {
   var blockHeght = $('.owl-item.active').find('.slide-forms__item').outerHeight() + 75;
   $('.owl-height').height(blockHeght);
});


//
//
//
//-------------------------------
//  reset sfsdfsafd
//-------------------------------
//

$('._reset-slide').on('click', function () {
   select.selectMult1.val('').trigger('change');
   select.selectSingle1.val('').trigger('change');
   select.selectSingle2.val('').trigger('change');
});