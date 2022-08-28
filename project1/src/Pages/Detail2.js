import React from 'react'
import { useParams } from 'react-router-dom';
import kidsWear from '../CatData/kidsWear';


export default function Detail1() {
    let {id}= useParams()
     let display= kidsWear.find((data)=>data.id==id)
    
    return (
        <div className='details'>
            <div className="container py-5 ">
                <h2 className='detailproduct text-center'>Product Details</h2>
                <div className="productdetail pt-5 pb-4 d-lg-flex">
                    <div className="detailimage me-5">
                        <img src={display.image} alt="" />
                    </div>
                    <div className="detailtext">
                        <h3>{display.title}</h3>
                        <h5 className='my-3'>{display.category}</h5>
                        <em className='my-4'>{display.description}</em>
                        <p className='mt-4'>price: ${display.price}</p>
                        <div className="order mt-4">
                            <button className='border border-1 border-dark bg-dark text-white px-5 py-3'>Order Now</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}