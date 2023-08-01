import { observable } from "@legendapp/state";

export const cart = observable({
    updatedAt: Date.now(),
    products: [],
})

