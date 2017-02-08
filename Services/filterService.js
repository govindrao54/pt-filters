/* 
* augmenting FilterService to the FILTERS module
* all service-functions used by the module will be here
*/

var FILTERS = (function(FILTERS){
	use 'strict';
	var FilterService = {};

	FilterService.initalizeFilters = function(filterArr){
		if (!FILTERS.initalized) {
			FILTERS.initalized = true;
			FILTERS.FilterService.createFilters(filterArr);
		}
	};

	FilterService.createFilters = function(filterArr){
		var arr = filterArr || FILTERS.ConfigService.defaultFilters;
		var label, module;
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] in FILTERS.ConfigService) {
				label = arr[i];
				module = FILTERS.ConfigService[arr[i]].module;
				FILTERS[module].init(label);
			}
		}
	};

	FilterService.getFilterValueObj = function(){
		return FILTERS.filterValues;
	};

	FilterService.initializeFilterValues = function(){
		
	};

	FilterService.addToFilterValues = function(filter){
		var fObj = FILTERS.FilterService.getFilterValueObj();
		fObj[filter.label] = filter;
	};

	FILTERS.FilterService = FilterService;

})(FILTERS);
