import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Badge } from "react-bootstrap";
import Product from "../components/Product";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useGetProductsQuery } from "../APISlices/productAPISlice";

const HomeScreen = () => {
  //   const dispatch = useDispatch();
  //   const productList = useSelector((state) => state.productList);
  //   const { loading, error, products } = productList;
  //   useEffect(() => {
  //     dispatch(listProducts());
  //   }, [dispatch]);
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <div>
      <h2 style={{ fontSize: "30px", color: "red" }}>
        Latest Products&nbsp;&nbsp;
        <Badge style={{ color: "blue" }} variant="secondary">
          New
        </Badge>
      </h2>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error?.error}
        </Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default HomeScreen;
