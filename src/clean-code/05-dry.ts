type Size = "" | "S" | "M" | "XL";

class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}

  isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case "string":
          if ((<string>(<unknown>this[key]))?.length <= 0) {
            throw Error(`${key} is empty`);
          }
          break;

        case "number":
          if (<number>(<unknown>this[key]) <= 0) {
            throw Error(`${key} is zero`);
          }
          break;

        default:
          throw Error(`${key} is not defined `);
          break;
      }
    }
    return true;
  }

  toString() {
    if (!this.isProductReady()) {
      return;
    }
    return `${this.name} - ${this.price} - ${this.size}`;
  }
}

(() => {
  const bluePlants = new Product("blue plants", 30, "XL");
  console.log("bluePlants", bluePlants.toString());
})();
