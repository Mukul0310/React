import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Back from "./components/Back";
import UserContext from "./Utils/UserContext";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Back from "./components/Back";
//import Grocery from "./components/Grocery";

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

const Grocery = lazy(() => import("./components/Grocery"));

const Applayout = () => {
  return (
    <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}>
      <div className="app">
        <Header />
        <Back />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(button);
// root.render(< Applayout />); *****Old method without react router dom******

root.render(<RouterProvider router={appRouter} />);
