import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import Todoapplication from "./Todoapplication";
//import Countrylist from './Countrylist';
//import FBcomment from './FBcomment';
import Header from './Header';
import Productlist from './Productlist';
import Home from './Home';
import Contactus from './Contactus';
import Aboutus from './Aboutus';
import Footer from './Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
    <Header />
   <Router>
    <Switch>
    <Route  exact path='/' component={Home} />
    <Route  path='/aboutus' component={Aboutus} />
    <Route  path='/products' component={Productlist} />
    <Route  path='/contactus' component={Contactus} />
    </Switch>
   </Router> 

  <Footer />
     
    </div>
  );
}

export default App;
