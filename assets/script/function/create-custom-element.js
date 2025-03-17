export const createCustomElement = (tag, attributes = {}, children = []) => {
  if (typeof tag !== "string") {
    throw new Error("Tag must be a string.");
  }

  const element = document.createElement(tag);

  for (const [key, value] of Object.entries(attributes)) {
    if (key === "textContent") {
      element.textContent = value;
    } else {
      element.setAttribute(key, value);
    }
  }

  children.forEach((child) => {
    if (typeof child === "string") {
      element.appendChild(document.createTextNode(child));
    } else if (child instanceof HTMLElement) {
      element.appendChild(child);
    } else if (child != null) {
      throw new Error("Child must be a string or HTMLElement.");
    }
  });

  return element;
};
