/* 
* augmenting rangeFilter to the FILTERS module
* functionality specific to rangeFilter filter
*/

var FILTERS = (function(FILTERS){
	use 'strict';

	var rangeFilter = function(label){
		commonFilter.call(this, label, 'RANGE');
	};

	rangeFilter.prototype = Object.create(commonFilter.prototype);

	rangeFilter.init = function(label){
		var filter = new rangeFilter(label);
		FILTERS.FilterService.addToFilterValues(filter);
	};

	FILTERS.rangeFilter = rangeFilter;

})(FILTERS);