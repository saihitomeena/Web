import React from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import {Link, BrowserRouter as Router} from 'react-router-dom';
class Footer extends React.Component
{
render()
{
    const h5newstyle={
        margin:"20px",
        fontSize:"16px",
        color:"#fff",
        textDecoration:"underline"
    }
    const ahreflink={
        color:"#fff",
        fontSize:"12px"
    }
    return(
        
    <div style={{backgroundColor:"#000",bottom:"0",width:"100%"}}>
  <Router> 
  <Container>               
 <Row>
     
<Col xs={6} md={4}><h5 style={h5newstyle}>CONTACT INFORMATION</h5>
<p><Link to='' style={ahreflink}>Terms &amp; Conditions</Link><br />
<Link to='' style={ahreflink}>Privacy Policy</Link><br />
<Link to='' style={ahreflink}>Return &amp; Refund</Link></p>
</Col>
<Col xs={6} md={4}><h5 style={h5newstyle}>ORDER INFORMATION</h5>
<p><Link to='' style={ahreflink}>Contact</Link><br />
<Link to='' style={ahreflink}>Aboutus</Link><br />
<Link to='' style={ahreflink}>Orders</Link></p>
</Col>
<Col xs={6} md={4}><h5 style={h5newstyle}>CONTACT</h5>
<p><Link to='' style={ahreflink}>Store Locator</Link><br />
<Link to='' style={ahreflink}>Tel: +0000000000</Link><br />
<Link to='' style={ahreflink}>Email:XXXXXXX</Link></p>
</Col>
            </Row> </Container> </Router>
            </div>
        
    )
}

}
export default Footer;