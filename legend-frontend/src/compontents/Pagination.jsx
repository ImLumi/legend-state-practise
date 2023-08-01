import { Reactive, useSelector } from "@legendapp/state/react";
import BsPagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Pagination({opts}) {
  const {allPage, actualPage} = useSelector(() => ({allPage: opts.allPage.get(), actualPage: opts.actualPage.get()}))
  return (
    <BsPagination>
      {
        Array.from({length: allPage}, (_, index) => (
          <BsPagination.Item onClick={()=> {opts.actualPage.set(index)}} key={index} active={actualPage === index +1}>
            {index + 1}
          </BsPagination.Item>
        ))
      }
    </BsPagination>
  );
}
