import React from 'react'
import './Footer.css'
import logo from './logo.png';

function Footer() {
  return (
    <div className='footer'>
      <h2> Inside Out Store </h2>
      <img style={{ width: '300px' ,height: '100px', marginRight: '20px', cursor:"pointer"}} className='logo' src={logo} alt='menu' />
      <p className='indent'>
         Thank you for choosing our store. We hope you enjoy your shopping experience with us.</p>      
    <div className='social'>
      <a href="https://www.instagram.com/">
      <img src="https://716squash.org/wp-content/uploads/2022/10/Round-shiny-silver-frame-Instagram-icon-button-with-gradient-effect-on-transparent-background-PNG.png" alt="img" height={'20px'} width={'20px'} />
       </a>
       <a href="https://www.facebook.com/">
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