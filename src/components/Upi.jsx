import React from 'react'

function Upi() {
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
                   <lable style={{fontSize:"14px"}}>Enter Your Virtual Payment Address</lable>
                   <input type="number" style={{padding:"10px", marginTop:"5px",border:"1px solid lightgray"}} required/>
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

export default Upi