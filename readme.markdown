jQuery Synch Heights Plugin
=============================

jQuery Plugin that automatically syncs the height properties of the elements that match the given selector.

Usage:
$(document).ready(function(){
	$('p').syncHeight();
	$(window).resize(function(){
		$('p').syncHeight();
	});
});

See also
--------
* german info: http://blog.ginader.de/archives/2007/09/10/Spaltenhoehen-mit-jQuery-synchronisieren.php

