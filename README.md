jQuery Synch Heights Plugin
===========================

jQuery Plugin that automatically syncs the height properties of the elements that match the given selector.

    Usage:
    ------
    // use $(window).load instead of $(document).ready to wait until all images have been loaded.
    // Otherwise common height may be calculated without taking all images into account
    $(window).load(function(){
        $('p').syncHeight({ 'updateOnResize': true});
    });

    Parameters:
    -----------
    height (default: false): set a static number in pixel (e.g. 250) to prevent from automatically figuring
                             out the common height and using the given number.
    updateOnResize (default: false): automatically sync elements if browser window gets resized

See also
--------
* YAML4 Docs: http://www.yaml.de/docs/index.html#yaml-addons (subsection: SyncHeight)
