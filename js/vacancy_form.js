$(document).ready(function () {

    $('#research_vacancy_researchRootDirection').change(function () {
        var type = 'researchDirections';
        var data = {
            'type': type,
            'data':$(this).val()
        };

        $.ajax({
            url: '/vacancies/ajax/',
            type: 'post',
            data: data,
            success: function (html) {
                if (html) {
                    var elem = $("#research_vacancy_"+type);
                    elem.find('option').remove();
                    elem.val(html);
                    $(elem).addClass('_select-single_white');
                    $(elem).removeClass('hide');
                    $(elem).select2({
                        width: '100%',
                        dropdownCssClass: "select-mult1-dropdown",
                        placeholder: 'Выбрать из списка',
                        cache: false,
                        data: html
                    });
                    $('#empty_researchDirections').hide();
                }

            }
        });
    });

    $('#position_vacancy_positionType').change(function () {
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
                if (html) {
                    var elem = $("#position_vacancy_"+type);
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

            }
        });
    });

    $('#position_vacancy_activity').change(function () {
        var type = 'workFunction';
        var data = {
            'type': type,
            'data':$(this).val(),
            'previous': $('#position_vacancy_positionType').val()
        };

        $.ajax({
            url: '/vacancies/ajax/',
            type: 'post',
            data: data,
            success: function (html) {
                if (html) {
                    var elem = $("#position_vacancy_"+type);
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
                            if (res) {
                                var elem = $("#position_vacancy_"+newType);
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
                            }

                        }
                    });
                }

            }
        });
    });

    function changeTab() {
        $('#result').html('');
        $('#save').switchClass('btn_gray','btn_green');
    }

    $('._dot-clickable').click(function() {
        changeTab();
        if ($(".owl-next").hasClass("disabled")) {
            $(".owl-next").removeClass("disabled");
            $(".owl-next").click(function () {
                    window.location.href = '/vacancies/';
                }
            )
        }
    });

    $('.owl-next').click(function() {
        changeTab();
        if ($(".owl-next").hasClass("disabled")) {
            $(".owl-next").removeClass("disabled");
            $(".owl-next").click(function () {
                    window.location.href = '/vacancies/';
                }
            )
        }
    });

    $('.owl-prev').click(function() {
        changeTab();
    });

    $('#save').click(function () {
        var $form = $('.owl-stage .active form');
        var data = $form.serialize();
        data = data + '&vacancy='+$('#vacancy').val();
        $.ajax({
            url: $form.attr('action'),
            type: $form.attr('method'),
            data: data,
            success: function (html) {
                if (html.result=='success') {
                    if ($form.attr('name')=='vacancies_publication') {
                        window.location.href = '/vacancies/';
                    }
                    $('#vacancy').val(html.vacancy);
                    if (html.text) {
                        $('#result').html('Вкладка '+html.text+' сохранена!');
                    } else {
                        $('#result').html(html.fullText);
                    }
                    $('#save').switchClass('btn_green','btn_gray');
                } else {
                    $('#result').html('Ошибка:  '+html.text);
                }
            }
        });
    });

    $('#clear').click(function () {
        var $form = $('.owl-stage .active form');
        $form.find('input').val('');
        $form.find('.select2-selection__rendered').html('');
    });

});