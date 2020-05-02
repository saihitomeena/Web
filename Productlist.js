import React from 'react';
import {Container,Row,Col,Card} from 'react-bootstrap';
import servicecallproduct from './servicecallproduct';
class Productlist extends React.Component
{
constructor(props)
{
    super(props);
    this.state={
        receipes:[]
    }
}

componentDidMount()
{
    
    this.productlist();

}    
async productlist()
{
    
    try{
        let pp = await servicecallproduct.allmenuitems();
        console.log(pp);
        pp=pp.data.categories;
       
        this.setState({receipes:pp});
        console.log(this.state.receipes);
    }
    catch(err){
        console.log(err);
    }

}
render()
{
    return(
        <div style={{width:"80%",padding:"50px",margin:"50px auto",backgroundColor:"#fff"}}>
       <Container>
           <Row>
            
            {this.state.receipes.map((result,i)=>{
              return(
              
              <Col>
              <Card style={{width:'18rem'}}>
              <Card.Img src={result.strCategoryThumb} />
              <Card.Body>
              <Card.Title>{result.strCategory}</Card.Title>    
              </Card.Body>
              </Card>
              </Col>
              
              )
            })}
            
            

           </Row>


       </Container>
       </div>
    );


}



}export default Productlist;