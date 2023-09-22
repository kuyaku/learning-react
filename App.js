const heading = React.createElement("h1", {
    id: "heading",
    abc: "xyz",
}, "Hello, from the react world.");

// remember heading is an object and not a html element. It is actually a react element.
console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);

// root.render(heading);

// render is actually responsible for converting the react element(object) into dom elements (like h1 tag)

const heading2 = React.createElement("h2", {
    id: "heading2",
    abc: "xyz",
}, "Hey this is heading two");


// making nested structure inside react
const parent = React.createElement("div", {
    id: "parent",
}, React.createElement("div", {
    id: "child",
}, React.createElement("h1", {
    id: "head",
}, "This is div->div->heading")));


// how to make siblings? You have to make the third input as an array
const parent2 = React.createElement("div", {
    id: "parent",
}, [React.createElement("div", {
    id: "child",
    key: 1,
}, [React.createElement("h1", {
    id: "head",
    key: 1,
}, "This is div->div->heading1"),
    React.createElement("h2", {id: "head2", key:2},
    "This is div->div->heading2")]
),
React.createElement("div", {
    id: "child2",
    key: 2,
}, [React.createElement("h3", {
    id: "head3",
    key: 1,
}, "This is div->div->heading3"),
    React.createElement("h4", {id: "head4", key:2},
    "This is div->div->heading4")]
)]);




const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);
root.render(parent2);