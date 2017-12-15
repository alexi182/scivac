$(document).ready(function () {

    $('.slide-forms_link_add-phone').click(function() {
        $('#extra_phone').removeClass('hide');
    });

    loadEducationEdit();
    loadEducationSubmit();
    loadEducationDelete();
    loadExperienceChange();
    loadExperienceSubmit();
    loadExperienceEdit();
    loadExperienceCancel();
    loadExperienceDelete();
    loadPublicationSubmit();
    loadPublicationRemove();
    loadFileSubmit();
    loadFileRemove();

    function loadEducationEdit() {
        $('document').on('click', '.education_edit', function(e) {
            e.preventDefault();
            var data = {'id':$(this).data('id')};
            $('.education_edit').removeClass('btn_state_active');
            $(this).addClass('btn_state_active');
            $.ajax({
                url: '/office/contender/account/education/',
                type: 'post',
                data: data,
                success: function (html) {
                    $('#education').html(html);
                    $('#education ._select-single1').select2({
						allowClear: true,
                        width: '100%',
                        minimumResultsForSearch: 20,
                        dropdownCssClass: "select-single1-dropdown"
                    });
                    loadEducationSubmit();
                }
            });
        });
    }

    function loadEducationSubmit() {
        $('#educationSubmit').click(function(e) {
            e.preventDefault();
            var $form = $('form[name=education]');
            var data = $form.serialize();
            $.ajax({
                url: '/office/contender/account/education/',
                type: 'post',
                data: data,
                success: function (html) {
                    $('#mCSB_1_container').html(html);
                    $('#education_city').val('');
                    $('#education_university').val('');
                    $('#education_department').val('');
                    $('#education_id').val('');
                    $('#result').html('Образование сохранено!');
                    loadEducationEdit();
                }
            });
        });
    }

    function loadEducationDelete() {
        $(document).on('click', '.education_delete', function(e) {
            e.preventDefault();
            var data = {'id':$(this).data('id')};
            $('.education_delete').removeClass('btn_state_active');
            $(this).addClass('btn_state_active');
            $.ajax({
                url: '/office/contender/account/education_delete/',
                type: 'post',
                data: data,
                success: function (html) {
                    $('#mCSB_1_container').html(html);
                }
            });
        });
    }


    function loadExperienceChange() {
        $('#experience_position').change(function () {
            var type = 'activity';
            var data = {
                'type': type,
                'data': $(this).val()
            };

            $.ajax({
                url: '/vacancies/ajax/',
                type: 'post',
                data: data,
                success: function (html) {
                    if (html) {
                        var elem = $("#experience_" + type);
                        elem.find('option').remove();
                        elem.val(html);
                        $(elem).addClass('_select-single_white');
                        $(elem).select2({
							allowClear: true,
                            width: '100%',
                            dropdownCssClass: "select-mult1-dropdown",
                            placeholder: 'Выбрать из списка',
                            cache: false,
                            data: html
                        });
                        $('#' + type + 'Block').removeClass('hide');
                    }

                }
            });
        });

        $('#experience_activity').change(function () {
            var type = 'workFunction';
            var data = {
                'type': type,
                'data': $(this).val(),
                'previous': $('#experience_position').val()
            };

            $.ajax({
                url: '/vacancies/ajax/',
                type: 'post',
                data: data,
                success: function (html) {
                    if (html) {4565654
                        var elem = $("#experience_" + type);
                        elem.find('option').remove();
                        $(elem).addClass('_select-single_white');
                        $(elem).select2({
							allowClear: true,
                            width: '100%',
                            dropdownCssClass: "select-mult1-dropdown",
                            placeholder: 'Выбрать из списка',
                            cache: false,
                            data: html
                        });
                        $('#' + type + 'Block').removeClass('hide');
                        elem.show();
                        var newType = 'workAction';
                        var newData = {
                            'type': newType,
                            'data': html[0].id
                        };
                        $.ajax({
                            url: '/vacancies/ajax/',
                            type: 'post',
                            data: newData,
                            success: function (res) {
                                if (res) {
                                    var elem = $("#experience_" + newType);
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
                                    $('#' + newType + 'Block').removeClass('hide');
                                    elem.show();
                                    console.log(res);
                                }

                            }
                        });
                    }

                }
            });
        });
    }

    function loadExperienceSubmit() {
        $('#saveExperience').click(function(e) {
            e.preventDefault();
            var $formExperience = $('form[name=experience]');
            var data = $formExperience.serialize();
            $.ajax({
                url: $formExperience.attr('action'),
                type: $formExperience.attr('method'),
                data: data,
                success: function (html) {
                    $('#mCSB_2_container').html(html);
                    $('#result').html('Опыт сохранен!');
                    loadExperienceChange();
                    loadExperienceEdit();
                    loadExperienceCancel();
                }
            });
        });
    }

    function loadExperienceEdit() {
        $(document).on('click', '.experience_edit', function(e) {
            e.preventDefault();
            var data = {'id':$(this).data('id')};
            $('.experience_edit').removeClass('btn_state_active');
            $(this).addClass('btn_state_active');
            $.ajax({
                url: '/office/contender/account/ajax/experience/',
                type: 'post',
                data: data,
                success: function (html) {
                    $('#experience').html(html);
                    $('#experience .select-mult-1, #experience ._select-single1').select2({
						allowClear: true,
                        width: '100%',
                        minimumResultsForSearch: 20,
                        dropdownCssClass: "select-single1-dropdown"
                    });
                    loadExperienceSubmit();
                    loadExperienceChange();
                    loadExperienceCancel();
                }
            });
        });
    }

    function loadExperienceCancel() {
        $('#cancelExperience').click(function(e) {
            e.preventDefault();
            $.ajax({
                url: '/office/contender/account/ajax/experience/',
                type: 'post',
                success: function (html) {
                    $('#experience').html(html);
                    $('#experience .select-mult-1, #experience ._select-single1').select2({
						allowClear: true,
                        width: '100%',
                        minimumResultsForSearch: 20,
                        dropdownCssClass: "select-single1-dropdown"
                    });
                    loadExperienceSubmit();
                    loadExperienceEdit();
                    loadExperienceChange();
                }
            });
        });
    }

    function loadExperienceDelete() {
        $(document).on('click', '.experience_delete', function(e) {
            e.preventDefault();
            var data = {'id':$(this).data('id')};
            $('.experience_edit').removeClass('btn_state_active');
            $(this).addClass('btn_state_active');
            $.ajax({
                url: '/office/contender/account/ajax/experience_delete/',
                type: 'post',
                data: data,
                success: function (html) {
                    $('#mCSB_2_container').html(html);
                }
            });
        });
    }

    function loadPublicationSubmit() {
        $('#savePublication').click(function(e) {
            e.preventDefault();
            var $form = $('#publication-form');
            var data = $form.serialize();
            $.ajax({
                url: $form.attr('action'),
                type: $form.attr('method'),
                data: data,
                success: function (html) {
                    $('#mCSB_3_container').html(html);
                    loadPublicationRemove();
                }
            });
        });
    }

    function loadPublicationRemove() {
        $(document).on('click', '.publication-remove', function() {
            var $form = $('#publication-form');
            $.ajax({
                url: $form.attr('action'),
                type: $form.attr('method'),
                data: {type:'remove',id: $(this).data('id')}
            });
        });
    }

    function loadFileSubmit() {
        $('#fileUpload').click(function() {
            var form = $('form[name=file]');
            var formData = new FormData(form[0]);

            $.ajax({
                url: form.attr('action'),
                type: 'POST',
                data: formData,
                async: false,
                success: function (data) {
                    $('#uploadedList').html(data);
                    loadFileRemove();
                },
                cache: false,
                contentType: false,
                processData: false
            });

        });
    }

    function loadFileRemove() {
        $('.file-remove').click(function() {
            var item = $(this).parent();
            $.ajax({
                url: '/office/contender/account/ajax/file/',
                type: 'POST',
                data: {type:'remove',id: $(this).data('id')},
                success: function (data) {
                    item.hide();
                }
            });
        });
    }

    function changeTab() {
        $('#result').html('');
        $('#save').switchClass('btn_gray','btn_green');
    }

    $('._dot-clickable').click(function() {
        changeTab();
        if ($(".owl-next").hasClass("disabled")) {
            $(".owl-next").removeClass("disabled");
            $(".owl-next").click(function () {
                    window.location.href = '/office/contender/account/';
                }
            )
        }
    });

    $('.owl-next').click(function() {
        changeTab();
        if ($(".owl-next").hasClass("disabled")) {
            $(".owl-next").removeClass("disabled");
            $(".owl-next").click(function () {
                    window.location.href = '/office/contender/account/';
                }
            )
        }
    });

    $('.owl-prev').click(function() {
        changeTab();
    });

    $('#save').click(function () {
        var $form = $('.owl-stage .active form');
        if ($form.prop('name')=='file') {
            window.location.href = '/office/contender/account/';
        }
        var data = $form.serialize();
        $.ajax({
            url: $form.attr('action'),
            type: $form.attr('method'),
            data: data,
            success: function (html) {
                if (html.result=='success') {
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
        $.ajax({
            url: '/office/contender/account/clear/',
            type: $form.attr('method'),
            data: {
                type: $form.attr('action').replace('/office/contender/account/ajax/',''),
            },
            success: function (html) {
                if (html.result=='success') {
                    $form.find('input').val('');
                    if(html.toElement) {
                        $(html.toElement).html(html.html);
                    }
                } else {
                    $('#result').html('Ошибка:  '+html.text);
                }
            }
        });
    });	
});