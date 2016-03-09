define(["global.nav.items"], function (navItemsList) {
    console.log("Plugin 2 available");
    navItemsList.push({label:"Plugin 2", viewName: "plugin2.main.view"});

    define("plugin2.main.view", [], function () {
        return React.createClass({
            displayName: 'MainView',
            render: function () {
                return (
                    React.createElement('div', null,
                        React.createElement('h1', null, "Plugin 2 Main View")
                    )
                );
            }
        });
    });
});
