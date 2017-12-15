/**
 * Created by andrey on 11.05.16.
 */

jQuery(function($){
    $("#contactPhone").mask("+7 (999) 999-99-99");
    $( "form[name=vacancies]" ).submit(function( event ) {
        var error = 0;
        if($("#vacancies_positionType").val()=='') {
            $("#vacancies_positionType").parent().parent().find('.field-validation-valid').html('<br>Вы не заполнили поле!').css('color','red');
            $("#vacancies_positionType").parent().parent().find('.cusel').css('border','1px solid red');
            error += 1;
            event.preventDefault();
        } else {
            $("#vacancies_positionType").parent().parent().find('.field-validation-valid').html('');
            $("#vacancies_positionType").parent().parent().find('.cusel').css('border','0px');
        }
        if($("#vacancies_researchDirections").val()=='') {
            $("#vacancies_researchDirections").parent().parent().find('.field-validation-valid').html('<br>Вы не заполнили поле!').css('color','red');
            $("#vacancies_researchDirections").parent().parent().find('.cusel').css('border','1px solid red');
            error += 1;
            event.preventDefault();
        } else {
            $("#vacancies_researchDirections").parent().parent().find('.field-validation-valid').html('');
            $("#vacancies_researchDirections").parent().parent().find('.cusel').css('border','0px');
        }
        /*if($("#vacancies_region").val()=='') {
            $("#vacancies_region").parent().parent().find('.field-validation-valid').html('<br>Вы не заполнили поле!').css('color','red');
            $("#vacancies_region").parent().parent().find('.cusel').css('border','1px solid red');
            error += 1;
            event.preventDefault();
        } else {
            $("#vacancies_region").parent().parent().find('.field-validation-valid').html('');
            $("#vacancies_region").parent().parent().find('.cusel').css('border','0px');
        }*/

        /*var pattern = /.+@.+\..+/i;
        if(pattern.test($('#contactEmail').val())){
            $('#contactEmail').parent().find('.field-validation-valid').html('');
        } else {
            error += 1;
            event.preventDefault();
            $('#contactEmail').parent().find('.field-validation-valid').html('Email заполнен не верно!');
        }*/

        var from = parseInt($(".salary-from").val());
        var to = parseInt($(".salary-to").val());
        if(to<from) {
            $(".salary-to").parent().find('.field-validation-valid:eq(1)').html('Неверный интервал заработной платы!').css('color','red');
            $('.salary-to').css('border','1px solid red');
            error += 1;
            event.preventDefault();
        } else {
            $(".salary-to").parent().find('.field-validation-valid:eq(1)').html('');
            $('.salary-to').css('border','1px solid #D1D1D1');
        }
        if(error==0) {
            if($(this).data('action')=='publication' && error==0) {
                $(this).append('<input type="hidden" name="publication" value="yes" />');
            }
        } else {
            $('.field-validation-valid-form').html('Заполните все обязательные поля ('+error+')').css('color','red');
        }

    });

    $( "#vacancies_contractType" ).change(function() {
        if($( "#vacancies_contractType").val()==100) {
            $( "#contractTimeShow").fadeIn(200);
        } else {
            $( "#contractTimeShow").fadeOut(200);
        }
    });
});