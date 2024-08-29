import { useState, useEffect } from "react";
import "../Cssfiles/otp.css";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
export default function OneTimePassword() {

    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state.email;
    const [otpValues, setOtpValues] = useState(["", "", "", ""]);
    const [otpError, setOtpError] = useState(null);
    const [serverotp,setserverOtp]=useState("");

    useEffect(()=>{
        async function getOtp(){
            try{
                const response = await axios.post('http://localhost:6969/otp',{
                    email:email
            });
            console.log(response);
            setserverOtp(response.data.otp);
        }
        catch(err)
        {
            console.log(err);
        }
    }
        getOtp();
    },[email]);
    useEffect(() => {
        console.log(`Server OTP: ${serverotp}`); // Log the server OTP when it changes
      }, [serverotp]); 
    async function submit(e){
        e.preventDefault();
    try {
        const userOtp = otpValues.join("");
        console.log(userOtp);
        console.log(serverotp);
        if (userOtp === serverotp) {
          // OTP matches, login successful
          alert("User logged in");
            navigate('/',{state:{email:email}});
          // navigate to next page or perform login action
        } else {
          setOtpError('Invalid OTP');
        }}
        catch(error){
            console.log(error);
        }
    }
    const handleOtpChange = (index) => (e) => {
        const newOtpValues = [...otpValues];
        newOtpValues[index] = e.target.value;
        setOtpValues(newOtpValues);
        if (e.target.value.length === 1) {
            const nextIndex = index + 1;
            if (nextIndex < otpValues.length) {
              document.querySelectorAll("input")[nextIndex].focus();
            }
          }
        else if(e.target.value.length===0)
        {
            const prevIndex = index-1;
            if(prevIndex>=0)
            {
                document.querySelectorAll("input")[prevIndex].focus();
            }
        }
        
    };
  return (
    <div className="xyz">
      <h1>Enter Otp</h1>
      <div className="Otp_main_div">
        {otpValues.map((value, index) => (
          <div key={index} className="Opt_box">
            <input
              type="text"
              maxLength="1"
              value={value}
              onChange={handleOtpChange(index)}
            />
          </div>
        ))}
      </div>
      {otpError &&<div style={{color:'red'}}>{otpError}</div>}
      <button onClick={submit}>Submit</button>
    </div>
  );
}