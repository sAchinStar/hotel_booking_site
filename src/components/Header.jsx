

// import React from "react";
// import { useNavigate} from 'react-router-dom';
// import '../App.css';
// // import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import BookingApp from "./BookingApp";
// function Main() {
// //   const [checkInDate, setCheckInDate] = useState(null);
// //   const [checkOutDate, setCheckOutDate] = useState(null);

// //   const handleSearch = () => {
// //     if (checkInDate && checkOutDate) {
// //       // Here you can perform the search or handle the data as needed
// //       console.log(`Searching for dates from ${checkInDate} to ${checkOutDate}`);
// //       alert(`Searching for available rooms from ${checkInDate.toLocaleDateString()} to ${checkOutDate.toLocaleDateString()}`);
// //     } else {
// //       alert("Please select both check-in and check-out dates.");
// //     }
// //   };

//   const navigator = useNavigate();

// //   function handleBook(){
// //     navigator("/loginpage")
// //   }

//   function handleBook(){
//     navigator("/signuppage")
//   }

//   return (
//     <div className="App">
//       {/* Navbar */}
//       <nav className="navbar">
//         <div className="logo">
//           <img src="/images/logo.png" alt="Hotel Logo" className="logo-img" />
//         </div>
//         <ul className="nav-links">
//           <li>Home</li>
//           <li>About</li>
//           <li>Services</li>
//           <li>Explore</li>
//           <li>Contact</li>
//           <li>
//             <a href="https://www.google.com/maps">Map</a>
//           </li>
//         </ul>
//         <button onClick={handleBook} className="book-now-btn">Book Now</button>
//       </nav>

//       {/* Hero Section */}
//       <section className="hero">
//         <div className="hero-content">
//           <h1>Welcome to Circuit House Dantewada <span className="highlight">Hotel</span>.</h1>
//           <p>Simple – Unique – Friendly</p>
//         </div>
//       </section>

      
//       <BookingApp/>
//     </div>
//     // <section>

//     // </section>
//   );
// }

// export default Main;













import React from "react";
import { useNavigate} from 'react-router-dom';
import '../App.css';
import "react-datepicker/dist/react-datepicker.css";
import { NavLink } from "react-router-dom";
// import BookingApp from "./BookingApp";
function Main() {
  const navigator = useNavigate();

  function handleBook(){
    navigator("/signuppage")
  }

//   function handleSlider(){
//     navigator("/slider")
//   }

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="/images/logo.png" alt="Hotel Logo" className="logo-img" />
        </div>
        <ul className="nav-links">
          <li>
          <NavLink to={"/"}>Home</NavLink>

          </li>
          <li>
            <NavLink to={"/aboutus"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/service"}>Services</NavLink>
          </li>
          <li>
            <NavLink to={"/slider"}>Explore</NavLink>
          </li>
          <li>
            <NavLink to={"/contactform"}>Contact</NavLink>
          </li>
          <li>
            <a href="https://www.google.com/maps">Map</a>
          </li>
        </ul>
        <button onClick={handleBook} className="book-now-btn">Book Now</button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Circuit House Dantewada <span className="highlight">Hotel</span> . . .</h1>
          <p> where comfort meets luxury. Your perfect stay starts with just a click. Discover your home away from home!"</p>
        </div>
      </section>

      
      {/* <BookingApp/> */}
    </div>
    
  );
}

export default Main;
