import React from 'react'

function Card() {
  return (
    <div>
        <form>
            <div style={{
                width:"25%" ,
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", 
                padding:"20px 30px",
                margin:"auto" ,
                marginTop:"50px",
                borderRadius:"10px",
                paddingBottom:"50px",
                }}>
                <h2 style={{textAlign:"center", color:"blue"}}>Enter Card details</h2>
                <div style={{display:"grid"}}>
                   <lable style={{fontSize:"14px"}}>Card Number</lable>
                   <input type="number" style={{padding:"10px", marginTop:"5px",border:"1px solid lightgray"}} required/>
                </div>

                <div style={{display:"grid" , marginTop:"15px"}}>
                  <lable style={{fontSize:"14px"}}>Card Holder Name</lable>
                  <input type="text" style={{padding:"10px", marginTop:"5px",border:"1px solid lightgray"}} required/> 
                </div>

                <div style={{display:"grid" , marginTop:"15px"}}>
                  <lable style={{fontSize:"14px"}}>Expiry date</lable>
                  <input type="month" style={{padding:"10px", marginTop:"5px" ,border:"1px solid lightgray"}} required/> 
                </div> 

                <div style={{display:"grid", }}>
                    <div style={{ marginTop:"15px", marginBottom:"-5px"}}>
                       <lable style={{fontSize:"14px",}}>CVV</lable>
                    </div> 
                    <div style={{display:"flex", alignItems:"center",}}>
                    <input style={{padding:"10px" ,border:"1px solid gray" ,border:"1px solid lightgray" }} required/> 
                        <img style={{
                            width:"60px"
                        }} 
                        src="https://www.shutterstock.com/image-illustration/debit-card-isolated-on-white-260nw-542784994.jpg" alt="card"/>
                        <p style={{fontSize:"12px"}}>3 digits printed on the back of the card</p>
                    </div>
                </div> 

                <div style={{display:"flex", alignItem:"center"}}>
                    <input type="checkbox" required />
                    <p>I agree to Terms and Conditions.</p>
                </div>
                <div style={{
                    marginTop:"20px",
                    textAlign:"center",
                }}>
                    <input style={{
                       padding:"10px 100px",
                       color:"blue",
                       backgroundColor:"skyblue",
                       border:"none",
                       fontWeight:"bold",
                       fontSize:"18px"
                  }} type="submit"/>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Card