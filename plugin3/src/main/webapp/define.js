define(["global.nav.items"], function (navItemsList) {
    console.log("Plugin 3 available");
    navItemsList.push({label:"Plugin 3", viewName: "plugin3.main.view", weight: 300});

    define("plugin3.reducers.map", [], function () {
        function plugin3TitleReducer(state, action) {
            if (typeof state === 'undefined') {
                return {isFetching: false, title: ""};
            }

            switch (action.type) {
                case 'REQUEST_TITLE':
                    return $.extend({}, state, {isFetching: true, title: ""});
                case 'RECEIVE_TITLE':
                    return $.extend({}, state, {isFetching: false, title: action.title});
                default:
                    return state
            }
        }

        return {plugin3 : plugin3TitleReducer}
    });

    define("plugin3.main.view", [], function () {
        function mapStateToProps(state) {
            return {
                title: state.plugin3.title
            }
        }

        function mapDispatchToProps(dispatch) {
            var fetchTitle = function() {
                return function (dispatch) {
                    dispatch({type: "REQUEST_TITLE"});

                    return $.get("/plugin3/title.json", function (json) {
                        console.log("Fetching finished" + json);
                        dispatch({
                            type: "RECEIVE_TITLE",
                            title: json.title
                        })
                    });
                }
            };

            return {onShowTitleClick : function () {
                dispatch(fetchTitle());
                }
            }
        }

        var Plugin3MainView = React.createClass({
            displayName: 'MainView 3',
            render: function () {
                return (
                    React.createElement('div', null,
                        React.createElement('h1', null, "Title: " + this.props.title),
                        React.createElement('button', {onClick: this.props.onShowTitleClick}, "Load title")
                    )
                );
            }
        });

        return window.ReactRedux.connect(
            mapStateToProps,
            mapDispatchToProps
        )(Plugin3MainView);
    });
});
