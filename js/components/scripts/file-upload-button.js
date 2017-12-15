//
//
//
//-------------------------------
// upload button
//-------------------------------
//


var uploadForm = $("input[type='file']"),
    upButtonText = $('.upload-value'),
    uploadText = upButtonText.html();

$('.upload-fake-butt').click(function () {
    $(this).parent().find('input[type="file"]').trigger('click');
});

uploadForm.change(function () {

    var curVal = this.value;

    if (curVal == '') {
        $(this).parent().find('.upload-value').html(uploadText);
        $(this).parent().find('.upload-fake-butt').removeClass('file-attached');
    } else {
        $(this).parent().find('.upload-value').text(curVal.replace(/^.*[\\\/]/, ''));
        $(this).parent().find('.upload-fake-butt').addClass('file-attached');
    }

});


// var uploadForm = $('.inp-file');
//
// $('._upload-fake-btn').click(function () {
//    $(this).parent().find('input[type="file"]').trigger('click');
// });
//
// uploadForm.change(function () {
//    var input = this;
//    if (input.files && input.files[0]) {
//       var reader = new FileReader();
//       reader.readAsDataURL(input.files[0]);
//       reader.onload = function () {
//          $('._logo-preview').css({
//             'background-image': 'url(' + reader.result + ')'
//          });
//       };
//    }
// });

