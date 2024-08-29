import { Link, useLocation } from "react-router-dom";
import "../Cssfiles/Navbar.css";
import { useState, useEffect } from "react";
import axios from "axios";
import img1 from "../images/GoMart.jpg";

export default function Navbar() {
  const [locate, setLocate] = useState("Chandigarh 160001");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  async function getlocation(latitude, longitude) {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      const data = await response.json();
      const address = data.address;
      console.log(data);
      setLocate(`${address.road}, ${address.amenity}, ${address.country}`);
    } catch (error) {
      console.error("Error getting location:", error);
    }
  }
  function handleClick() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        getlocation(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  }
  const location = useLocation();
  const email = location.state && location.state.email;

  return (
    <section className="Main_Nav">
      <section className="Navbar_searching_section">
        <div className="Navbar_searching_logo">
          <img alt="userimg" src={img1} />
        </div>
        <div className="Navbar_searching_location">
          <button onClick={handleClick} className="Navbar_searching_location_button">
            Deliver to {locate}
          </button>
        </div>
        <div className="Navbar_searching_searchbar">
          <input type="text" placeholder="Search Item" />
        </div>
        <div className="Navbar_searching_kart">
            <Link className="linking Navbar_searching_kart_link" to="/cart">Cart</Link>
        </div>
        <div className="Navbar_Register">
          <nav className="Navbar_Register_nav">
            <ul className="Navbar_Register_nav_ul">
              {email ? (
                <Link className="navbar_buttons_email" to="/dashboard">
                  {email}
                </Link>
              ) : (
                <Link className="navbar__buttons__sign-in" to="/signin">
                  Sign In
                </Link>
              )}
            </ul>
          </nav>
        </div>
      </section>
      <section className="Navbar_main_div">
        <div className="Navbar_Pages">
          <nav className="Navbar_Pages_nav">
            <ul className="Navbar_Pages_nav_ul">
              <Link className="none" to="/">
                Home
              </Link>
              <Link className="none" to="/about">
                About Us
              </Link>
              <Link className="none" to="/">
                Expense Tracker
              </Link>
              <Link className="none">Features</Link>
              <Link className="none">Resource</Link>
              <Link className="none">Allocates</Link>
              <Link className="none">Contact Us</Link>
            </ul>
          </nav>
        </div>
      </section>
    </section>
  );
}