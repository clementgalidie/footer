(function () {
	'use strict'
	// Get the footer height.
	var footerHeight = document.getElementById('footer').clientHeight;
	// Get the <main> element.
	var main = document.getElementById('main');
	/* Set to the main element a padding-bottom with 
	 * the footer height as a value. This will prevent the footer to
	 * spill over onto the main content.
	 */
	 main.style.paddingBottom = footerHeight + 'px';

	 /*
	  * When the window is resized, we do exactly the
	  * same operations than before.
	  */
	 window.addEventListener('resize', function () {
	 	var resizeFooterHeight = document.getElementById('footer').clientHeight;
	 	var resizeMain = document.getElementById('main');
	 	main.style.paddingBottom = resizeFooterHeight + 'px';
	 }, false);
}());