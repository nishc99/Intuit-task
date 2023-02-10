import React, { useState } from 'react'
import third from "./thirdpage.module.css";
import { TbFileInvoice } from 'react-icons/tb';
import { BsPerson } from 'react-icons/bs';
import { TfiWallet } from 'react-icons/tfi';
import { BsCart2 } from 'react-icons/bs';
import { AiFillBank } from 'react-icons/ai';
import { AiFillPlusCircle } from 'react-icons/ai';
import { AiFillLock } from 'react-icons/ai';
import ReactSwitch from 'react-switch';
import Top from './Top';


const Thirdpage = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = val => {
    setChecked(val)
  }
  return (
    <div>
    <Top/>
     <div className={third.toggle}>
     <label className={third.lab6}>PRIVACY</label>
        <ReactSwitch
        checked={checked}
        onChange={handleChange}
      />
    </div>
        <form className={third.container}>
        <h5 style={{marginBottom:"0px", padding:"15px"}}>Quick actions</h5>
        <label className={third.top}>TOP ACTIONS</label>
        <div className={third.circle}>
        <div className={third.circle1}><TbFileInvoice size={30} style={{marginTop:"15",marginLeft:"15"}}/><AiFillPlusCircle className={third.plusicon}/>
        <label className={third.lab}>Invoice</label>
        </div>
        <div className={third.circle2}><BsPerson size={30} style={{marginTop:"15",marginLeft:"15"}}/><AiFillPlusCircle className={third.plusicon}/>
        <label className={third.lab}>Customer</label>
        </div>
        <div className={third.circle3}><TfiWallet size={30} style={{marginTop:"15",marginLeft:"15"}}/><AiFillPlusCircle className={third.plusicon}/>
        <label className={third.lab}>Expense</label>
        </div>
        <div className={third.circle4}><BsCart2 size={30} style={{marginTop:"15",marginLeft:"15"}}/><AiFillPlusCircle className={third.plusicon}/>
        <label className={third.lab}>Vendor</label>
        </div>
        <div className={third.circle5}><AiFillBank size={30} style={{marginTop:"15",marginLeft:"15"}}/><AiFillPlusCircle className={third.plusicon}/>
        <label className={third.lab1}>Bank Deposit</label>
        </div>
        </div>
        <hr style={{marginTop:"80px",paddingLeft:"50px",height:"1px",width:"90%"}}/>
        <h5 style={{width:"100%",textAlign:"center",color:"blue",cursor:"pointer"}}>See more</h5>
        </form>
        <form className={third.container1}>
        <div>
        <AiFillLock size={30} className={third.logo}/>
        
        </div>
        <label className={third.lab2}>See your financial info by turning privacy off</label>
       
        </form>
       
        <form className={third.container2}>
        <div>
    
        <AiFillLock size={30} className={third.logo1}/>
        
        </div>
        
        <label className={third.lab3}>See your financial info by turning privacy off</label>
        </form>
        <label className={third.lab4}>See your financial info by turning privacy off</label>
        <div>
        <h5 className={third.lab5}>*QuickBooks does not include tax preparation services or assistance with tax preparation, or assurance services. Consult a tax <br/>preparer for tax advice related to the preparation of your tax return.</h5>
        </div>
        
        

    </div>
    
  )
}

export default Thirdpage





// import React, { useState } from 'react';
// import side from "./thirdpage.module.css";
// import { AiOutlineHome } from 'react-icons/ai';
// import { IoMdDesktop } from 'react-icons/io';
// import { AiOutlineGlobal} from 'react-icons/ai';
// import { MdArchitecture } from 'react-icons/md';
// import { AiOutlineTeam } from 'react-icons/ai';
// import { AiOutlineSearch } from 'react-icons/ai';
// import {FaBars}from "react-icons/fa";
// import {HiOutlineDocumentDuplicate}from "react-icons/hi";
// import {BiLogOut}from "react-icons/bi";
// import {BiArrowBack}from "react-icons/bi";
// import { NavLink } from 'react-router-dom';


// const Thirdpage = ({children}) => {
//     const[isOpen ,setIsOpen] = useState(false);
//     const toggle = () => setIsOpen (!isOpen);
//     const menuItem=[
//         {
//             path:"/",
//             name:"Home",
//             icon:<AiOutlineHome/>
//         },
        
//         {
//             path:"/analytics",
//             name:"Analytics",
//             icon:<IoMdDesktop/>
//         },
//         {
//             path:"/digital",
//             name:"Digitalcore ▾",
//             icon:<AiOutlineGlobal/>
//         },
//         {
//             path:"/architecture",
//             name:"Architecture ▾",
//             icon:<MdArchitecture/>
//         },
        
//         {
//             path:"/documentation",
//             name:"Documentation",
//             icon:<HiOutlineDocumentDuplicate/>
//         },
//         {
//             path:"/team",
//             name:"Team",
//             icon:<AiOutlineTeam/>
//         },
//         {
//             path:"/search",
//             name:"Search",
//             icon:<AiOutlineSearch/>
//         },
//         {
//             path:"/search",
//             name:"Log Out",
//             icon:<BiLogOut/>
//         },
//         {
//             path:"/search",
//             name:"Back",
//             icon:<BiArrowBack/>
//         }
//     ]
//     return (
        
//         <>
//         <div className={side.container}>
//            <div style={{width: isOpen ? "200px" : "50px"}} className={side.sidebar}>
//                <div className={side.top_section}>
//                    <h1 style={{display: isOpen ? "block" : "none"}} className={side.logo}>DEMO</h1>
//                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className={side.bars}>
//                        <FaBars onClick={toggle}/>
                       
//                    </div>
//                </div>
//                {
//                    menuItem.map((item, index)=>(
//                        <NavLink to={item.path} key={index} className={side.link} activeclassName={side.active}>
//                            <div className={side.icon}>{item.icon}</div>
                           
//                            <div style={{display: isOpen ? "block" : "none"}} className={side.link_text}>{item.name}</div>
//                        </NavLink>
//                    ))
//                }
//            </div>
//            <main>{children}</main>
//         </div>
//         </>
//     );
// };

// export default Thirdpage;