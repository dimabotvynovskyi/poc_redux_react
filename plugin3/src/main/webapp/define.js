define(["global.nav.items"], function (navItemsList) {
    console.log("Plugin 3 available");
    navItemsList.push({label:"Plugin 3", viewName: "plugin3.main.view", weight: 300});

    define("plugin3.main.view", [], function () {
        return React.createClass({
            displayName: 'MainView',
            render: function () {
                var self = this;
                return (
                    React.createElement('div', null,
                        React.createElement('h1', null, "Plugin 3 Main View")
                    )
                );
            }
        });
    });
});
