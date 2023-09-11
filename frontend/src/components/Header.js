import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, Container, Form, Button, FormControl, Badge} from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Header = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const noOfItems = cartItems.reduce((a, item) => a + Number(item.qty), 0);
    return (
        
        <header>
            <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                <LinkContainer to='/'>
                <Navbar.Brand >ElectroStore</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <LinkContainer to='/signIn'>   
                <Nav.Link >< i className='fas fa-shopping-cart'></i>&nbsp;&nbsp;SignIn/SignUp</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/cart'>
                <Nav.Link href="/cart">< i className='fas fa-user'></i>&nbsp;&nbsp;Cart {noOfItems > 0 && ( <Badge pill bg="danger">{noOfItems}</Badge> )}</Nav.Link>
                </LinkContainer>
                </Nav>
                <Form inline>
                  &nbsp;&nbsp;&nbsp;&nbsp;<FormControl type="text" placeholder="Search" className="mr-sm-2" />
                     <Button variant="secondary">Search</Button>
                </Form>
              </Navbar.Collapse>
              </Container>
              </Navbar>
        </header>
    )
}

export default Header
