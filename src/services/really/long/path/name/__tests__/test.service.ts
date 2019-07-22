import { cartMock, cartTotal } from "@mock/cart.mock";
import { total } from '../service';

describe('Service should', () => {
  it('calc total', () => {
    expect(total(cartMock)).toBe(cartTotal);
  });
});
