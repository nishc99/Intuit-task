import React from 'react'
import {TfiMobile} from 'react-icons/tfi';
import {CgPassword} from 'react-icons/cg';
import {FaGreaterThan} from 'react-icons/fa';
import {AiOutlineQuestionCircle} from 'react-icons/ai';
import log from './login.module.css'
import { NavLink } from 'react-router-dom';
const Login = () => {
  return (
    <div  className={log.Container}>
    <div>
<img className={log.logo} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Intuit_logo_2022.svg/1200px-Intuit_logo_2022.svg.png?20221010044033' alt="" /> 
<div className={log.logo1}>
    <img className={log.titlelogo1} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoqy2eDv53z-H0MZsaE51LuG69qrVKzbqf6w&usqp=CAU" alt="Image"/>
    <label className={log.titlelabel}>quickbooks</label>
    <img className={log.titlelogo2} src="https://image.pngaaa.com/565/4160565-middle.png" alt="Image"/>
    <label className={log.titlelabel}>mailchimp</label>
    <img className={log.titlelogo3} src="https://1000logos.net/wp-content/uploads/2020/07/TurboTax-Logo1.jpg" alt="Image"/>
    <label className={log.titlelabel}>turbotax</label>
    </div>
</div>

<div className = {log.boxContainer123}>
  <h6 className={log.hibold}>Let's make sure you're you</h6>
  <p className={log.choose}>Choose how you want to verify your identity</p>
  <p className={log.bluetext}>Learn more</p>
  <hr/>

<div className={log.mobileicon}>
  <TfiMobile style={{height:"30px", width:"fit-content", marginTop:"8px"}}/>
  <div className={log.mobiletext}>
  <p>Text a code</p>
  <h5>****4713</h5></div>
  <FaGreaterThan style={{height:"12px", width:"fit-content",marginLeft:"210px",marginTop:"15", cursor:"pointer"}}/>
</div>
  <hr/>

<div className={log.passwordicon}>
  <CgPassword style={{height:"30px", width:"fit-content"}}/>
 <p style={{marginTop:"2px", marginLeft:"20px"}}>Enter password</p>
 <NavLink to="/Home"><FaGreaterThan style={{height:"12px", width:"fit-content",marginLeft:"180px",marginTop:"10px"}}/></NavLink>
 
</div>
  <hr/>

<div className={log.iconmobile}>
   <AiOutlineQuestionCircle style={{height:"50px", width:"fit-content",marginLeft:"4px", marginTop:"1px"}}/>
  <p style={{marginTop:"-30px", width:"550px",marginTop:"7px",marginRight:"65px"}}>Verify my account a different way<br/> (takes longer) </p>
  
 <FaGreaterThan style={{height:"20px", width:"fit-content",marginLeft:"-10px",marginTop:"10px",marginRight:"30px", cursor:"pointer"}}/></div>
 <hr/>
 <p className={log.lasttext}>Cancel</p>
</div>

<div className={log.threepara}>
<p>Legal</p>
<p>Privacy</p>
<p>Security</p>
</div>
<p style={{marginLeft:"130px", fontSize: "9px"}}>
© 2023 Intuit Inc.All rights reserved.Intuit, QuickBooks, QB, TurboTax, Mint, Credit Karma, and Mailchimp are registered<br/>
trademarks of Intuit Inc.Terms and conditions, features, support, pricing, and service options subject to change without notice. </p>

    </div>
  )
}

export default Login;

// import React from 'react'
// import {TfiMobile} from 'react-icons/tfi';
// import {CgPassword} from 'react-icons/cg';
// import {FaGreaterThan} from 'react-icons/fa';
// import {AiOutlineQuestionCircle} from 'react-icons/ai';
// import log from './login.module.css'
// const Login = () => {
//   return (
//     <div  className={log.Container}>
//     <div>
// <img className={log.logo} style={{height:"30px", width:"fit-content"}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Intuit_logo_2022.svg/1200px-Intuit_logo_2022.svg.png?20221010044033' alt="" /> 
// </div>

// <div className ={log.boxContainer123}>
//   <h6 className={log.hibold}>Let's make sure you're you</h6>
//   <p className={log.choose}>Choose how you want to verify your identity</p>
//   <p className={log.bluetext}>Learn more</p>
//   <hr/>

// <div className={log.mobileicon}>
//   <TfiMobile style={{height:"30px", width:"fit-content"}}/>
//   <div className={log.mobiletext}>
//   <p>Text a code</p>
//   <h5>****4713</h5></div>
//   <FaGreaterThan style={{height:"12px", width:"fit-content",marginLeft:"210px",marginTop:"10px"}}/>
// </div>
//   <hr/>

// <div className={log.passwordicon}>
//   <CgPassword style={{height:"30px", width:"fit-content"}}/>
//  <p style={{marginTop:"2px", marginLeft:"20px"}}>Enter password</p>
//  <FaGreaterThan style={{height:"12px", width:"fit-content",marginLeft:"180px",marginTop:"10px"}}/></div>
//  <hr/>

// <div className={log.iconmobile}>
//    <AiOutlineQuestionCircle style={{height:"50px", width:"fit-content",marginLeft:"10px", marginTop:"-10px"}}/>
//   <p style={{marginTop:"-30px", width:"550px",marginTop:"7px",marginRight:"60px"}}>Verify my account a different way </p>
//   {/* <p style={{marginLeft:"-50px",width:"500"}}>takes longer</p> */}
  
//  <FaGreaterThan style={{height:"20px", width:"fit-content",marginLeft:"-10px",marginTop:"10px",marginRight:"30px"}}/></div>
//  <hr/>
//  <p className={log.lasttext}>Cancel</p>
// </div>

// <div className={log.threepara}>
// <p>Legal</p>
// <p>Privacy</p>
// <p>Security</p>
// </div>
// <p style={{marginLeft:"-100px"}}>
// © 2023 Intuit Inc. All rights reserved.

// Intuit, QuickBooks, QB, TurboTax, Mint, Credit Karma, and Mailchimp are registered</p>
// trademarks of Intuit Inc.<p> Terms and conditions, features, support, pricing, and service options subject to change without notice.</p> 

//     </div>
//   )
// }

// export default Login