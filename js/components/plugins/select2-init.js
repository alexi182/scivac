var selects = {
   selectMult1: $('.select-mult-1').select2({
      width: '100%',
      dropdownCssClass: "select-mult1-dropdown",
      placeholder: 'Выбрать из списка'
   }),
   selectSingle1: $('._select-single1').select2({
      width: '100%',
      minimumResultsForSearch: 20,
      dropdownCssClass: "select-single1-dropdown"
   }),
   selectSingle2: $('._select-single_white').prepend('<option></option>').select2({
      width: '100%',
      dropdownCssClass: "select-singl_white-dropdown"
   })
};

module.exports = selects;
