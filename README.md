## 01 - Names

### Names

- use English names.
- should easily define their content or function.

### Arrays

- do not include "List" in the name if it is a list or array.
- should easily define their content or function.
- ![](./assets/arrays.png).

### Boolean

- use positive values to define the name, semantic meaning.
- should easily define their function.
- ![](./assets/boolean.png).

### Numbers

- ![](./assets/numbers.png).

### Functions

- must repress action: verb of the action + noun.
- descriptive noun.
- | Bad                             | Good                             |
  | ------------------------------- | -------------------------------- |
  | ![](./assets/functions-bad.png) | ![](./assets/functions-good.png) |

<hr>

## 02 - Names

<hr>

## 02 - Classes

- Names made up of substantives or substantive noun phrases, avoid generic names.
- Names not too generic.
- Upper camel case.
- consistent relationship to the number of words in a name.

## Queries

- What does this class do?.
- How does this class perform the task?.
- Is the location of this class correct?.
- If something doesn't make sense, remove it or refactor it.

<hr>

## 03 - Functions

- Limit to 3 params, if there are more, use an object to send the params.
- sort the parameters alphabetically.
- simple design or structure
- small size
- functions of less than 20 lines of code
- avoid use of `else`.
- prioritize the use of ternary conditionals
- examples:

  ```TS
    const getPayAmount = ({
      isDead = false,
      isSeparated = true,
      isRetired = false,
    }) => {
      let result;
      if (isDead) {
        result = 1500;
      } else {
        if (isSeparated) {
          result = 2500;
        } else {
          if (isRetired) {
            result = 3000;
          } else {
            result = 4000;
          }
        }
      }
      return result;
    };
  ```

  ```TS
    interface getPayAmountV2Props {
      isDead: boolean;
      isSeparated: boolean;
      isRetired: boolean;
    }

    const getPayAmountV2 = ({
      isDead = false,
      isSeparated = true,
      isRetired = false,
    }: getPayAmountV2Props): number => {
      if (isDead) {
        return 1500;
      }

      if (isSeparated) {
        return 2500;
      }

      return isRetired ? 3000 : 4000;
    };
  ```

  ```TS
  function isRedFruit(fruit: string): boolean {
      if (fruit === "manzana" || fruit === "cereza" || fruit === "ciruela") {
        return true;
      } else {
        return false;
      }
    }
  ```

  ```TS
    function isRedFruitV2(fruit: string): boolean {
      const redFruits: string[] = ["manzana", "cereza", "ciruela"];
      return redFruits.includes(fruit?.toLowerCase());
    }
  ```

  ```TS
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
  ```

  ```TS
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
  ```

  ![](./assets/type%20validation.png)

  ```TS
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
  ```

  ```TS
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
  ```

<hr>

## STUPID

![](./assets/STUPID.png)

### low coupling, high cohesion

![](./assets/acplamiento.png)

<hr>

## SOLID Principles
![image](https://user-images.githubusercontent.com/44360421/218646080-8b92f8a3-fc30-4e53-86f6-149daa615013.png)
![image](https://user-images.githubusercontent.com/44360421/218646203-f18df55b-80ff-419c-91ed-296118151fe0.png)

### Single Responsibility Principle
![image](https://user-images.githubusercontent.com/44360421/218646514-c5431c89-38e9-4500-83f0-baa655a02fab.png)
![image](https://user-images.githubusercontent.com/44360421/218656819-c8945cc1-d911-42df-a1e6-95cf99319f27.png)

### Open & Close Principle
![image](https://user-images.githubusercontent.com/44360421/218939805-764fdb22-6428-4771-a5ae-ad19e4518ad4.png)
![image](https://user-images.githubusercontent.com/44360421/218940190-4e982b0d-ce22-40f0-bd83-51eb7385484e.png)
![image](https://user-images.githubusercontent.com/44360421/218943158-faf06102-0ae7-4168-a863-573769be2ec0.png)

### Liskov Substitution Principle
![image](https://user-images.githubusercontent.com/44360421/218943380-cca5fc0c-9eec-4c2a-85af-ee94a92f1b28.png)

### Interface Segregation Principle
![image](https://user-images.githubusercontent.com/44360421/218947735-5055a7b3-10f5-4337-9b03-3e1f8cee389b.png)
![image](https://user-images.githubusercontent.com/44360421/218947834-04e4c702-c1f2-4c0e-9860-d6996faba46d.png)
![image](https://user-images.githubusercontent.com/44360421/218950342-fe025c38-b947-4711-ab0a-e6d1fc1bf078.png)

### Dependency Inversion Principle
![image](https://user-images.githubusercontent.com/44360421/219276194-7ae018bb-dcf9-437b-ba0d-7ae1e6c2d39e.png)
![image](https://user-images.githubusercontent.com/44360421/219276475-c94fe10d-0e25-40a6-9d34-e49f9547f2c9.png)
![image](https://user-images.githubusercontent.com/44360421/219276495-5871ab7c-6b6c-433a-bb27-15bc4a53b80f.png)
![image](https://user-images.githubusercontent.com/44360421/219276815-a386e2b9-5832-45a1-a4d3-de26c760c3fd.png)
![image](https://user-images.githubusercontent.com/44360421/219276957-c070fab8-4b60-4431-9c23-8d9d599fd562.png)
![image](https://user-images.githubusercontent.com/44360421/219276976-e2f162b7-6a5d-42ec-8601-8e4b253113d9.png)
![image](https://user-images.githubusercontent.com/44360421/219277368-a68f8d96-0075-47c5-b099-1272ede75715.png)


<hr>

### Installation

- check [this](./docs/README.md) document
