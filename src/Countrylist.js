import React from 'react';
import axios from 'axios';
import moon from './moon.png'
import servicecall from './Servicecall';

class Countrylist extends React.Component
{
constructor(props)
{
super(props);
this.state={
    country:[],
    countryname:"",
    region:""
}

} 
componentDidMount()
{
   /* axios.get("https://restcountries.eu/rest/v2/all").then((res)=>{

    this.setState({country:res.data});

    })
    */
    this.Countrydata();

} 

async Countrydata()
{
    try{
        let countrydata = await servicecall.allcountrylist();
        countrydata = countrydata.data;
        console.log(countrydata);
        this.setState({country:countrydata})
    }
    catch(errException){
        console.log(errException);
    }
}
async handleChange(val)
{
    try{
        if(val!=='')
        {
        let countryname = await servicecall.callcountrylistbyname(val);
        countryname = countryname.data;
        this.setState({country:countryname});
        }
    }
    catch(err){
console.log(err);
    }
}
async Regionchange(val)
{
    try{
        if(val!=='')
        {
            let region= await servicecall.callcountrylisybyregion(val);
            region=region.data;
            this.setState({country:region});

        }

    }
    catch(err)
    {
        console.log(err);
    }
}

/*handleChange(val)
{
    if(val!=='')
    {
    this.setState({countryname:val});
    const countryName=val;

    console.log("https://restcountries.eu/rest/v2/name/"+countryName);
    axios.get("https://restcountries.eu/rest/v2/name/"+countryName).then((res)=>{


        

    this.setState({country:res.data});
    })
    }


}
Regionchange(val)
{
   
this.setState({region:val});    
const regionName=val;
axios.get("https://restcountries.eu/rest/v2/region/"+regionName).then((res)=>{
this.setState({country:res.data})

})

}
*/
render()
{
return(
    <>
<nav className="navbar navbar-default nabvar-static-top" role="navigation">
<div className="container">
<div className="nabvar-header">
<a style={{ fontSize:"16px",fontWeight:"600"}}>Where in the world?</a>
</div>
<ul className="nav navbar-nav navbar-right">
<li><a  style={{ fontSize:"14px",fontWeight:"200"}}><img src={moon}/> Dark mode</a></li>
</ul>
</div>
</nav>

    <div className="container bg">
    <div className="row mt-5">
    <div className="col-md-6"><div className="form-group has-search float-left">
<span className="fa fa-search form-control-feedback"></span>
<input type="text" className="form-control" placeholder="Search for a Country" onChange={e=>this.handleChange(e.target.value)} />
</div></div>
    <div className="col-md-6">
 
  <select value={this.state.value} onChange={e=>this.Regionchange(e.target.value)} className="custom-select mr-sm-2 float-right" >
  <option value="">Filter by Region</option> 
   <option value="africa">Africa</option> 
   <option value="americas">America</option> 
   <option value="asia">Asia</option> 
   <option value="europe">Europe</option>
   <option value="oceania">Oceania</option>  

  </select>



    </div>

    </div>
    <div className="row mt-4"> 
    {this.state.country.map((res,i)=>
     
     <div className="col-12  col-md-3">
       
      <div className="card"> 
     
          <div className='embed-responsive'>  
       <img src={ res.flag}  className="rounded-top card-img-top"   />
       </div>
       <div className='card-body '>
      
        <h5 className='card-title'>{ res.name}</h5>
        <p className="card-text">
        
       <strong>Population</strong> : { res.population}< br />
       <strong>Region</strong> : { res.region}< br />
       <strong>Capital</strong>: { res.capital}< br />   
        </p>
      </div>  
    </div>
    </div>
    )} 
    </div></div>
    </>
)

}

}
export default Countrylist;