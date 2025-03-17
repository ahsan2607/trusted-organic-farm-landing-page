import { createCustomElement } from "../../function/index.js";

export const Hero = (attribute = { title: "", desc: "", bgImg: "", headerNavigationId: "", img: "", imgAlt: "" }) => {
  const { title, desc, bgImg, headerNavigationId, img, imgAlt } = attribute;
  return {
    element: createCustomElement("div", { id: "hero", class: "hero" }, [
      createCustomElement("h2", { textContent: title }),
      desc ? createCustomElement("em", { textContent: desc }) : null,
      img ? createCustomElement("img", { src: img, alt: imgAlt || "" }) : null,
    ]),
    ui: () => {
      const HeaderBanner = document.getElementById("hero");
      HeaderBanner.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("${bgImg}")`;
      HeaderBanner.style.minHeight = headerNavigationId
        ? Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) - document.getElementById(headerNavigationId).clientHeight + "px"
        : Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) + "px";
    },
  };
};
