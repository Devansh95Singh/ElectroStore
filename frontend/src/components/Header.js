import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, Container, Form, Button, FormControl} from 'react-bootstrap';

const Header = () => {
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
                <Nav.Link href="/cart">< i className='fas fa-user'></i>&nbsp;&nbsp;Add To Cart</Nav.Link>
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
