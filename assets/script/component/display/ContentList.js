import { createCustomElement } from "../../function/index.js";

export const Contacts = (contactList = []) => {
  return {
    element: createCustomElement(
      "div",
      { class: "contacts-list container" },
      contactList.map((contact) => {
        return createCustomElement("div", { class: "contact-item" }, [
          createCustomElement("div", { class: "contact-item__content" }, [
            createCustomElement("h3", { class: "contact-item__title element-with-logo" }, [
              createCustomElement("i", { class: contact.icon }),
              createCustomElement("span", { textContent: contact.title }),
            ]),
            createCustomElement(
              "ul",
              { class: "contact-item__list" },
              contact.details.map((detail) => {
                return createCustomElement("li", { textContent: detail });
              })
            ),
          ]),
        ]);
      })
    ),
    ui: () => {},
  };
};
