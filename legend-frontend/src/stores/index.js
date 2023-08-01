import { observable } from "@legendapp/state";
import { cart } from "./cart";
import { product } from "./product";

const store$ = observable({
  cart,
  product
});

export default store$;
