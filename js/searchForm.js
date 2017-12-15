$(document).ready(function () {
    //copy text val from top form to others
    $("#searchVacancy").submit(function (event) {
        $("input#search_vacancy_name").val($('input[name=search]').val());
        var formSerialize = $(this).serialize();
        $('form[name="medium"]').change();
        event.preventDefault();
    });

    //ajax submit of index page form
    $('form[name="medium"]').change(function () {
        var formSerialize = $(this).serialize();
        var url = $(this).attr('action');
        if($('#search_vacancy_region').val()>0) {
            window.mymap.reset();
            window.mymap.clearSelectedRegions();
            window.mymap.setSelectedRegions($('#search_vacancy_region').val());
        }
        store.dispatch(window.actions.vacancies.fetchVacancies(formSerialize))
    });

    InFavorite($('.favorite-action'));
    InInvite($('.invite-action'));

});

function InFavorite(element) {
    element.click(function(e) {
        e.preventDefault();
        if($(this).data('type')=='redux') {
            store.dispatch(window.actions.favorite.addToFavorite($(this).data('id')));
        } else {
            $.ajax({
                url: '/office/contender/favorite/ajax',
                type: 'post',
                data: {id: element.data('id')},
                success: function (html) {
                    $(".slide-forms__cont-wrap_wide").html(html);
                    $(".mask").fadeIn(300);
                    $(".popup").fadeIn(400);
                }
            });
        }
    });
}

function InInvite(element) {
    element.click(function(e) {
        e.preventDefault();
        if($(this).data('type')=='redux') {
            store.dispatch(window.actions.invite.invite($(this).data('id')));
        } else {
            $.ajax({
                url: '/office/contender/my/send-ajax',
                type: 'post',
                data: {id: element.data('id')},
                success: function (html) {
                    $(".slide-forms__cont-wrap_wide").html(html);
                    $(".mask").fadeIn(300);
                    $(".popup").fadeIn(400);
                }
            });
        }
    });
}