import React from 'react';
import { Nav, Navbar, Container, Form, Button, FormControl} from 'react-bootstrap';

const Header = () => {
    return (
        
        <header>
            <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                <Navbar.Brand href="/">ProShop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="/signin">< i className='fas fa-shopping-cart'></i>&nbsp;&nbsp;SignIn/SignUp</Nav.Link>
                <Nav.Link href="/cart">< i className='fas fa-user'></i>&nbsp;&nbsp;Add To Cart</Nav.Link>
      
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
