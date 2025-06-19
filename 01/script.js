let heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React"
);

let parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Nested Element"),
    React.createElement("h2", {}, "I am a h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h1", {}, "I'm a h1 tag"),
  ]),
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

console.log('donee')