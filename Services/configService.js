/* 
* augmenting ConfigService to the FILTERS module
*/

var FILTERS = (function(FILTERS){
	use 'strict';

	// instead of disabling on basis of flag, disabledOn pageType array can be used
	var ConfigService = {
	    'bedrooms': {
	        'isDisabled': false,
	        'filterType': 'CHECKBOX',
	        'module': 'checkBoxFilter'
	    },
	    'projectStatus': {
	        'isDisabled': false,
	        'filterType': 'CHECKBOX',
	        'module': 'checkBoxFilter'
	    },
	    'propertyType': {
	        'isDisabled': false,
	        'filterType': 'CHECKBOX',
	        'module': 'checkBoxFilter'
	    },
	    'bath': {
	        'isDisabled': false,
	        'filterType': 'CHECKBOX',
	        'module': 'checkBoxFilter'
	    },
	    'listingType': {
	        'isDisabled': false,
	        'filterType': 'CHECKBOX',
	        'module': 'checkBoxFilter'
	    },
	    'locality': {
	        'isDisabled': false,
	        'filterType': 'AUTOCOMPLETE',
	        'module': 'autoCompleteFilter'
	    },
	    'builder': {
	        'isDisabled': false,
	        'filterType': 'AUTOCOMPLETE',
	        'module': 'autoCompleteFilter'
	    },
	    // "possession in" filter
	    'completionDate': {
	        'isDisabled': false,
	        'filterType': 'RANGE',
	        'module': 'rangeFilter'
	    },
	    'budget': {
	        'isDisabled': false,
	        'filterType': 'RANGE',
	        'module': 'rangeFilter'
	    },
	    'size': {
	        'isDisabled': false,
	        'filterType': 'RANGE',
	        'module': 'rangeFilter'
	    },
		'defaultFilters' : ['bedrooms','projectStatus','propertyType','bath','listingType','locality','builder','completionDate','budget','size']
	};

	FILTERS.ConfigService = ConfigService;

})(FILTERS);