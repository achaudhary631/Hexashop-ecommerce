import React from 'react'
import Product1 from '../CatData/Product1'
import Product2 from '../CatData/Product2'
import Product3 from '../CatData/Product3'
import menWear from '../CatData/menWear';
import womenWear from '../CatData/womenWear';
import kidsWear from '../CatData/kidsWear';
import {Link} from "react-router-dom"

export default function Home() {
  return (
    <>
      <div className="banner container-fluid pt-5 pb-5">
        <div className="row pt-4">
          <div className="col-lg-6">
            <div className="left" >
              {Product1.map((a) => (
                <div key={a.id}>
                  <img src={a.image} className='w-100' alt="" />
                  <div className="text position-absolute text-light" >
                    <h1 >{a.name}</h1>
                    <p className='fst-italic py-3' >{a.des}</p>
                    <button className="border border-1 border-white bg-transparent text-light">Purchase Now!</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-3 position-relative">
            {
              Product2.map((b) => (
                <div key={b.id}>
                  <div className="imagefirst position-relative" >
                    <img src={b.image} className='w-100 mb-4 ' alt="" />
                  </div>
                  <div className="text1 position-relative text-center text-light" >
                    <h1 className='a position-absolute'  >{b.name}</h1>
                    <p className='b fst-italic  position-absolute' >{b.des}</p>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="col-lg-3">
            {
              Product3.map((c) => (
                <div key={c.id}>
                  <div className="imagefirst" >
                    <img src={c.image} className='w-100 mb-4 position-relative ' alt="" />
                  </div>
                  <div className="text1 position-relative text-center text-light"  >
                    <h1 className='a position-absolute'  >{c.name}</h1>
                    <p className='b fst-italic  position-absolute'  >{c.des}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="menwear">
        <div className="container py-5">
          <div className="row pt-5 pb-4">
            <h1>Men's Latest</h1>
            <em className='globalem pb-5'>Details to details is what makes Hexashop different from the other themes.</em>
            {menWear.map((detail) => (
              <>
                <div className="col-lg-4" key={detail.id}>
                  <img src={detail.image} alt="" className='w-100' />
                  <div className="text-center pt-4">
                    <h5>{detail.title}</h5>
                    <p className='menprice mb-0'>Price ${detail.price}</p>
                    <p className='menrating pt-1'>Rating<span className="ms-2 py-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg> </span></p>
                    <Link to={`/detail/${detail.id}`}> <button className='menbox border-0 px-4 py-2'>See More</button></Link>
                  </div>

                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="womenwear">
        <div className=" container py-5">
          <div className="row pt-5 pb-4">
            <h1>Women's Latest</h1>
            <em className=' globalem pb-5'>Details to details is what makes Hexashop different from the other themes.</em>
            {womenWear.map((women) => (
              <>
                <div className="col-lg-4" key={women.id}>
                  <img src={women.image} alt="" className='w-100' />
                  <div className="text-center pt-4">
                    <h5>{women.title}</h5>
                    <p className='menprice mb-0'>Price ${women.price}</p>
                    <p className='menrating pt-1'>Rating<span className="ms-2 py-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg> </span></p>
                      <Link to={`/detail1/${women.id}`}><button className='menbox border-0 px-4 py-2'>See More</button></Link>
                  </div>

                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="kidswear">
        <div className=" container py-5">
          <div className="row pt-5 pb-4">
            <h1>kid's Latest</h1>
            <em className='globalem pb-5'>Details to details is what makes Hexashop different from the other themes.</em>
            {kidsWear.map((kids) => (
              <>
                <div className="col-lg-4" key={kids.id}>
                  <img src={kids.image} alt="" className='w-100' />
                  <div className="text-center pt-4">
                    <h5>{kids.title}</h5>
                    <p className='menprice mb-0'>Price ${kids.price}</p>
                    <p className='menrating pt-1'>Rating<span className="ms-2 py-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg> </span></p>
                      <Link to={`/detail2/${kids.id}`}><button className='menbox border-0 px-4 py-2'>See More</button></Link>
                  </div>

                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="explorepro">
        <div className=" container py-5">
          <div className="row pt-5 pb-4">
            <div className="col-lg-6 pe-5">
              <h1>Explore Our Products</h1>
              <p className='parsli py-3'>You are allowed to use this HexaShop HTML CSS template. You can feel free to modify or edit this layout. You can convert this template as any kind of ecommerce CMS theme as you wish.</p>
              <div className="quote d-flex">
                <p className='pe-2'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-quote" viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                </svg></p>
                <em className='paesiem'>You are not allowed to redistribute this template ZIP file on any other website.</em>
              </div>
              <p className='parsli py-3'>There are 5 pages included in this HexaShop Template and we are providing it to you for absolutely free of charge at our TemplateMo website. There are web development costs for us.</p>
              <p className='parsli pb-3'>If this template is beneficial for your website or business, please kindly support us a little via PayPal. Please also tell your friends about our great website. Thank you.</p>
              <button className='discovermore px-5 py-3 border border-dark'>Discover More</button>
            </div>
            <div className="col-lg-3">
              <div className="exptop mb-4 d-flex justify-content-center align-items-center">
                <div className="text-center">
                  <h4>Leather Bags</h4>
                  <em className='latcoll'>Latest Collection</em></div>
              </div>
              <div className="botom">
                <img src="https://technext.github.io/hexashop/assets/images/explore-image-02.jpg" className='w-100' alt="" />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="top">
                <img src="https://technext.github.io/hexashop/assets/images/explore-image-01.jpg" className='w-100' alt="" />
              </div>
              <div className="exptop mt-4 d-flex justify-content-center align-items-center">
                <div className="text-center">
                  <h4>Different Types</h4>
                  <em className='latcoll'>Over 304 Products</em></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
