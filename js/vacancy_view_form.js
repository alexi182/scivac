$(document).ready(function () {

    function SubmitButtonAjax(url,nameForm){
        $('._select-single1').select2({
            width: '100%',
            minimumResultsForSearch: 20,
            dropdownCssClass: "select-single1-dropdown"
        });
        $('.upload-fake-butt').click(function () {
            var file = $(this).parent().find('input[type="file"]');
            file.trigger("click");
            $(this).find('.btn').html('Файл выбран');
            $(this).find('.upload-value').html('');
            $(this).find('.sub').html('');
        });
        $('.btnCancel').click(function () {
            $(".mask").fadeOut(300);
            $(".popup").fadeOut(400);
        });
        $('.btnSave').click(function () {
            var form = $('form[name='+nameForm+']');
            var formData = new FormData(form[0]);

            $.ajax({
                url: url,
                type: 'POST',
                data: formData,
                async: false,
                success: function (data) {
                    $(".slide-forms__cont-wrap_wide").html(data);
                },
                cache: false,
                contentType: false,
                processData: false
            });
            SubmitButtonAjax();
        });
    }

    $('.buttonAjax').click(function () {
        var url = $(this).data('url');
        var nameForm = $(this).data('form');
        $.ajax({
            url: url,
            type: 'get',
            success: function (html) {
                $(".slide-forms__cont-wrap_wide").html(html);
                SubmitButtonAjax(url,nameForm);
                $(".mask").fadeIn(300);
                $(".popup").fadeIn(400);
            }
        });
    });

});