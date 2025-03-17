import { chevronUpIcon } from "../../content/graphic/icons.js";
import { createCustomElement } from "../../function/index.js";

export const FloatButton = (attribute = { link: "#", icon: chevronUpIcon, transparentAtTop: false }) => {
  const { link, icon, transparentAtTop } = attribute;
  const FloatButton = createCustomElement("a", { class: `float-button ${transparentAtTop ? "transparent-at-top" : ""}`, href: link }, [createCustomElement("i", { class: icon })]);
  return {
    element: FloatButton,
    ui: () => {
      if (transparentAtTop) {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            FloatButton.classList.add("scrolled");
          } else {
            FloatButton.classList.remove("scrolled");
          }
        };
        window.addEventListener("scroll", handleScroll);
      }
    },
  };
};
