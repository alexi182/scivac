/**
 * Created by andrey on 11.05.16.
 */

jQuery(function($){
    $("#fos_user_registration_form_phone").mask("+7 (999) 999-99-99");
    $( ".registration__form" ).submit(function( event ) {
        var error = 0;
        if(document.getElementById("agreement").checked) {
            $( ".registration__form" ).submit();
        } else {
            $(".field-validation-valid-form").html('Вы не согласились на обработку персональных данных.<Br>Ваши данные не были записаны!').css('color','red');
            event.preventDefault();
        }
    });
});