import { createCustomElement } from "../../function/index.js";

export const Abouts = (aboutList = [], attribute = { withButton: false }) => {
  const { withButton } = attribute;
  return {
    element: createCustomElement(
      "div",
      { id: "abouts-list" },
      aboutList.map((about) => {
        return createCustomElement("div", { class: "about-item container" }, [
          createCustomElement("img", { class: "about-item__image", src: about.imageSrc, alt: "" }),
          createCustomElement("div", { class: "about-item__body" }, [
            about.title ? createCustomElement("h2", { id: "about-item__title", textContent: about.title }) : null,
            createCustomElement("p", { class: "about-item__desc", textContent: about.description }),
            about.button.buttonText && about.button.buttonLink && withButton
              ? createCustomElement("a", { class: "button about-item__button", textContent: about.button.buttonText, href: about.button.buttonLink })
              : null,
          ]),
        ]);
      })
    ),
    ui: () => {
      document.querySelectorAll('[class="about-item__image"]').forEach((element) => {
        element.style.minHeight = element.clientWidth * 0.67 + "px";
        element.style.maxHeight = element.clientWidth * 0.67 + "px";
      });
    },
  };
};
