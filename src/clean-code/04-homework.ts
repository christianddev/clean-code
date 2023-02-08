(() => {
  // Resolver sin la triple condicional dentro del if
  // includes? arrays?
  function isRedFruit(fruit: string): boolean {
    if (fruit === "manzana" || fruit === "cereza" || fruit === "ciruela") {
      return true;
    } else {
      return false;
    }
  }

  function isRedFruitV2(fruit: string): boolean {
    const redFruits: string[] = ["manzana", "cereza", "ciruela"];
    return redFruits.includes(fruit?.toLowerCase());
  }

  // Simplificar esta función
  // switch? Object literal? validar posibles colores
  function getFruitsByColor(color: string): string[] {
    if (color === "red") {
      return ["manzana", "fresa"];
    } else if (color === "yellow") {
      return ["piña", "banana"];
    } else if (color === "purple") {
      return ["moras", "uvas"];
    } else {
      throw Error("the color must be: red, yellow, purple");
    }
  }

  type FruitColor = "red" | "yellow" | "purple";

  function getFruitsByColorV2(color: FruitColor): string[] | Error {
    type FruitsByColor = {
      [key in FruitColor]: string[];
    };
    const fruitsByColor: FruitsByColor = {
      red: ["manzana", "fresa"],
      yellow: ["piña", "banana"],
      purple: ["moras", "uvas"],
    };

    if (!Object.keys(fruitsByColor).includes(color)) {
      throw Error("the color must be: red, yellow, purple");
    }

    return fruitsByColor[color];
  }

  // Simplificar esta función
  let isFirstStepWorking = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking = true;
  let isFourthStepWorking = true;

  function workingSteps() {
    if (isFirstStepWorking === true) {
      if (isSecondStepWorking === true) {
        if (isThirdStepWorking === true) {
          if (isFourthStepWorking === true) {
            return "Working properly!";
          } else {
            return "Fourth step broken.";
          }
        } else {
          return "Third step broken.";
        }
      } else {
        return "Second step broken.";
      }
    } else {
      return "First step broken.";
    }
  }

  function workingStepsV2() {
    if (isFirstStepWorking !== true) {
      return "First step broken.";
    }

    if (isSecondStepWorking !== true) {
      return "Second step broken.";
    }

    if (isThirdStepWorking !== true) {
      return "Third step broken.";
    }

    if (isFourthStepWorking !== true) {
      return "Fourth step broken.";
    }

    return "Working properly!";
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit("cereza"), fruit: "cereza" }); // true
  console.log({ isRedFruit: isRedFruitV2("cereza"), fruit: "cereza" }); // true
  console.log({ isRedFruit: isRedFruit("piña"), fruit: "piña" }); // true
  console.log({ isRedFruit: isRedFruitV2("piña"), fruit: "piña" }); // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor("red") }); // ['manzana', 'fresa']
  console.log({ redFruits: getFruitsByColorV2("red") }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor("yellow") }); // ['piña', 'banana']
  console.log({ yellowFruits: getFruitsByColorV2("yellow") }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor("purple") }); // ['moras', 'uvas']
  console.log({ purpleFruits: getFruitsByColorV2("purple") }); // ['moras', 'uvas']
  // console.log({ pinkFruits: getFruitsByColor("pink") }); // Error: the color must be: red, yellow, purple
  console.log({ pinkFruits: getFruitsByColorV2("pink") }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
  console.log({ workingSteps: workingStepsV2() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();
