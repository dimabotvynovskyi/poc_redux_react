ReactDOM.render(
    React.createElement('h1', null, 'Some react component!'),
    document.getElementById('container')
);

define("portal.init", [], function () {
    return "test-portal";
});