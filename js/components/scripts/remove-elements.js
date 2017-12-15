$('._remove-btn').on('click', function () {
    var t = $(this),
        parent = t.closest('._remove-parent');

    parent.addClass('_remove-animation');

    setTimeout(function () {
        parent.remove();
    } , 500);
});
