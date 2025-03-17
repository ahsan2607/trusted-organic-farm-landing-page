export const faIcon = (iconClass) => {
  return `fa fa-${iconClass.toLowerCase()}`;
};

export const faBrand = (iconClass) => {
  return `fa-brands fa-${iconClass.toLowerCase()}`;
};

export const imageDirectory = (directory, image) => {
  return directory ? `./dynamic-assets/images/${directory}/${image}` : `./dynamic-assets/images/${image}`;
};