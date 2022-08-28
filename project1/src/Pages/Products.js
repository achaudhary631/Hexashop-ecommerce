import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Link} from "react-router-dom"

export default function Products() {
  const [count, setCount] = useState([])
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setCount(res.data)
      });
  },[])


  return (
    <div className='socialmedia'>
      <div className="container py-5">
        <h1 className='text-center'>Our Latest Product</h1>
        <div className="row ">
          {count.map((detail) => (
            <div className="col-lg-3 py-5">
              <div className="card text-center" >
                <img className='ms-4 my-3'  src={detail.image} alt="" style={{width:'200px', height:'200px'}} />
                <div className="card-body">
                  <h4 className="card-title">{detail.title.slice(0,8)}..</h4>
                  <h5>{detail.category}</h5>
                  <h5 style={{fontSize:'16px'}}>Price:${detail.price}</h5>
                  <p className="card-text">{detail.description.slice(0,64)}..</p>
                  <Link to={`/detailproduct/${detail.id}`}> <button className='menbox border-0 px-4 py-2 text-light'> See More</button></Link> 
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
