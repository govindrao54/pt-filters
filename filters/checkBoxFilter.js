/* 
* augmenting checkBoxFilter to the FILTERS module
* functionality specific to checkBoxFilter filter
*/

var FILTERS = (function(FILTERS){
	use 'strict';

	var checkBoxFilter = function(label){
		commonFilter.call(this, label, 'CHECKBOX');
	};

	checkBoxFilter.prototype = Object.create(commonFilter.prototype);

	checkBoxFilter.init = function(label){
		var filter = new checkBoxFilter(label);
		FILTERS.FilterService.addToFilterValues(filter);
	};

	FILTERS.checkBoxFilter = checkBoxFilter;
	
})(FILTERS);