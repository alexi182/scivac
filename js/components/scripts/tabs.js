$('._tabs').on('click', function () {
   var el = $(this),
      root = el.closest('._tabs-container'),
      index = root.find('._tabs').index(el),
      contents = root.find('> ._tab-content');
   if (!el.hasClass('_tab-active')) {
      root.find('._tab-active').removeClass('_tab-active');
      el.addClass('_tab-active');
      contents.removeClass('_visible').eq(index).addClass('_visible');
   }
});