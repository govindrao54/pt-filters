/*
* @name 	FILTERS Module
* @author 	Govindrao Kulkarni
* @param 	fitlers: array of filters to be initalized
* @return 	updated filter values and filtered results
*/
(function(){
	'use strict';
	var FILTERS = (function(){
		var filterModule = function(filters){
			this.filterValues = {};
			this.initalized = false;
			this.initFilters(filters);
		};

		filterModule.prototype.initFilters = function(filters){
			FILTERS.FilterService.initalizeFilters(filters);
		};
		return filterModule;
	})();

})();