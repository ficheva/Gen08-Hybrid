'use strict';

app.formView = kendo.observable({
    onShow: function() {}
});

// START_CUSTOM_CODE_formView
// END_CUSTOM_CODE_formView
(function(parent) {
    var formViewModel = kendo.observable({
        fields: {
            time: '',
            search: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('formViewModel', formViewModel);
})(app.formView);