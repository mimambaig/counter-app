import React from 'react'
import './App.css'
import { useState } from 'react'

const App = () => {
const [num, setNum] = useState(0)

const increment = ()=> {
  setNum (num + 1);
}
const decrement = ()=> {
  if (num > 0){
    setNum (num - 1);

  }
}



  return (
    <>
   
    <div>
<div className="card-div">
<h1>Counter App</h1>
<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' , gap: '10px'}}>

<button className='card' onClick={decrement}><span style={{fontSize: "30px"}}>-</span></button>

      <span className='changing-numbers'><span style={{fontSize: "30px"}}>{num}</span></span>
      <button className='card' onClick={increment}><span style={{fontSize: "30px"}}>+</span></button>
</div>

</div>
      
    </div>

    </>
  )
}

export default App