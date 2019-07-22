import { total } from "./services/really/long/path/name/service";

const bill = total([
  {
    name: 'Rice',
    price: 14.55,
    quantity: 2,
  },
  {
    name: 'Beans',
    price: 5.99,
    quantity: 5,
  }
]);

console.log(bill);
