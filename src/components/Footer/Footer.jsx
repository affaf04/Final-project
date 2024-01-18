import React from 'react'
import './footer.css'
import logo from './logo.png';

function Footer() {
  return (
    <div className='footer'>
      <h2> Seed </h2>
      <img className='logo' src={logo} alt='menu' />
      <p>Taking care of plants is a daily dose of green therapy</p>
      <div className='social'>
      <a href="url">
      <img src="https://716squash.org/wp-content/uploads/2022/10/Round-shiny-silver-frame-Instagram-icon-button-with-gradient-effect-on-transparent-background-PNG.png" alt="img" height={'40px'} width={'40px'} />
       </a>
       <a href="url">
         <img src="https://i.pinimg.com/originals/42/75/49/427549f6f22470ff93ca714479d180c2.png" alt="img" height={'35px'} width={'35px'} />
        </a>

       <a href="url">
        <img src="https://www.vhv.rs/dpng/d/415-4153576_download-email-symbol-png-transparent-images-transparent-email.png" alt="img" height={'40px'} width={'40px'} />
         </a>
      </div>

    </div>
  )
}

export default Footer