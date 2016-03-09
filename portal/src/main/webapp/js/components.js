var Counter = React.createClass({
    displayName: 'Counter',
    render: function() {
        var self = this;
        return (
            React.createElement('div', null,
                React.createElement('h1', null, "Value " + self.props.value),
                React.createElement('button', {"onClick": self.props.onIncrement}, "+"),
                React.createElement('button', {"onClick": self.props.onDecrement}, "-")
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

        return React.createElement('div', {"className":"PersonList"},
            React.createElement('h3', null, "Persons"),
            React.createElement('div', {"className":"PersonList__Row"},
                React.createElement('div', {"className":"PersonList__Header"}, "ID"),
                React.createElement('div', {"className":"PersonList__Header"}, "Name"),
                React.createElement('div', {"className":"PersonList__Header"}, "Age")
            ),
            els);
    }
});

var NavBar = React.createClass({
    displayName: 'NavBar',
    render: function() {
        var self = this;

        var createCallback = function(viewName) {
            return function() {
                self.props.viewManager.render(viewName);
            }
        };
        var items = [];
        for (var i = 0; i < this.props.navItems.length; i++) {
            var navItem = this.props.navItems[i];
            items.push(React.createElement('button', {key: navItem.label, onClick: createCallback(navItem.viewName), className: "NavItem"}, navItem.label));
        }

        return React.createElement('div', {"className" : "NavBar"}, items);
    }
});