!function ($, global) {
	'use strict';

	var $window = $(global);
	var $container = $('[data-omp-scroll-to-container]');
	var $button = $('[data-omp-scroll-to]');

	var HIDDEN_CLASS = 'omp-scroll-to-hidden';

	var hidden = true;

	var updateVisibility = function () {
		var height = global.innerHeight;
		var top = $window.scrollTop();

		if (hidden && top >= height) {
			$container.removeClass(HIDDEN_CLASS);
			hidden = false;
		} else if (!hidden && top < height / 2) {
			$container.addClass(HIDDEN_CLASS);
			hidden = true;
		}
	};

	if($container.length) {
		$window.scroll(updateVisibility).resize(updateVisibility);
	}

	$button.on('click', function (event) {
		event.preventDefault();
		Jump(-global.scrollY || -1e5, {duration: 400});
	});

}(jQuery, window);