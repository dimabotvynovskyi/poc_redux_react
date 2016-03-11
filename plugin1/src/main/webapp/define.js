define(["global.nav.items"], function (navItemsList) {
    console.log("Plugin 1 available");
    navItemsList.push({label:"Plugin 1", viewName: "plugin1.main.view", weight: 700});

    define("plugin1.reducers.map", [], function () {
        function plugin1CounterReducer(state, action) {
            if (typeof state === 'undefined') {
                return 0
            }

            switch (action.type) {
                case 'PLUGIN1_INCREMENT':
                    return state + 1;
                case 'PLUGIN1_DECREMENT':
                    return state - 1;
                default:
                    return state
            }
        }

        return {plugin1 : plugin1CounterReducer}
    });

    define("plugin1.main.view", function () {

        function mapStateToProps(state) {
            return {
                cntValue: state.plugin1
            }
        }

        function mapDispatchToProps(dispatch) {
            return {onIncrementClick : function () {
                    dispatch({type:"PLUGIN1_INCREMENT"});
                }
            }
        }


        var Plugin1MainView = React.createClass({
            displayName: 'MainView',
            render: function () {
                return (
                        React.createElement('div', null,
                            React.createElement('h1', null, "Value " + this.props.cntValue),
                            React.createElement('button', {"onClick": this.props.onIncrementClick}, "Increment")
                        )
                );
            }
        });

        return window.ReactRedux.connect(
            mapStateToProps,
            mapDispatchToProps
        )(Plugin1MainView);
    });
});
