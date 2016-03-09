define([], function () {
    var requestPersons = function () {
        return {
            type: 'REQUEST_PERSONS_LIST'
        }
    };
    var receivePersons = function (json) {
        return {
            type: "RECEIVE_PERSONS_LIST",
            items: json
        }
    };

    return {

        /* sync actions (return an object) */

        incrementCounterAction: function () {
            return {
                type: 'INCREMENT'
            }
        },

        decrementCounterAction: function () {
            return {
                type: 'DECREMENT'
            }
        },

        /* Async actions (return function) */

        fetchPersons: function (json) {
            return function (dispatch) {
                dispatch(requestPersons());

                return $.get("/portal/data.json", function (json) {
                    console.log("Fetching finished" + json);
                    dispatch(receivePersons(json))
                });
            }
        }
    }
});


