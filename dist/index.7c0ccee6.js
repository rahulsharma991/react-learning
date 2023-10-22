const heading = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "I am h1 tag nested inside divs"),
        React.createElement("h2", {}, "I am h2 tag nested inside divs")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "I am h1 tag nested inside divs"),
        React.createElement("h2", {}, "I am h2 tag nested inside divs")
    ])
]); //created the element here in core React
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root")); // created the root here in react DOM for manupulation
console.log(root);
root.render(heading); // rendering the root here to display the react tag
console.log(root.render(heading));

//# sourceMappingURL=index.7c0ccee6.js.map
