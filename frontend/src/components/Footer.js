import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <div >
            
         {/*<Row className="footer-row">
             <Col>
                <h4>Get To Know Us More</h4>
                <ul>
                    <li>About Us</li>
                    <li>Carrers</li>
                    <li>Our Products</li>
                    <li>Press Releases</li>
                </ul>
             </Col>
             <Col></Col>
             <Col></Col>*/}
             <Row className="footer-style"> 
             <Col className="text-center py-3 color">Copyright &copy;2020 ProShop | Terms & Services | All Right's Reserved </Col>
         </Row>
        
         
         </div>
        
    )
}

export default Footer
