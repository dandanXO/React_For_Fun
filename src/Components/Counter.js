import React, { useState } from 'react'

function Counter (params) {
  const [count, setCount] = useState(0)
  return(
    <div>
      <h1>
        Count: {count}
      </h1>
      <button onClick={()=>{return setCount(count+1)}}>
        Plus
      </button>
      <button onClick={()=>{return setCount(count-1)}}>
        Minus
      </button>
    </div>
  )
}

export default Counter