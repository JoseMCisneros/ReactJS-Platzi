// const element = document.createElement("h1");
// element.innerText = "Hello, Platzi Badges!";
// const container = document.getElementById("app");

// container.appendChild(element);

import React from 'react';
import ReactDom from 'react-dom';

const element = <h1>Hello, Platzi Badges!</h1>;

const container = document.getElementById("app");
ReactDom.render(element, container);
