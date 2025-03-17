import { appendElement } from "../../assets/script/function/index.js";
import { Navbar, Footer, Subfooter } from "../../assets/script/component/index.js";
import { dataHeaderNavigation, dataFooter } from "../content/index.js";

export const MainLayout = (...componentFunctions) => {
  const renderHeaderNavigation = Navbar(dataHeaderNavigation.links, { logo: dataHeaderNavigation.logo, name: dataHeaderNavigation.name, transparentAtTop: true });
  appendElement("header", renderHeaderNavigation.element, renderHeaderNavigation.ui);

  componentFunctions.forEach((component) => {
    component();
  });

  const renderFooter = Footer(dataFooter.contact, dataFooter.link);
  appendElement("footer", renderFooter.element, renderFooter.ui);
  appendElement("footer", Subfooter(dataFooter.copyright).element);
};
