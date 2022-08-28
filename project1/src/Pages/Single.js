import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Single() {
    let { id } = useParams()
    const [count, setCount] = useState([])
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                setCount(res.data)
            });
    }, [])
    return (
        <div>
            <div className='details'>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className='pb-4' style={{ textTransform: 'capitalize' }}>{count.title}</h3>
                            <p style={{ textTransform: 'capitalize', fontWeight: '300', color: 'purple' }}>{count.body}</p>
                        </div>
                        <div className="col-lg-6">
                            <img src="https://technext.github.io/hexashop/assets/images/single-product-01.jpg" style={{ width: '100%', height: '100%' }} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
