// const element = document.createElement("h1");
// element.innerText = "Hello, Platzi Badges!";
// const container = document.getElementById("app");

// container.appendChild(element);

import React from "react";
import ReactDom from "react-dom";

// const jsx = <h1>Hello, Platzi Badges!</h1>;
// const element = React.createElement(
//   "a",
//   { href: "https://platzi.com" },
//   "Ir a Platzi"
//   );
// const name = 'Jose'
// const element = React.createElement(
//   'h1',
//   {},
//   `Hola, soy ${name}`
// )
// const sum = () => 3+3;
// const jsx = <h1>Hola, soy {__expresiones__}</h1>

const jsx = (
  <div>
    <h1>Hola soy jose</h1>
    <p>Soy ingeniero frontend.</p>
  </div>
);

const element = React.createElement(
  'div',
  {},
  React.createElement('h1', {}, 'Hola, Soy Jose'),
  React.createElement('p', {}, 'Soy ingeniero frontEnd')
)
const container = document.getElementById("app");

ReactDom.render(element, container);
