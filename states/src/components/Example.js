import {useState,useEffect} from 'react'

function Example() {

    const [number,setNumber] = useState(0)
    const [name,setName] = useState("user")

   useEffect(()=>{
    console.log("dom mount edildi");
    
   },[])

   useEffect(()=>{
    console.log(" number güncellendi")
   }, [number])

   useEffect(()=>{
    console.log(" name güncellendi")
   }, [name])
  return (
    <div>
        <h1>{number}</h1>
       
        <button onClick={()=> setNumber(number + 1)}>click</button>
        <br />
        <hr />
        <h1>{name}</h1>
        
        <button onClick={()=> setName("unkown")}>click</button>
    </div>
  )
}

export default Example