import { createCustomElement } from "../../function/index.js";

export const Section = (id = "", title = "", childElement = () => {}, childUIFunction = () => {}, backgroundImage = "") => {
  let childrens = [];
  if (typeof childElement === "object") {
    childrens = childElement.map((child) => {
      return child();
    });
  }
  return {
    element: createCustomElement(
      "section",
      {
        id: id,
        style: `${
          backgroundImage ? `background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("${backgroundImage}"); color: white; padding-block: 2rem;` : null
        }`,
      },
      [
        title ? createCustomElement("h2", { class: "section-title", textContent: title }) : null,
        title ? createCustomElement("hr", { class: "section-title__underline" }) : null,
        typeof childElement === "function"
          ? childElement()
          : typeof childElement === "object"
          ? createCustomElement(
              "div",
              { class: "section-content" },
              childElement.map((child) => child())
            )
          : null,
      ]
    ),
    ui: () => {
      typeof childUIFunction === "function" ? childUIFunction() : typeof childUIFunction === "object" ? childUIFunction.forEach((child) => child()) : null;
    },
  };
};
