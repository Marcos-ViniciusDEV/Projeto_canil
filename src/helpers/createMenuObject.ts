type menu = "" | "all" | "dog" | "cat" | "fish";

export const createMenuObject = (active: menu) => {
  let returnObjetct = {
    all: false,
    dog: false,
    cat: false,
    fish: false,
  };

  if (active !== "") {
    returnObjetct[active] = true;
  }

  return returnObjetct;
};

export default createMenuObject;
