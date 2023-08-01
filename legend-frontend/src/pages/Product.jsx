import { Card } from "react-bootstrap";

export default function Product({ product }) {
  return (
    <Card className="d-flex " style={{ width: '18rem', maxHeight: '25rem' }}>
      <Card.Header>
        {product.title}
      </Card.Header>
      <div className="flex-grow-1 overflow-hidden">
        <Card.Img variant="top" src={product.thumbnail} style={{ width: '100%' }} />
      </div>
      <Card.Body>
        <Card.Text>
          {product.description}

        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <span className="">price: {product.price}</span>
      </Card.Footer>
    </Card>
  );
}