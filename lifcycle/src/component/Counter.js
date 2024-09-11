import {useState,useEffect} from 'react'

function Counter() {

    const [number,setNumber] = useState(0)

   useEffect(()=>{
    console.log("dom mount edildi");
    

    const Interval = setInterval(()=>{
        setNumber((n)=> n+1)
    }, 1000)

    return () => clearInterval(Interval)
   },[])

   useEffect(()=>{
    console.log(" number güncellendi")
   }, [number])


  return (

    <div>
    <h1>{number}</h1>
   
    <button onClick={()=> setNumber(number + 1)}>click</button>
    <br />
    <hr />

    </div>
  )
}

export default Counter