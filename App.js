//const heading = React.createElement("h1", {id : "heading"}, "Hello From React");

// const button = React.createElement("Button",{id: button}, "Click Me");

const parent = React.createElement(
    "div",
    {id: "parent"},
    [
        React.createElement("div", {id: "child1"} ,
            [React.createElement("h1",{},"H1 Tag hai"),
             React.createElement("h2",{},"H2 Tag hai")
            ]
        ),
        React.createElement("div", {id: "child2"} ,
            [React.createElement("h1",{},"H1 Tag hai"),
             React.createElement("h2",{},"H2 Tag hai")
            ]
        )
    ]
    );


console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(button);
root.render(parent);