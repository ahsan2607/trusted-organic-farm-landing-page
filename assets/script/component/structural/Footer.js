import { createCustomElement } from "../../function/index.js";

export const Footer = (contact, link) => {
  return {
    element: createCustomElement("section", { id: "top-footer", class: "footer-list container" }, [
      createCustomElement("div", { class: "dynamic-column" }, [
        createCustomElement("h3", { textContent: contact.title }),
        createCustomElement(
          "ul",
          { id: "footer-contacts" },
          contact.list.map((contact) =>
            createCustomElement("li", {}, [
              createCustomElement("h4", { class: "element-with-logo" }, [
                createCustomElement("i", { class: contact.icon }),
                createCustomElement("span", { textContent: contact.title }),
              ]),
              createCustomElement("p", { textContent: contact.content }),
            ])
          )
        ),
      ]),
      createCustomElement("div", { class: "dynamic-column" }, [
        createCustomElement("h3", { textContent: link.title }),
        createCustomElement(
          "ul",
          { id: "footer-links" },
          link.list.map((link) => createCustomElement("li", {}, [createCustomElement("a", { href: link.href, textContent: link.text })]))
        ),
      ]),
    ]),
    ui: () => {},
  };
};
