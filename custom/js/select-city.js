!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var n=jQuery.fn.select2.amd;return n.define("select2/i18n/ru",[],function(){function n(n,e,t,u){return 5>n%10&&n%10>0&&5>n%100||n%100>20?n%10>1?t:e:u}return{errorLoading:function(){return"Невозможно загрузить результаты"},inputTooLong:function(e){var t=e.input.length-e.maximum,u="Пожалуйста, введите на "+t+" символ";return u+=n(t,"","a","ов"),u+=" меньше"},inputTooShort:function(e){var t=e.minimum-e.input.length,u="Пожалуйста, введите еще хотя бы "+t+" символ";return u+=n(t,"","a","ов")},loadingMore:function(){return"Загрузка данных…"},maximumSelected:function(e){var t="Вы можете выбрать не более "+e.maximum+" элемент";return t+=n(e.maximum,"","a","ов")},noResults:function(){return"Совпадений не найдено"},searching:function(){return"Поиск…"}}}),{define:n.define,require:n.require}}(),$(".js-data-example-ajax").select2({language:"ru-RU",ajax:{url:"/public/get-city/",dataType:"json",delay:250,data:function(n){return{q:n.term}},processResults:function(n,e){return e.page=e.page||1,{results:n.items}},cache:!0},minimumInputLength:3,templateResult:function(n){return n.text},templateSelection:function(n){return $("#contact_vacancy_lat").val(n.lat),$("#contact_vacancy_lon").val(n.lon),$("#contact_vacancy_cityName").val(n.text),console.log(n),n.text}});

