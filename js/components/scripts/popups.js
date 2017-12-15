$('._popup-btn').on('click', function () {
    $('.mask').fadeIn(300);
    $('.popup').fadeIn(400);
});

$('.mask').on('click', function () {
    $('.popup').fadeOut(300);
    $(this).fadeOut(400);
});

$('._popup__close-btn').on('click', function () {
    $('.popup').fadeOut(300);
    $('.mask').fadeOut(400);
});

$(document).keydown(function (e) {
    if (e.keyCode == 27) {
        $('.popup').fadeOut(300);
        $('.mask').fadeOut(400);
    }
});