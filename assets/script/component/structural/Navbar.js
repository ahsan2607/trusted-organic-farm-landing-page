import { createCustomElement } from "../../function/index.js";

export const Navbar = (navs = [], attribute = { logo: "", name: "", transparentAtTop: false }) => {
  const { logo, name, transparentAtTop } = attribute;

  const NavbarMenuButton = createCustomElement("i", { class: "navbar-menu-button", class: "fa fa-list-ul" });
  const NavbarMenu = createCustomElement("div", { class: `navbar-menu ${transparentAtTop ? "navbar-fixed" : ""}` }, [NavbarMenuButton]);
  const NavbarBrand = createCustomElement("div", { class: "navbar-brand" }, [
    createCustomElement("img", { loading: "lazy", src: logo, alt: "" }),
    name ? createCustomElement("strong", { textContent: name }) : null,
  ]);
  const NavbarLinks = createCustomElement("div", { class: `navbar-links ${transparentAtTop ? "transparent-at-top" : ""}` }, [
    createCustomElement(
      "ul",
      {},
      navs.map((link) =>
        createCustomElement("li", {}, [
          createCustomElement("a", { href: link.link, textContent: link.text }),
          transparentAtTop && Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) < 768 ? createCustomElement("hr") : null,
        ])
      )
    ),
  ]);

  return {
    element: createCustomElement("nav", { id: "navbar", class: `navbar ${transparentAtTop ? "navbar-fixed" : ""}` }, [NavbarBrand, NavbarMenu, NavbarLinks]),
    ui: () => {
      const responsiveMenu = () => {
        if (window.innerWidth < 769) {
          NavbarLinks.classList.add("navbar-hide_element");
          NavbarBrand.classList.add("navbar-hide_element");
        } else {
          NavbarLinks.classList.remove("navbar-hide_element");
          NavbarBrand.classList.remove("navbar-hide_element");
        }
      };

      const toggleMenu = () => {
        NavbarLinks.classList.toggle("navbar-hide_element");
        NavbarMenuButton.classList.toggle("fa-list-ul");
        NavbarMenuButton.classList.toggle("fa-chevron-up");
      };

      if (transparentAtTop) {
        if (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) < 768) {
          NavbarLinks.style.marginTop = `${NavbarMenu.clientHeight}px`;
        }
        const handleScroll = () => {
          if (window.scrollY > 50) {
            document.getElementById("navbar").classList.add("navbar-scrolled");
            NavbarMenu.classList.add("navbar-scrolled");
            NavbarLinks.classList.add("navbar-scrolled");
          } else {
            document.getElementById("navbar").classList.remove("navbar-scrolled");
            NavbarMenu.classList.remove("navbar-scrolled");
            NavbarLinks.classList.remove("navbar-scrolled");
          }
        };
        window.addEventListener("scroll", handleScroll);
      }

      window.addEventListener("resize", responsiveMenu);
      window.addEventListener("load", responsiveMenu);
      NavbarMenuButton.addEventListener("click", toggleMenu);
    },
  };
};
