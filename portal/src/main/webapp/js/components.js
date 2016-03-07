var Counter = React.createClass({
    displayName: 'Counter',
    render: function() {
        var self = this;
        return (
            React.createElement('div', null,
                React.createElement('h1', null, "Value " + self.props.value),
                React.createElement('button', {
                    "onClick": function () {
                        self.props.storeDispatch({type: 'INCREMENT'})
                    }
                }, "+"),
                React.createElement('button', {
                    "onClick": function () {
                        self.props.storeDispatch({type: 'DECREMENT'})
                    }
                }, "-")
            )
        );
    }
});

var PersonList = React.createClass({displayName: 'PersonList',
    render: function() {
        var els = [];
        for (var i = 0; i < this.props.persons.length; i++) {
            var person = this.props.persons[i];
            els.push(React.createElement('div', {"key":person.id, "className":"PersonList__Row"},
                React.createElement('div', {"className":"PersonList__Col"}, person.id),
                React.createElement('div', {"className":"PersonList__Col"}, person.name),
                React.createElement('div', {"className":"PersonList__Col"}, person.age)
            ));
        }

        return React.createElement('div', {"className":"PersonList"}, React.createElement('h3', null, "Persons"), els);
    }
});