/**
 * Created by apesant on 27/07/16.
 */
(function () {

    var backgroundPageConnection = chrome.runtime.connect({
        name: "devtools-page"
    });

    backgroundPageConnection.onMessage.addListener(function (message) {
        // Handle responses from the background page, if any
    });

    var panels = chrome.devtools.panels;

    // panel
    var panel = panels.create(
        "DevtoolsExtension",
        "res/icon.png",
        "src/devtools_panel.html", function () {
            // Relay the tab ID to the background page
        }
    );
})();