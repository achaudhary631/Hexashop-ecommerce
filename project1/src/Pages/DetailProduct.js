
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function DetailProduct() {
  let { id } = useParams()
  const [count, setCount] = useState([])
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        setCount(res.data)
      });
  }, [])
  return (
    
    <div className='details'>
      <div className="container py-5 ">
        <h2 className='detailproduct text-center'>Product Details</h2>
        <div className="productdetail pt-5 pb-4 d-lg-flex">
          <div className="detailimage me-5">
            <img src={count.image} alt="" style={{width:'300px',height:'300px'}} />
          </div>
          <div className="detailtext">
            <h3>{count.title}</h3>
            <h5 className='my-3' style={{textTransform:'capitalize'}}  >{count.category}</h5>
            <em className='my-4'>{count.description}</em>
            <p className='mt-4'>price: ${count.price}</p>
            <div className="order mt-4">
              <button className='border border-1 border-dark bg-dark text-white px-5 py-3'>Order Now</button>
            </div>
          </div>

        </div>
      </div>
    </div>
    
  )
}
