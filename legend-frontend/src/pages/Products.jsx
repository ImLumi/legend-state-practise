import { Container } from "react-bootstrap";
import { For, Memo, Reactive, useObservable, useSelector } from "@legendapp/state/react";
import store from "../stores";
import Pagination from "../compontents/Pagination";
import Product from "./Product";
import { persistObservable } from "@legendapp/state/persist";

export default function products() {
  const { product: { opts, products } } = store;
  return (
    <Container className="d-flex flex-column">
      <div>
        <label>
          limit
          <Reactive.input type="number" min={1} $value={opts.limit} />
        </label>
        <label>
          skip
          <Reactive.input $value={opts.skip} />
        </label>
        <div>
          total: <Memo>{opts.total}</Memo>
        </div>
        <div>
          actualPage: <Memo>{opts.actualPage}</Memo>
        </div>
        <button className="btn btn-outlined-primary" onClick={() => {
          persistObservable(store, {
            local: 'store'
          })
        }}>save</button>
        <button className="btn btn-outlined-primary" onClick={() => {
          opts.skip.set((p) => p + 10)
        }}>add 10</button>
      </div>
      <Container className="d-flex flex-wrap gap-3">
        <For each={products}>{(product) => <Product key={product.id.get()} product={product.get()} />}</For>
      </Container>
      <div>
        <Pagination opts={opts} />
      </div>
    </Container>
  );
}
