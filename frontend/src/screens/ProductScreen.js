import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Row, Col, Image, Card, ListGroup, Button, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'

const ProductScreen = ({ match }) => {
    const [product, setProduct] = useState({})
    useEffect(()=>{
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/product/${match.params.id}`)
            setProduct(data)
        } 
        fetchProduct()
    },[match])
    return (
        <>
        <Link className='btn btn-light my-3' to='/'>
            <i className="fa fa-reply"></i>&nbsp;&nbsp;GO BACK
        </Link>
        <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroupItem >
                        <h4 style={{color:"blue"}}>{product.name}</h4>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                    </ListGroupItem>
                    <ListGroupItem>
                        <p>{product.description}</p>
                    </ListGroupItem>
                    <ListGroupItem>
                        <strong>${product.price}</strong>
                    </ListGroupItem>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <Row>
                            <Col>Price:</Col>
                            <Col>${product.price}</Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                            <Col>Status:</Col>
                            <Col>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button variant='secondary' className='btn-block' disabled={product.countInStock === 0}>Add To Cart</Button>
                        </ListGroupItem>
                        </ListGroup>
                </Card>
            </Col>

        </Row>
        </>
    )

}

export default ProductScreen
