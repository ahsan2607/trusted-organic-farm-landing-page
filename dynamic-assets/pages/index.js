import { MainLayout } from "../layout/main.layout.js";
import { appendElement } from "../../assets/script/function/index.js";
import { Navbar, Carousel, Abouts, Services, Section, MessageForm, Map, FloatButton, Gallery, CardSlider, GallerySlider, Products } from "../../assets/script/component/index.js";
import { dataHeaderNavigation, dataHeaderCarousel, dataAbout, dataService, dataContact, dataGallery, dataTestimonials, dataProduct } from "../content/index.js";
import { whatsappIcon } from "../content/graphic/icons.js";

MainLayout(
  () => {
    const { element, ui } = Carousel(dataHeaderCarousel, {
      // headerNavigationId: Navbar(dataHeaderNavigation.links, dataHeaderNavigation.logo, dataHeaderNavigation.name).element.id,
      autoPlay: true,
      interval: 5000,
    });
    appendElement("header", element, ui);
  },
  () => {
    const { element: elAbouts, ui: uiAbouts } = Abouts(dataAbout, { withButton: true });
    const { element, ui } = Section("about", "", () => elAbouts, uiAbouts);
    appendElement("main", element, ui);
  },
  // () => {
  //   const { element: elServices, ui: uiServices } = Services(dataService);
  //   const { element, ui } = Section("services", "Our Facilities & Services", () => elServices, uiServices);
  //   appendElement("main", element, ui);
  // },
  () => {
    const { element: elProducts, ui: uiProducts } = Products(dataProduct, {
      isFeatured: true,
      directLink: "products.html",
      verticalScrollable: true,
      withContainer: false,
      withDirectLink: true,
    });
    const { element, ui } = Section("farm-products", "Our Organic Products", () => elProducts, uiProducts);
    appendElement("main", element, ui);
  },
  () => {
    const { element: elGallery, ui: uiGallery } = GallerySlider(dataGallery);
    const { element, ui } = Section("gallery", "Photo Gallery", () => elGallery, uiGallery);
    appendElement("main", element, ui);
  },
  // () => {
  //   const { element: elCardSlider, ui: uiCardSlider } = CardSlider(dataTestimonials);
  //   const { element, ui } = Section("testimonial", "Guest Reviews", () => elCardSlider, uiCardSlider);
  //   appendElement("main", element, ui);
  // },
  // () => {
  //   const { element: elMessageForm, ui: uiMessageForm } = MessageForm();
  //   const { element, ui } = Section("contact", "Book Your Stay", () => elMessageForm, uiMessageForm);
  //   appendElement("main", element, ui);
  // },
  () => {
    appendElement("main", Map(dataContact.map).element);
  },
  // () => {
  //   const { element, ui } = FloatButton({ link: "https://wa.me/", icon: whatsappIcon, transparentAtTop: true });
  //   appendElement("footer", element, ui);
  // }
);
