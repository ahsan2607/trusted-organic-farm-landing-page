export const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

export const appendElement = (parent = "", children, childrenUIFunction) => {
  if (parent === "header") {
    document.getElementById("header").appendChild(children);
  } else if (parent === "main") {
    document.getElementById("main").appendChild(children);
  } else if (parent === "footer") {
    document.getElementById("footer").appendChild(children);
  } else {
    throw new Error("Value must be a header, main, or footer!");
  }

  if (childrenUIFunction) {
    childrenUIFunction();
  }
};
