//
//
//
//-------------------------------
//  chosen
//-------------------------------
//

require('chosen');

var chosenOtions = {
   width: '100%',
   disable_search_threshold: 10,
   no_results_text: 'не найдено',
   placeholder_text_single: 'выберите вариант'
};

var chosen = $('._chosen1').chosen(chosenOtions);

exports.chosen = chosen;

