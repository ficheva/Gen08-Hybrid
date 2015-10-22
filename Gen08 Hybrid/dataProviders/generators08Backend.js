'use strict';

(function() {
    app.data.generators08Backend = new Everlive({
        offlineStorage: true,
        apiKey: 'TsDeMsQ21F495PSL',
        url: '//testtap.telerik.com/bs-api/v1/',
        scheme: 'https'
    });

    document.addEventListener('online', function() {
        app.data.generators08Backend.offline(false);
        app.data.generators08Backend.sync();
    });

    document.addEventListener('offline', function() {
        app.data.generators08Backend.offline(true);
    });

}());

// START_CUSTOM_CODE_generators08Backend
// END_CUSTOM_CODE_generators08Backend