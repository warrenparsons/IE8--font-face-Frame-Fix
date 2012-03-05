/**
 * 
 * IE8 has a bug where it will lose @font-face when a frame is dynamically added to or removed from a document.
 * This function corrects this issue by reloading the CSS file that includes the @font-face declarations.
 * 
 */
(function(){
	if ( $('.ie8').length ) {
		var cssLink = $('link[href^="fonts.css"]');
		var reloadHref = cssLink.attr('href');
		$('body').on('blah', function(){
			setTimeout(function(){
				cssLink.attr('href', reloadHref);
			}, 1000);
		});
	}
})();