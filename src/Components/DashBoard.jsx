import "../Cssfiles/DashBoard.css"
import img1 from "../images/logo.png"
export default function Dashboard()
{
    return(
        <section className="DashBoard_main_container">
            <div className="DashBoard_left">

                <div className="left_image">
                    <img alt="userimg" src={img1}/>
                </div>

                <div className="left_Userinfo">
                <h1>USer NAME</h1>
                <span>USername@gmail.com</span>
                </div>

                <div className="dashboard_box">Home</div>
                <div className="dashboard_box">About</div>
                <div className="dashboard_box">Contact</div>
                <div className="dashboard_box">help</div>
                <div className="dashboard_box">user</div>

                </div>

                <div className="DashBoard_center">
                    <h1>User DashBoard</h1>
                </div>
        </section>
    );
}