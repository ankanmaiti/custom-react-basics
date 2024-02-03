
export default function createElement(type, props, childrens) {
  const element = document.createElement(type);

  for (let attr in props) {
    if (!props.hasOwnProperty(attr)) continue;

    element.setAttribute(attr.toLowerCase(), props[attr]);
  }

  // append childrens
  for (let child of childrens) {
    child = typeof child === "string" ? document.createTextNode(child) : child;
    element.appendChild(child);
  }

  return element;
}

