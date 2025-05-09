function formatString(input: string, toUpper?: boolean): string {
  return toUpper ? input.toUpperCase() : input.toLowerCase();
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const filteredItems = items.filter((item) => item.rating >= 4);
  return filteredItems;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];
  for (const array of arrays) {
    result.push(...array);
  }
  return result;
}

class Vehicle {
  constructor(private _make: string, public year: number) {}
  getInfo() {
    const info: string = `Make: ${this._make}, Year: ${this.year}`;
    console.log(info);
  }
}

class Car extends Vehicle {
  constructor(
    public make: string,
    public year: number,
    private _model: string
  ) {
    super(make, year);
  }
  getModel() {
    const modelInfo: string = `Model: ${this._model}`;
    console.log(modelInfo);
  }
}

function processValue(value: string | number): number {
  return typeof value === "string" ? value.length : value * 2;
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;
  const highestPricedProduct = products.reduce((max, item) =>
    item.price > max.price ? item : max
  );
  return highestPricedProduct;
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  }
  return "Weekday";
}

async function squareAsync(n: number): Promise<number> {
  if (n < 0) {
    throw new Error("Negative number not allowed");
  }
  return new Promise((resolve) => setTimeout(() => resolve(n * n), 1000));
}
