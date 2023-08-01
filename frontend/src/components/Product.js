import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
//import Rating from './Rating';
import Rating2 from './Rating2';

const Product = ( {product}) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>

      </Card.Body>
      <Link to={`/product/${product._id}`}>
        <Card.Title as="div">
          <strong>{product.name}</strong>
        </Card.Title>
      </Link>

      <Card.Text as='div'>
        <Rating2 value={product.rating} item={product.name} text={`${product.numReviews} reviews`} />
      </Card.Text>

      <Card.Text as="h3">
        ${product.price}
      </Card.Text>
    </Card>
  )
}
export default Product