/**
 * 
 * 
 * <div>
 *         <div>
 *                 <h1> i m h1 tag</h1>
 *                  <h1> i m h1 tag</h1>    to create thsi we will use array
 *         </div>
 * </div>
 * 
 * ReactElement(object)=HTML(browser understand);
 */

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" }, [
        React.createElement("h1",{}, "I m h1 tag"), 
        React.createElement("h1",{}, "I m h2 tag")
    ]
    )
);





// const heading = React.createElement("h1",
//     { id: "heading", xyz: "abc" },
//     "Hello World form React!")  //tag,object , what we have to put in the tag

// console.log(heading)   //return object
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);  // render method convert heading object into heading(h1) tag;
root.render(parent);