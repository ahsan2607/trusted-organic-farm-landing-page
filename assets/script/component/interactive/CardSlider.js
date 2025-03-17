import { createCustomElement } from "../../function/index.js";

export const CardSlider = (slides = []) => {
  return {
    element: createCustomElement("div", { class: "slider-wrapper" }, [
      createCustomElement("button", { class: "prev-btn" }, ["❮"]),
      createCustomElement(
        "div",
        { class: "slider-container" },
        [
          createCustomElement(
            "div",
            { class: "slider" },
            slides.map(({ text, author, subtitle, rating }) =>
              createCustomElement("div", { class: "slide" }, [
                createCustomElement("div", { class: "quote-icon" }, ["“"]),
                createCustomElement("p", { class: "text" }, [text]),
                createCustomElement(
                  "div",
                  { class: "stars" },
                  Array.from({ length: rating }, () =>
                    createCustomElement("span", { class: "star" }, ["★"])
                  )
                ),
                createCustomElement("div", { class: "author-info" }, [
                  createCustomElement("span", { class: "author" }, [author]),
                  createCustomElement("span", { class: "subtitle" }, [subtitle]),
                ]),
              ])
            )
          ),
        ]
      ),
      createCustomElement("button", { class: "next-btn" }, ["❯"]),
    ]),

    ui: () => {
      // Selecting the component elements.
      const sliderWrapper = document.querySelector(".slider-wrapper");
      const sliderContainer = sliderWrapper.querySelector(".slider-container");
      const slider = sliderContainer.querySelector(".slider");
      const slideElements = slider.querySelectorAll(".slide");
      const prevBtn = sliderWrapper.querySelector(".prev-btn");
      const nextBtn = sliderWrapper.querySelector(".next-btn");

      let index = 0;

      // No need for dynamic widths – each slide is 100% by CSS.
      const updateSlides = (newIndex) => {
        index = (newIndex + slideElements.length) % slideElements.length;
        slider.style.transform = `translateX(-${index * 100}%)`;
      };

      prevBtn.addEventListener("click", () => updateSlides(index - 1));
      nextBtn.addEventListener("click", () => updateSlides(index + 1));
    },
  };
};
