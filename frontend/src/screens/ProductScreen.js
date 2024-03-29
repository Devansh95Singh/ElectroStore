import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Row,
  Col,
  Image,
  Card,
  ListGroup,
  Button,
  ListGroupItem,
  FormControl,
} from "react-bootstrap";
import Rating from "../components/Rating";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useGetProductQuery } from "../APISlices/productAPISlice";
import { addToCart } from "../APISlices/cartSlice";

const ProductScreen = ({ history, match }) => {
  const { id: productId } = useParams();
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const { data: product, isLoading, error } = useGetProductQuery(productId);
  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        <i className="fa fa-reply"></i>&nbsp;&nbsp;GO BACK
      </Link>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product?.image} alt={product?.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroupItem>
                <h4 style={{ color: "blue" }}>{product?.name}</h4>
              </ListGroupItem>
              <ListGroupItem>
                <Rating
                  value={product?.rating}
                  text={`${product?.numReviews} reviews`}
                />
              </ListGroupItem>
              <ListGroupItem>
                <p>{product?.description}</p>
              </ListGroupItem>
              <ListGroupItem>
                <strong>Price: ${product?.price}</strong>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <Row>
                    <Col>Price:</Col>
                    <Col>${product?.price}</Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product?.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                    </Col>
                  </Row>
                </ListGroupItem>
                {product.countInStock > 0 && (
                  <ListGroupItem>
                    <Row>
                      <Col>Qantity Available</Col>
                      <Col>
                        <FormControl
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </FormControl>
                      </Col>
                    </Row>
                  </ListGroupItem>
                )}
                <ListGroupItem>
                  <Button
                    onClick={addToCartHandler}
                    variant="secondary"
                    className="btn-block"
                    disabled={product.countInStock === 0}
                  >
                    Add To Cart
                  </Button>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
