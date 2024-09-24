import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";

//Core React (old method)
//const heading = React.createElement("h1", {id : "heading"}, "Hello From React");

// const button = React.createElement("Button",{id: button}, "Click Me");

// const parent = React.createElement(
//     "div",
//     {id: "parent"},
//     [
//         React.createElement("div", {id: "child1"} ,
//             [React.createElement("h1",{},"Hello I'm Mukul Gupta"),
//              React.createElement("h2",{},"From Medicaps University")
//             ]
//         ),
//         React.createElement("div", {id: "child2"} ,
//             [React.createElement("h1",{},"H1 Tag hai"),
//              React.createElement("h2",{},"H2 Tag hai")
//             ]
//         )
//     ]
//     );


// console.log(parent);

// JSX is an javascript syntax, JSX is not HTML
// JSX => transpiled by Babel in Parcel converted to React.createElement => React.createElement - JS object => HTML object
// JSX is a Champ. 🚀 JSX Begins from here:

//React Element
//const Jsxheading = (<h1 id="head" className="Heading">Hello From JSX🚀</h1>)


//React Component- Two ways to write React Component
// Class Based Component - OLD way
//Functional Component - NEW way    Functional Component is a Normal JS function that returns piece of JSX code.
//                                  Functional Component returns the react element.

/*
const Title = () => (
    <h1>Namaste from Component Composition</h1>
);
const Heading =() => (
    <div className="Head">
        
        <h1> Namaste form Functional component</h1>
        <Title/>
    </div>
);
*/

const Applayout =() =>{
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
};
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(button);
root.render(< Applayout />);