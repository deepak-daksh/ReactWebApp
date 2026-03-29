import React from "react";
import ReactDOM from "react-dom/client";


/* 
<div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h1>I'm h2 tag</h1>
    </div>
    <div id="child2">
        <h1>I'm h1 tag</h1>
        <h1>I'm h2 tag</h1>
    </div>
</div> 

*/

const parent = React.createElement("div",{id:"parent"},
    [
        React.createElement("div",{id:"child", key:"child"},
        [
            React.createElement("h1",{key:"child-h1-1"},"I'm h1 tag"), 
            React.createElement("h1",{key:"child-h1-2"},"I'm h2 tag")
        ]
    ),
    React.createElement("div",{id:"child2", key:"child2"},
        [
            React.createElement("h1",{key:"child2-h1-1"},"I'm h1 tag"), 
            React.createElement("h1",{key:"child2-h1-2"},"I'm h2 tag")
        ]
    )
    ]
)


// const heading = React.createElement(
//     "h1",
//     {id:"heading", alt:"Hello world from React !"},
//     "Hello world from React !");
// console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);