import { computed, observable, observe, when } from "@legendapp/state";

export const product = observable({
  opts: {
    actualPage: computed(
      () => Math.floor(product.opts.skip.get() / product.opts.limit.get()) + 1,
      (page) => product.opts.skip.set(product.opts.limit.get() * page)
    ),
    allPage: computed(() => Math.floor(product.opts.total.get() / product.opts.limit.get())),
    limit: 5,
    skip: 0,
    total: null,
  },
  products: []
});

observe(product.opts.limit, ({ num }) => {
  if (num) {
    product.opts.skip.set(0);
  }
});

function fetchProduct({ signal, limit, skip }) {
  const usp = new URLSearchParams({ limit, skip })
  fetch(`https://dummyjson.com/products?${usp.toString()}`, { signal })
    .then((r) => r.json())
    .then(data => {
      product.products.set(data.products);
      product.opts.total.set(data.total);
    })
}

observe((e) => {
  const limit = product.opts.limit.get();
  const skip = product.opts.skip.get();
  const controller = new AbortController();

  const timeoutId = setTimeout(() => fetchProduct({
    signal: controller.signal,
    limit,
    skip,
  }), 300);

  e.onCleanup = () => {
    controller.abort();
    clearTimeout(timeoutId);
  };
});
