import React from 'react';

import {Navbar,Nav} from 'react-bootstrap';
import {Link, BrowserRouter as Router} from 'react-router-dom';
class Header extends React.Component
{
render()
{
return(
<>
<Router>
<Navbar expand="lg"   >
<Navbar.Brand href="#"></Navbar.Brand>    
<Nav className="mr-auto navbar-right" >
<Nav.Link><Link to="/">Home</Link></Nav.Link>
<Nav.Link><Link to="/aboutus">About Us</Link></Nav.Link>
<Nav.Link><Link to="/products">Products</Link></Nav.Link>
<Nav.Link><Link to="/contact">Contact Us</Link></Nav.Link>
</Nav>   
</Navbar>
</Router>        
 </>  
);}

}
export default Header;