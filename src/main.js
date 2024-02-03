import createElement from "./utils/createElement";

const root = document.getElementById("root");


function Comp1() {
  return createElement(
    "a",
    { href: "https://www.google.com", target: "_blank" },
    ["Google"],
  );
}


function App() {
  return createElement("h1", {}, [ "I forced to love ", Comp1() ]);
}


root.appendChild(App())
