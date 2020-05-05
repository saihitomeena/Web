import React, {useState} from 'react'

function useSateApp()
{

const [inc, incCount]= useState(0);
const Counts=['Meena','Amala','Jaya'];
const [count, setCount1= useState([]);

const setCount1=()=>{
  if(inc >= counts.length-1)
    {
      incCount(0);
      setCount(counts[inc])
      
    }
    else{
      setCount(counts[inc])
      incCount(inc+1);
    }

}

return(
<div>
<p>You clicked {count}</p>
    <button onClick={setCount1}>Click</button>
</div>
)
}
