define([], function () {
    return {
        doSmth: function () {
        },

        render: function (store) {
            function render() {
                ReactDOM.render(
                    React.createElement('div', null,
                        React.createElement('h1', null, "Value " + store.getState()),
                        React.createElement('button', {
                            "onClick": function () {
                                store.dispatch({type: 'INCREMENT'})
                            }
                        }, "+"),
                        React.createElement('button', {
                            "onClick": function () {
                                store.dispatch({type: 'DECREMENT'})
                            }
                        }, "-")
                    ),
                    document.getElementById('root')
                );
            }

            render();
            store.subscribe(render);
        }
    }
});


