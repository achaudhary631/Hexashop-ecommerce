import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Link} from "react-router-dom"

export default function Blogs() {
  const [count, setCount] = useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setCount(res.data)
      });
  },[])
  return (
    <div>
      <div className='details'>
        <div className="container py-5 ">
          <h3 className='pb-4'>Blogs</h3>
      {count.map((blogs)=>(
        
        <ul style={{textTransform:'capitalize'}}>
          <li><Link to={`/single/${blogs.id}`} >{blogs.title}</Link> </li>
        </ul>
       
      ))}
       </div>
        </div>
    </div>
  )
}
