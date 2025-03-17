import { createCustomElement } from "../../function/index.js";

export const Subfooter = (content = "copyright") => {
  return {
    element: createCustomElement("div", {
      id: "bot-footer",
      class: "footer-copyright container",
      textContent: content,
    }),
    ui: () => {},
  };
};
