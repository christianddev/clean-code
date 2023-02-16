import { Tesla, Audi, Toyota, Honda, Vehicle } from "./03-liskov-b-oc-liskov";

(() => {
  const printCarSeats = (cars: Vehicle[]) => {
    for (const car of cars) {
      console.log(car?.constructor?.name, car.getNumberOfSeats());
    }
  };

  const cars = [new Tesla(7), new Audi(2), new Toyota(5), new Honda(5)];

  printCarSeats(cars);
})();
