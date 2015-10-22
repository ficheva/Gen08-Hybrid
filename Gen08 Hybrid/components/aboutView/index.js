'use strict';

app.aboutView = kendo.observable({
    onShow: function() {}
});

// START_CUSTOM_CODE_aboutView
// END_CUSTOM_CODE_aboutView
(function(parent) {
    var aboutViewModel = kendo.observable({
        openLink: function(url) {
            window.open(url, '_system');
            if (window.event) {
                window.event.preventDefault && window.event.preventDefault();
                window.event.returnValue = false;
            }
        }
    });

    parent.set('aboutViewModel', aboutViewModel);
})(app.aboutView);