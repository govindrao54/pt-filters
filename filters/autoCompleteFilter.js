/* 
* augmenting autoCompleteFilter to the FILTERS module
* functionality specific to autoCompleteFilter filter
*/

var FILTERS = (function(FILTERS){
	use 'strict';

	var autoCompleteFilter = function(label){
		commonFilter.call(this, label, 'AUTOCOMPLETE');
	};

	autoCompleteFilter.prototype = Object.create(commonFilter.prototype);

	autoCompleteFilter.init = function(label){
		var filter = new autoCompleteFilter(label);
		FILTERS.FilterService.addToFilterValues(filter);
	};

	FILTERS.autoCompleteFilter = autoCompleteFilter;

})(FILTERS);