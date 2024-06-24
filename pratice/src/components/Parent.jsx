import { useState } from 'react'
import Child from './Child'
function Parent()
{
  const [counter,setCounter]=useState(0);

  return(
    <div className='parent'>
      <h1>Parent</h1>
        <h1>Counter:{counter}</h1>
        <Child setCounter={setCounter}/>
    </div>
  )
}
export default Parent