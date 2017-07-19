(function () {
    'use strict';
// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

    var status;
    $(document).ready(function () {
        status = $("#status > div");
        var queryInfo = {
            active: true,
            currentWindow: true,
        };


        // Most methods of the Chrome extension APIs are asynchronous. This means that
        // you CANNOT do something like this:
        //
        // var url;
        chrome.tabs.query(queryInfo, function(tabs) {
            var tab = tabs[0];
            chrome.tabs.sendMessage(tab.id, {"message": "DOM"}, function (response) {
                renderStatus(response.message);
            });
        });
    });
    function renderStatus(message) {
        status.append(message);
    }

})();
