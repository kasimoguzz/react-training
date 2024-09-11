import React from 'react'

function Header({ number,increment}) {
    console.log("ab");
  return (
    <div>Header <br />
     <button onClick={increment}>click</button>
    </div>
    
  )
}

export default React.memo(Header)