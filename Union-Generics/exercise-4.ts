interface Backpack<T> {
  itmes: T[];
  add(item: T): void;
  get(): T;
}

const stringBackpack: Backpack<string> = {
  itmes: [],
  add(item) {
    this.itmes.push(item);
  },
  get() {
    return this.itmes[0];
  },
};

stringBackpack.add("red");
//stringBackpack.add(5); this will give an error

const numberBackpack: Backpack<number> = {
  itmes: [],
  add(item) {
    this.itmes.push(item);
  },
  get() {
    return this.itmes[0];
  },
};
numberBackpack.add(25);
//numberBackpack.add("green") this will throw an error
