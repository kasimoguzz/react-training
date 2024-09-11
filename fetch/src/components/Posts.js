import {useState,useEffect} from 'react'
import axios from 'axios'
function Posts() {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsloading] = useState(true)

    useEffect(()=>{
        axios("https://jsonplaceholder.typicode.com/posts")
        .then((res) => setPosts(res.data))
        .catch((e)=> console.log(e))
        .finally(()=> setIsloading(false))
        
        
    },[])
  return (

    <div>
        <h1>Posts</h1>
        {isLoading && <div>...loading</div>}

        {
            posts.map((post)=>(
                <div key={post.id}>{post.title}</div>
            ))
        }
      
    </div>
  )
}

export default Posts