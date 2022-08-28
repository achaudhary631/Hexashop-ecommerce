import React from 'react'
// import Iframe from './iframe'

export default function Contact() {
  return (
    <div>
      <div className='contact pb-5'>
        <div className="contactback my-5">
          <h1 className='contacttext  text-white'>Contact Us</h1>
          <em className=' text-white'>Awesome, clean & creative HTML5 Template</em>
        </div>
        <div className="container mb-4">
          <div className="row">
            <div className="col-lg-6">
              <div className="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.834375872618!2d85.29371461453795!3d27.69151343279564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb184323a63889%3A0xf604dc7a2eefa29c!2sKuleshwor%20Tinkune!5e0!3m2!1sen!2snp!4v1661426102875!5m2!1sen!2snp" style={{ width: "100%", height: "470px", border: "none" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
            </div>
            <div className="col-lg-6">
              <h1 style={{ fontSize: '34px', fontWeight: '700' }}>Say Hello. Don't Be Shy!</h1>
              <em style={{ fontSize: '14px', color: 'gray' }}>Details to details is what makes Hexashop different from the other themes.</em>
              <form action="" className='my-4'>
                <input type="text" placeholder='Your Name' style={{ marginRight: '25px', width: '100%', marginBottom: '20px' }} />
                <input type="email" placeholder='Your Email' style={{ width: '100%' }} />
              </form>
              <textarea placeholder='Your Message' name="text" id="textarea" rows="7" style={{ width: '100%' }} ></textarea>
              <button className="bg-dark text-white mt-3 p-2"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
              </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
