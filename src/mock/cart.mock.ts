import { ProductModel } from "@model/product.mode";

const cartMock: ProductModel[] = [
  {
    name: 'Banana',
    price: 1.39,
    quantity: 6,
  },
  {
    name: 'Apple',
    price: 4.87,
    quantity: 3,
  }
];

const cartTotal = cartMock.reduce((acum, curr) => acum + curr.price * curr.quantity, 0);

export { cartMock, cartTotal };