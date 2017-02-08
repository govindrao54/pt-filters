/* 
* augmenting commonFilter to the FILTERS module
* functionality common to all filters
*/

var FILTERS = (function(FILTERS){
	use 'strict';
	var commonFilter = function(label, type){
		this.label = label;
		this.value = [];
		this.type = type;
	};

	FILTERS.commonFilter = commonFilter;
	
})(FILTERS);