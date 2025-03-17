import { createCustomElement } from "../../function/index.js";

export const Map = (src) => {
  return {
    element: createCustomElement("iframe", {
      class: "maps",
      src: src,
      allowfullscreen: "",
      loading: "lazy",
      referrerpolicy: "no-referrer-when-downgrade",
    }),
    ui: () => {},
  };
};
