define([], function () {
    return {
        counterReducer: function (state, action) {
            if (typeof state === 'undefined') {
                return {counter: 0}
            }

            if (typeof state.counter === 'undefined') {
                return state.counter = 0
            }

            switch (action.type) {
                case 'INCREMENT':
                    return $.extend({}, state, {counter: state.counter + 1});
                case 'DECREMENT':
                    return $.extend({}, state, {counter: state.counter - 1});
                default:
                    return state
            }
        }
    }
});


