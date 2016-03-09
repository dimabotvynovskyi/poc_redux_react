define([], function () {
    return {
        counterReducer: function (state, action) {
            if (typeof state === 'undefined') {
                return 0
            }

            switch (action.type) {
                case 'INCREMENT':
                    return state + 1;
                case 'DECREMENT':
                    return state - 1;
                default:
                    return state
            }
        },

        personsReducer: function (state, action) {
            if (typeof state === 'undefined') {
                return {isFetching: false, items: []};
            }

            switch (action.type) {
                case 'REQUEST_PERSONS_LIST':
                    return $.extend({}, state, {isFetching: true, items: []});
                case 'RECEIVE_PERSONS_LIST':
                    return $.extend({}, state, {isFetching: false, items: action.items});
                default:
                    return state
            }
        }
    }
});


