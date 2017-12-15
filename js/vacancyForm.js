$(document).ready(function () {
    //Manage researchDirections select
    var $research = $('#vacancies_researchRootDirection');
    // When sport gets selected ...
    $research.change(function () {
        // ... retrieve the corresponding form.
        var $form = $(this).closest('form');
        // Simulate form data, but only include the selected sport value.
        var data = {};
        data[$research.attr('name')] = $research.val();
        // Submit data via AJAX to the form's action path.
        $.ajax({
            url: $form.attr('action'),
            type: $form.attr('method'),
            data: data,
            success: function (html) {
                var selector = '#vacancies_researchDirections';
                var newSelect = $(html).find(selector);

                $(selector).replaceWith(newSelect);
                $('#vacancies_ajax').html(newSelect);
                $('#empty_researchDirections').remove();
                $(selector + " option:first").text('----');

            }
        });
    });

    $('#vacancies_positionType').change(function () {
        var type = 'activity';
        var data = {
            'type': type,
            'data':$(this).val()
        };

        $.ajax({
            url: '/vacancies/ajax/',
            type: 'post',
            data: data,
            success: function (html) {
                if(html) {
                    var elem = $("#vacancies_"+type);
                    elem.find('option').remove();
                    elem.val(html);
                    $(elem).addClass('_select-single_white');
                    $(elem).select2({
                        width: '100%',
                        dropdownCssClass: "select-mult1-dropdown",
                        placeholder: 'Выбрать из списка',
                        cache: false,
                        data: html
                    });
                    $('#'+type+'Block').removeClass('hide');
                }

            },
            error: {

            }
        });
    });

    $('#vacancies_activity').change(function () {
        var type = 'workFunction';
        var data = {
            'type': type,
            'data':$(this).val(),
            'previous': $('#vacancies_positionType').val()
        };

        $.ajax({
            url: '/vacancies/ajax/',
            type: 'post',
            data: data,
            success: function (html) {
                if(html) {
                    var elem = $("#vacancies_"+type);
                    elem.find('option').remove();
                    $(elem).addClass('_select-single_white');
                    $(elem).select2({
                        width: '100%',
                        dropdownCssClass: "select-mult1-dropdown",
                        placeholder: 'Выбрать из списка',
                        cache: false,
                        data: html
                    });
                    $('#'+type+'Block').removeClass('hide');
                    elem.show();
                    var newType = 'workAction';
                    var newData = {
                        'type': newType,
                        'data':html[0].id
                    };
                    $.ajax({
                        url: '/vacancies/ajax/',
                        type: 'post',
                        data: newData,
                        success: function (res) {
                            if(res) {
                                var elem = $("#vacancies_"+newType);
                                elem.find('option').remove();
                                $(elem).addClass('_select-single_white');
                                $(elem).select2({
                                    allowClear: true,
                                    width: '100%',
                                    dropdownCssClass: "select-mult1-dropdown",
                                    placeholder: 'Выбрать из списка',
                                    cache: false,
                                    data: res
                                });
                                $('#'+newType+'Block').removeClass('hide');
                                elem.show();
                                console.log(res);
                            }

                        }
                    });
                }

            }
        });
    });


});