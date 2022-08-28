import React from 'react'

export default function About() {
  return (
    <div>
      <div className='contact pb-5'>
        <div className="contactback my-5">
          <h1 className='contacttext  text-white'>About Us</h1>
          <em className=' text-white'>Awesome, clean & creative HTML5 Template</em>
        </div>
        <div className="container mb-4">
          <div className="row">
            <div className="col-lg-6">
              <img src="https://technext.github.io/hexashop/assets/images/about-left-image.jpg" style={{ width: '100%' }} alt="" />
            </div>
            <div className="col-lg-6">
              <h1 style={{ fontSize: '34px', fontWeight: '700' }}>About Us & Our Skills</h1>
              <p className='abouttext mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.</p>
              <div className="abttex d-flex">
                <svg xmlns="http://www.w3.org/2000/svg" width={70} height={70} fill="currentColor" className="bi bi-quote" viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                </svg>
                <em style={{ fontSize: '14px', fontWeight: '500', paddingTop: '10px', paddingLeft: '15px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuski smod kon tempor incididunt ut labore.</em>
              </div>
              <p className='abouttext pt-3' style={{ borderBottom: '2px gray dashed', paddingBottom: '30px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
              <div className="social pt-3">
                <button className='about border-0 me-2'><svg xmlns="http://www.w3.org/2000/svg" width={31} height={31} fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
                </button>
                <button className='about me-2 border-0 rounded-circle px-2 py-1 text-white bg-dark'><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
                </button>
                <button className='about me-2 border-0 rounded-circle px-2 py-1 text-white bg-dark'><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
                </button>
                <button className='about me-2 border-0 rounded-circle px-2 py-1 text-white bg-dark'><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-behance" viewBox="0 0 16 16">
                  <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391.286.176.497.426.641.747.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922.281.426.461.957.461 1.563 0 .496-.105.922-.285 1.278a2.317 2.317 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.329 5.329 0 0 1-1.278.176L0 12.803V3h4.654zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a.981.981 0 0 0-.32-.355 1.84 1.84 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305v.005zm6.858-.035c.286.285.711.426 1.278.426.39 0 .746-.106 1.032-.286.285-.215.46-.426.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.135 4.135 0 0 1-1.527-.285 2.827 2.827 0 0 1-1.137-.782 2.851 2.851 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4.018 4.018 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396zm2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176-.215.105-.356.25-.496.39a.957.957 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978v-.957z" />
                </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team">
        <div className="container py-5">
          <div className="row py-5">
            <h1 className='text-center'>Our Amazing Team</h1>
            <em className='text-center' style={{ fontSize: '14px', color: 'gray', paddingBottom: '50px' }}>Details to details is what makes Hexashop different from the other themes.</em>
            <div className="col-lg-4 ">
              <div className="abtimg">
                <img className='w-100 ' src="https://technext.github.io/hexashop/assets/images/team-member-01.jpg" alt="" />
                <span>
                  <button className='abtfb border-0 me-2 '><i className="fa fa-facebook" aria-hidden="true"></i></button>
                  <button className='abttw border-0 me-2 '><i className="fa fa-twitter" aria-hidden="true"></i></button>
                  <button className='abtlin border-0 me-2'><i className="fa fa-linkedin" aria-hidden="true"></i></button>
                  <button className='abtbeh px-2 py-1 border-0 rounded-circle'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-behance" viewBox="0 0 16 16">
                    <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391.286.176.497.426.641.747.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922.281.426.461.957.461 1.563 0 .496-.105.922-.285 1.278a2.317 2.317 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.329 5.329 0 0 1-1.278.176L0 12.803V3h4.654zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a.981.981 0 0 0-.32-.355 1.84 1.84 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305v.005zm6.858-.035c.286.285.711.426 1.278.426.39 0 .746-.106 1.032-.286.285-.215.46-.426.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.135 4.135 0 0 1-1.527-.285 2.827 2.827 0 0 1-1.137-.782 2.851 2.851 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4.018 4.018 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396zm2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176-.215.105-.356.25-.496.39a.957.957 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978v-.957z" />
                  </svg></button>
                </span>
              </div>
              <div className="abthead text-center mt-4">
                <h1>Ragnar Lodbrok</h1>
                <em>Product Caretaker</em>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="abtimg">
                <img className='w-100' src="https://technext.github.io/hexashop/assets/images/team-member-02.jpg" alt="" />
                <span>
                  <button className='abtfb border-0 me-2 '><i className="fa fa-facebook" aria-hidden="true"></i></button>
                  <button className='abttw border-0 me-2 '><i className="fa fa-twitter" aria-hidden="true"></i></button>
                  <button className='abtlin border-0 me-2'><i className="fa fa-linkedin" aria-hidden="true"></i></button>
                  <button className='abtbeh px-2 py-1 border-0 rounded-circle'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-behance" viewBox="0 0 16 16">
                    <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391.286.176.497.426.641.747.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922.281.426.461.957.461 1.563 0 .496-.105.922-.285 1.278a2.317 2.317 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.329 5.329 0 0 1-1.278.176L0 12.803V3h4.654zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a.981.981 0 0 0-.32-.355 1.84 1.84 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305v.005zm6.858-.035c.286.285.711.426 1.278.426.39 0 .746-.106 1.032-.286.285-.215.46-.426.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.135 4.135 0 0 1-1.527-.285 2.827 2.827 0 0 1-1.137-.782 2.851 2.851 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4.018 4.018 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396zm2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176-.215.105-.356.25-.496.39a.957.957 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978v-.957z" />
                  </svg></button>
                </span>
              </div>
              <div className="abthead text-center mt-4">
                <h1>Ragnar Lodbrok</h1>
                <em>Product Caretaker</em>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="abtimg">
                <img className='w-100' src="https://technext.github.io/hexashop/assets/images/team-member-03.jpg" alt="" />
                <span>
                  <button className='abtfb border-0 me-2 '><i className="fa fa-facebook" aria-hidden="true"></i></button>
                  <button className='abttw border-0 me-2 '><i className="fa fa-twitter" aria-hidden="true"></i></button>
                  <button className='abtlin border-0 me-2'><i className="fa fa-linkedin" aria-hidden="true"></i></button>
                  <button className='abtbeh px-2 py-1 border-0 rounded-circle'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-behance" viewBox="0 0 16 16">
                    <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391.286.176.497.426.641.747.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922.281.426.461.957.461 1.563 0 .496-.105.922-.285 1.278a2.317 2.317 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.329 5.329 0 0 1-1.278.176L0 12.803V3h4.654zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a.981.981 0 0 0-.32-.355 1.84 1.84 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305v.005zm6.858-.035c.286.285.711.426 1.278.426.39 0 .746-.106 1.032-.286.285-.215.46-.426.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.135 4.135 0 0 1-1.527-.285 2.827 2.827 0 0 1-1.137-.782 2.851 2.851 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4.018 4.018 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396zm2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176-.215.105-.356.25-.496.39a.957.957 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978v-.957z" />
                  </svg></button>
                </span>
              </div>
              <div className="abthead text-center mt-4">
                <h1>Ragnar Lodbrok</h1>
                <em>Product Caretaker</em>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team">
        <div className="container py-5">
          <div className="row pt-5">
            <h1 className='text-center'>Our Services</h1>
            <em className='text-center' style={{ fontSize: '14px', color: 'gray', paddingBottom: '50px' }}>Details to details is what makes Hexashop different from the other themes.</em>
            <div className="col-lg-4">
              <div className="card shadow p-4 mb-5 bg-white rounded border-0" style={{ width: '100%' }}>
                <div className="card-body text-center mb-3">
                  <h5 className="card-title pb-3" style={{fontSize:'24px'}} >Synther Vaporware</h5>
                  <p className="card-text"  style={{fontSize:'14px'}} >Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.</p>
                </div>
                <img src="https://technext.github.io/hexashop/assets/images/service-01.jpg" className="card-img-top w-100" alt="..." />
              </div>
            </div>
            <div className="col-lg-4">
            <div className="card shadow p-4 mb-5 bg-white rounded border-0" style={{ width: '100%' }}>
                <div className="card-body text-center mb-3">
                  <h5 className="card-title pb-3" style={{fontSize:'24px'}} >Locavore Squidward</h5>
                  <p className="card-text"  style={{fontSize:'14px'}} >Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.</p>
                </div>
                <img src="https://technext.github.io/hexashop/assets/images/service-02.jpg" className="card-img-top w-100" alt="..." />
              </div>
            </div>
            <div className="col-lg-4">
            <div className="card shadow p-4 mb-5 bg-white rounded border-0" style={{ width: '100%' }}>
                <div className="card-body text-center mb-3">
                  <h5 className="card-title pb-3" style={{fontSize:'24px'}} >Health Gothfam</h5>
                  <p className="card-text"  style={{fontSize:'14px'}} >Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.</p>
                </div>
                <img src="https://technext.github.io/hexashop/assets/images/service-03.jpg" className="card-img-top w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
