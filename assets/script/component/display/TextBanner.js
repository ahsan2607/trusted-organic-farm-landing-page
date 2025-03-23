import { createCustomElement } from "../../function/index.js";

export const Breadcrumb = () => {
  return {
    element: createCustomElement("div", { class: "banner-text" }),
    ui: () => {},
  };
};
