import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Card,
  Image,
  Alert,
  ListGroupItem,
  FormControl,
  Button,
} from "react-bootstrap";
import { addToCart, removeFromCart } from "../APISlices/cartSlice";

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };
  const removeFromCartHandler = (product) => {
    dispatch(removeFromCart(product));
  };
  const checkOutHandler = () => {
    history.push("/login?redirect=shipping");
  };
  return (
    <Row>
      <Col md={8}>
        <h1>SHOPPING CART</h1>
        {cartItems.length === 0 ? (
          <Alert variant="danger">
            Your Cart is empty&nbsp;&nbsp;
            <Link to="/" style={{ color: "blue" }}>
              Go Back
            </Link>
          </Alert>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroupItem key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fluid
                      roundedCircle
                    />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    <FormControl
                      as="select"
                      value={item.qty}
                      onChange={(e) => addToCartHandler(item, e.target.value)}
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </FormControl>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => {
                        removeFromCartHandler(item._id);
                      }}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>
                Subtotal - {cartItems.reduce((acc, item) => acc + item.qty, 0)}
              </h3>
            </ListGroupItem>
            <ListGroupItem>
              Total Price = $
              {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)}
            </ListGroupItem>
            <ListGroupItem>
              <Button
                type="button"
                className="btn btn-block"
                disabled={cartItems.length === 0}
                onClick={checkOutHandler}
              >
                Proceed To CheckOut
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
