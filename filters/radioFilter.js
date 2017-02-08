/* 
* augmenting radioFilter to the FILTERS module
* functionality specific to radioFilter filter
*/

var FILTERS = (function(FILTERS){
	use 'strict';

	var radioFilter = function(label){
		commonFilter.call(this, label, 'RADIO');
	};

	radioFilter.prototype = Object.create(commonFilter.prototype);

	radioFilter.init = function(label){
		var filter = new radioFilter(label);
		FILTERS.FilterService.addToFilterValues(filter);
	};

	FILTERS.radioFilter = radioFilter;

})(FILTERS);