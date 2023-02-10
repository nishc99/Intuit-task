import React from 'react'
import sign from "./signin.module.css";
import { BiLock } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';


const Signin = () => {
  return (
    <div>
    <img className={sign.titleimg} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Intuit_logo_2022.svg/1200px-Intuit_logo_2022.svg.png?20221010044033" alt="Image" />
    <div className={sign.logo}>
    <img className={sign.titlelogo1} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoqy2eDv53z-H0MZsaE51LuG69qrVKzbqf6w&usqp=CAU" alt="Image"/>
    <label className={sign.titlelabel}>quickbooks</label>
    <img className={sign.titlelogo2} src="https://image.pngaaa.com/565/4160565-middle.png" alt="Image"/>
    <label className={sign.titlelabel}>mailchimp</label>
    <img className={sign.titlelogo3} src="https://1000logos.net/wp-content/uploads/2020/07/TurboTax-Logo1.jpg" alt="Image"/>
    <label className={sign.titlelabel}>turbotax</label>
    </div>
    
    

    
    <form className={sign.container}>
    <h2 className={sign.head}>Sign in</h2>
    <label className={sign.head2}>Use your Intuit Account to sign in to QuickBooks</label>
    <div className={sign.googlebox}>
    <img className={sign.googleimg} src="https://plugin.intuitcdn.net/identity-authn-core-ui/20e629796e52c9ed7619.png" alt="Image" />
    <label className={sign.head3}>Sign in with Google</label>
    </div>
    <div className={sign.or}>
    <div className={sign.or1} />
    <p className={sign.or2}>OR</p>
    <div className={sign.or3}/>
    </div>
    <div className={sign.email}>
      <label className={sign.id}>Email or User ID</label>
      <label className={sign.phone}>Phone</label>
    </div>
    <input className={sign.box}></input>
    <div>
      <input className={sign.check}type="checkbox"></input>
      <label>Remember me</label>
    </div>
    <NavLink to="/verify"><button className={sign.but}><BiLock size={15}/> Sign In</button></NavLink>
    <div>
    <label className={sign.text}>By selecting Sign in with Google you agree to<br/>
    <span className={sign.text}>our <span className={sign.text1}>Terms</span> and have read and acknowledge our</span> <br/> <span className={sign.text2}>Global Privacy Statement</span>
    </label>
    
    </div>
    <div className={sign.textarea}>
    <label className={sign.try}>Try something else</label>
    </div>
    <div className={sign.textarea}>
    <label className={sign.new}>New to Intuit? <span className={sign.text1}>Create an account</span></label>
    </div>
      
    </form>
    </div>
  )
}

export default Signin