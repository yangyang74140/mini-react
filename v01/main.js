// v1
// const dom = document.createElement("div");
// dom.id = "app";

// const text = document.createTextNode("");
// text.nodeValue = "app";
// dom.append(text);

// document.querySelector("#root").append(dom);

// v2

// const textEl = {
//   type: "TEXT_ELEMENT",
//   props: {
//     nodeValue: "app",
//     children: [],
//   },
// };

// const el = {
//   type: "div",
//   props: {
//     id: "app",
//     children: [textEl],
//   },
// };

// const dom = document.createElement(el.type);

// dom.id = el.props.id;

// const textNode = document.createTextNode("");
// textNode.nodeValue = textEl.props.nodeValue;

// dom.append(textNode);

// document.querySelector("#root").append(dom);

// v3

// const textEl = {
//   type: "TEXT_ELEMENT",
//   props: {
//     nodeValue: "app",
//     children: [],
//   },
// };

const createTextNode = (text) => {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
};

// const el = {
//   type: "div",
//   props: {
//     id: "app",
//     children: [textEl],
//   },
// };

const createElement = (type, props, ...children) => {
  return {
    type,
    props: { ...props, children },
  };
};

const textEl = createTextNode("app");

const App = createElement("div", { id: "app" }, textEl);

const dom = document.createElement(App.type);
dom.id = App.props.id;

const textNode = document.createTextNode("");
textNode.nodeValue = textEl.props.nodeValue;

dom.append(textNode);

document.querySelector("#root").append(dom);
