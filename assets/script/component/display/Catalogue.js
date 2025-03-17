import { createCustomElement, capitalize } from "../../function/index.js";

export const Products = (
  productsList = [],
  attribute = { isFeatured: false, category: "", directLink: "", withDirectLink: false, withContainer: false, verticalScrollable: false }
) => {
  const { isFeatured, category, directLin, withDirectLink, withContainer, verticalScrollable } = attribute;

  if (isFeatured) {
    productsList = productsList.filter((product) => product.featured === true);
  }
  if (category) {
    productsList = productsList.filter((product) => {
      if (typeof product.category === "string" && product.category.toLowerCase() === category.toLowerCase()) {
        return true;
      } else if (Array.isArray(product.category) && product.category.some((cate) => cate.toLowerCase() === category.toLowerCase())) {
        return true;
      }
      return false;
    });
  }

  const ProductsList = () => {
    return createCustomElement(
      "div",
      { class: `${withContainer ? "container" : ""} ${verticalScrollable ? "products-list-unwrapped" : "products-list"}` },
      productsList.length > 0
        ? productsList.map((product) => {
            return createCustomElement(
              "div",
              {
                class: verticalScrollable ? "product-item-unwrapped" : "product-item",
                id: `${product.id}_${product.title.split(" ").join("-")}_${product.category}`,
              },
              [
                createCustomElement("div", { class: "product-item__content" }, [
                  createCustomElement("img", {
                    class: "product-item__image",
                    id: product.id,
                    src: product.image,
                    alt: capitalize(product.title),
                  }),
                  createCustomElement("h3", { class: "product-item__title", textContent: product.title }),
                  createCustomElement("p", {
                    class: "product-item__category",
                    textContent: typeof product.category === "string" ? product.category : typeof product.category === "object" ? product.category.join(", ") : null,
                  }),
                  // createCustomElement("p", { class: "product-item__price" }, `${price} / ${amountPerSell === 1 ? "" : amountPerSell} ${unit}`),
                  createCustomElement("p", { class: "product-item__body", textContent: product.desc }),
                  product.link && withDirectLink
                    ? createCustomElement("div", { class: "product-item__action" }, [
                        createCustomElement("a", {
                          class: "product-item__external-link button",
                          href: product.link,
                          textContent: "Lihat Detail",
                        }),
                      ])
                    : null,
                ]),
              ]
            );
          })
        : [createCustomElement("p", { class: "products-list__empty-message", textContent: "Tidak ada produk" })]
    );
  };

  return {
    element: verticalScrollable ? createCustomElement("div", { class: "container" }, [ProductsList()]) : ProductsList(),
    ui: () => {
      document.querySelectorAll('[class="product-item__image"]').forEach((element) => {
        element.style.minHeight = element.clientWidth + "px";
        element.style.maxHeight = element.clientWidth + "px";
      });
    },
  };
};
