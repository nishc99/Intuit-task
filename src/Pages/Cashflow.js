import React from 'react';
import cashflow from "./cashflow.module.css";
import Graphy from './Graphy';
import {CiBag1} from 'react-icons/ci';

import Top from './Top';


const Cashflow = () => {
  return (
    <>
        <section>
            <Top/>
        </section>
        <section className={cashflow.cashflowCon}>
            <div className={cashflow.titlecf}>
                <div><h1 style={{paddingLeft:"50px"}} >Cash flow</h1></div>
                <div className={cashflow.buttoncon}> 
                    <button className={cashflow.sendMoney}>Get or Send Money</button>
                        <button className={cashflow.feedbackbtn}> Give feedback</button>
                </div>
            </div>
            
        <div className={cashflow.buttonCon}>

            <div className={cashflow.accountDetails}>
                <h6 style={{color:"black",paddingLeft:"20px"}} >ALL ACOUNTS</h6>
                <p style={{color:"black",paddingLeft:"20px",fontWeight:"bold",marginTop:"-10px",fontSize:"22px"}} >$26,107.15</p>
                <p style={{color:"gray",paddingLeft:"20px",marginTop:"-15px",fontSize:"12px"}} >Today's cash balance</p>

                <div className={cashflow.quickbooks}>
                    <h4 style={{paddingLeft:"20px"}} >QUICKBOOKS CHECKING ^</h4>
                    <h4 className={cashflow.quickbooks1}>$0.00</h4>
                </div>
                <div className={cashflow.quickbooks}>
                    <h4 style={{paddingLeft:"20px"}}>BANK ACCOUNTS</h4>
                    <h4 className={cashflow.quickbooks1}>$0.00</h4>
                </div>
                <div className={cashflow.quickbooks}>
                    <h4 style={{paddingLeft:"20px"}}>LOANS ^</h4>
                    <h4 className={cashflow.quickbooks1}>$0.00</h4>
                </div>
                <div className={cashflow.prequalified}>
                    <div className={cashflow.bag}><CiBag1 size={20}/></div>
                    <div > 
                        <div style={{display:"inline-flex"}}>
                        <p style={{fontSize:"12px",width:"140px"}} >Quickbooks Capital</p>
                        <p style={{fontSize:"9px",color:"white",backgroundColor:"blue",width:"90px",textAlign:"center",marginLeft:"-30px"}}>PRE-QUALIFIED</p> 
                        </div>
                      <br />  <p style={{fontSize:"12px",color:"silver",marginTop:"-10px"}}>$20,000 or more available</p>
                    </div>
                    <div> <p style={{fontSize:"14px",color:"rgb(42, 170, 239)",fontWeight:"bold",width:"100px",marginLeft:"25px"}}>Apply</p> </div>
                </div>
            </div>




            <div className={cashflow.graphCon}>
                <div className={cashflow.gtop}>
                    <div className={cashflow.forecast}>
                        <h5 style={{paddingLeft:"30px",width:"200px"}}>Forecast <span style={{color:"rgb(42, 170, 239)",width:"140px"}} >Make changes</span></h5>
                    </div>
                    <div className={cashflow.moneycash}>
                    <button className={cashflow.moneybtn}> Money in/out</button>
                    <button className={cashflow.cashbtn}> Cash Balance</button>
                    </div>
                </div>

                <div className={cashflow.graph} style={{marginTop:"10%"}}>
                    <Graphy/>
                </div>
            </div>
        </div>    

        </section>
    </>
  )
}

export default Cashflow;