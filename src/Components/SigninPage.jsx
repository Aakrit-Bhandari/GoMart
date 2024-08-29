import "../Cssfiles/SigninPage.css"
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
export default function SigninPage()
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [number, setNumber] = useState('');
    const navigate = useNavigate();
    async function submit(e) {
        e.preventDefault();
        try {
            await axios.post('http://localhost:6969/signin', {
                email, password, number
            })
            .then(res => {
                navigate('/otp',{state:{email:email}});
            })
            .catch(er => {
                alert('Wrong details');
                console.log(er);
            });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <section className="Signin_box">
            <div className="Signin_image_box">
                {/* <img src={img1} alt="signin_image" /> */}
            </div>
            <form onSubmit={submit}>
                <div className="Signin_content_box">
                    <h1>GO <span>Mart</span></h1>
                    <div className="Sign_filling_form">
                        <label><input onChange={(e) => { setEmail(e.target.value) }} placeholder='EMAIL' /></label><br />
                        <label><input onChange={(e) => { setNumber(e.target.value) }} placeholder='NUMBER' /></label><br />
                        <label><input onChange={(e) => { setPassword(e.target.value) }} placeholder='PASSWORD' /></label>
                        <p className="Sign_para">By continuing, you are agreeing to our terms and conditions</p>
                        <button type="submit">Signin</button>
                    </div>
                    <div className="Sign_Third_Party">
                        {/* <button><img src={img2} alt="Google icon" /> Login with Google</button> */}
                    </div>
                </div>
            </form>
        </section>
    );
}