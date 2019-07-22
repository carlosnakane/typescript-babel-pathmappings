import { sum, multiply } from "@util/math";
import { ProductModel } from "@model/product.mode";

/*

USE:
import { sum, multiply } from "@util/math";

INSTEAD OF:
import { sum, multiply } from "../../../../../util/math";

*/

const total = (items: ProductModel[]) => items.reduce((acum, curr) => sum(acum, multiply(curr.price, curr.quantity)), 0);

export { total };
