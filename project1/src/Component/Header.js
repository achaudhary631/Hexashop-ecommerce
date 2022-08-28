import React from 'react'
import { Routes, Route, Link} from "react-router-dom";
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import Contact from '../Pages/Contact';
import About from '../Pages/About';
import Blogs from '../Pages/Blogs';
import Explore from '../Pages/Explore';
import Detail from '../Pages/Detail';
import Detail1 from '../Pages/Detail1';
import Detail2 from '../Pages/Detail2';
import DetailProduct from '../Pages/DetailProduct';
import Single from '../Pages/Single';




export default function Header() {

  return (
    
    <>

      <nav className=" navbar navbar-expand-lg py-3 ">
        <div className="container navfixed">
          <img src="https://technext.github.io/hexashop/assets/images/logo.png" alt='' />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
            </span></button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-0 ms-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link me-3" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link active" aria-current="page" to="/products">Products</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link active" aria-current="page" to="/contact">Contact Us</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link active" aria-current="page" to="/blog">Blogs</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active" aria-current="page" to="/explore" >Explore</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/detail1/:id" element={<Detail1 />} />
        <Route path="/detail2/:id" element={<Detail2 />} />
        <Route path="detailproduct/:id" element={<DetailProduct />} />
        <Route path="single/:id" element={<Single />} />
            

      </Routes>

    </>

  )
}
