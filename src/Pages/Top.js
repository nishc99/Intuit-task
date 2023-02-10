import React from 'react';
import topcss from  "./top.module.css";
import { BsPerson } from 'react-icons/bs';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineBell } from 'react-icons/ai';
import { CiSettings } from 'react-icons/ci';
import { FcInfo } from 'react-icons/fc';
const Top = () => {
  return (
    <>
    <section className={topcss.topContainer} >
    <div className={topcss.container} >
        <div><h4 className={topcss.title}>THINKAI LABS</h4></div>
        <div className={topcss.leftnav} > 
            <div >
            <div className={topcss.toplogo}>
            <BsPerson size={20} style={{marginLeft:"-8px"}}/>
             <label style={{marginLeft:"-8px", fontSize:"12px", width:"60px"}}>My Exports</label>
             
             
             <AiOutlineQuestionCircle size={15}/>
             <label style={{fontSize:"12px"}}>Help</label>
             
             
             <AiOutlineSearch size={15}/>
            
             
             <AiOutlineBell size={20}/>
             
             
             <CiSettings size={20}/>
             
             
             <FcInfo size={20}/>
            </div>
             
             
            </div>
             </div>
    </div>

    </section>
    
    </>
  )
}

export default Top;