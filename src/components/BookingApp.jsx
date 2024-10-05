// import React, { useState, useEffect } from 'react';

// const BookingApp = () => {
//   const [rooms, setRooms] = useState([]);
//   const [filteredRooms, setFilteredRooms] = useState([]);
//   const [checkin, setCheckin] = useState('');
//   const [checkout, setCheckout] = useState('');
//   const [modalRoom, setModalRoom] = useState(null);
//   const [form, setForm] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     guests: '',
//     checkinDate: '',
//     checkoutDate: '',
//   });
//   const [isPaymentDisabled, setIsPaymentDisabled] = useState(true);

//   const allRooms = [
//     { number: 1, status: 'booked', img: 'vip-room1.jpg', price: 100 },
//     { number: 2, status: 'booked', img: 'vip-room.jpg', price: 200 },
//     { number: 3, status: 'booked', img: 'vip-room.jpg', price: 150 },
//     { number: 4, status: 'booked', img: 'vip-room1.jpg', price: 100 },
//     { number: 5, status: 'available', img: 'general.jpeg', price: 100 },
//     { number: 6, status: 'available', img: 'general1.jpg', price: 90 },
//     { number: 7, status: 'available', img: 'general.jpeg', price: 100 },
//     { number: 8, status: 'available', img: 'general1.jpg', price: 120 },
//     { number: 9, status: 'reserved', img: 'suite-room.jpg', price: 130 },
//     { number: 10, status: 'reserved', img: 'suite-room1.jpg', price: 100 },
//   ];

//   useEffect(() => {
//     setRooms(allRooms);
//     setFilteredRooms(allRooms);
//   }, []);

//   const filterRooms = (status) => {
//     if (status === 'all') {
//       setFilteredRooms(allRooms);
//     } else {
//       setFilteredRooms(allRooms.filter((room) => room.status === status));
//     }

//     if (checkin && checkout) {
//       updateRoomAvailability(new Date(checkin), new Date(checkout), filteredRooms);
//     }
//   };

//   const handleFilterClick = (status) => {
//     filterRooms(status);
//   };

//   const updateRoomAvailability = (checkinDate, checkoutDate, filteredRooms) => {
//     // Functionality for room availability table (similar to the original)
//     // Use the 'filteredRooms' and 'checkinDate' & 'checkoutDate' to render availability data
//   };

//   const handleSearchRooms = () => {
//     const today = new Date();
//     const checkinDate = new Date(checkin);
//     const checkoutDate = new Date(checkout);

//     if (
//       checkinDate > today &&
//       checkinDate <= new Date(today.setDate(today.getDate() + 7)) &&
//       checkoutDate > checkinDate
//     ) {
//       updateRoomAvailability(checkinDate, checkoutDate, allRooms);
//       document.querySelector('.room-availability').style.display = 'block';
//     } else {
//       alert('Please select valid dates for next week.');
//     }
//   };

//   const openModal = (roomId) => {
//     setModalRoom(roomId);
//     document.getElementById('bookingModal').style.display = 'block';
//   };

//   const closeModal = () => {
//     document.getElementById('bookingModal').style.display = 'none';
//     setModalRoom(null);
//   };

//   const handleFormInput = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const validateForm = () => {
//     const { fullName, email, phone, guests, checkinDate, checkoutDate } = form;
//     const checkin = new Date(checkinDate);
//     const checkout = new Date(checkoutDate);
//     const today = new Date();

//     if (fullName && email && phone && guests && checkinDate && checkoutDate) {
//       if (checkin >= today) {
//         if (checkout > checkin) {
//           setIsPaymentDisabled(false);
//         } else {
//           alert('Check-out date must be after the check-in date.');
//           setIsPaymentDisabled(true);
//         }
//       } else {
//         alert('Check-in date cannot be before today.');
//         setIsPaymentDisabled(true);
//       }
//     } else {
//       setIsPaymentDisabled(true);
//     }
//   };

//   useEffect(() => {
//     validateForm();
//   }, [form]);

//   return (
//     <div>
//       <div id="room-cards">
//         {filteredRooms.map((room) => (
//           <div key={room.number} className={`room-card ${room.status}`}>
//             <img src={room.img} alt={`Room ${room.number}`} className="room-img" />
//             <h4>Room {room.number}</h4>
//             <p>Price: ${room.price}</p>
//             <p>
//               {room.status === 'available' && <span className="status available">Available</span>}
//               {room.status === 'booked' && <span className="status booked">Booked</span>}
//               {room.status === 'reserved' && (
//                 <span className="status reserved">Reserved &#128274;</span>
//               )}
//             </p>
//             <button
//               className="btn-book"
//               disabled={room.status !== 'available'}
//               onMouseOver={(e) => (e.target.style.backgroundColor = 'darkblue')}
//               onMouseOut={(e) => (e.target.style.backgroundColor = '')}
//               onClick={() => openModal(room.number)}
//             >
//               Book Now
//             </button>
//           </div>
//         ))}
//       </div>

//       <div className="room-availability" style={{ display: 'none' }} id="room-availability"></div>

//       <div id="bookingModal" style={{ display: 'none' }}>
//         <form id="bookingForm">
//           <input
//             type="text"
//             name="fullName"
//             value={form.fullName}
//             onChange={handleFormInput}
//             placeholder="Full Name"
//           />
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleFormInput}
//             placeholder="Email"
//           />
//           <input
//             type="text"
//             name="phone"
//             value={form.phone}
//             onChange={handleFormInput}
//             placeholder="Phone"
//           />
//           <input
//             type="number"
//             name="guests"
//             value={form.guests}
//             onChange={handleFormInput}
//             placeholder="Number of Guests"
//           />
//           <input
//             type="date"
//             name="checkinDate"
//             value={form.checkinDate}
//             onChange={handleFormInput}
//           />
//           <input
//             type="date"
//             name="checkoutDate"
//             value={form.checkoutDate}
//             onChange={handleFormInput}
//           />
//           <button id="paymentButton" disabled={isPaymentDisabled} onClick={() => alert('Redirecting to payment gateway')}>
//             Proceed to Payment
//           </button>
//         </form>
//         <button id="closeModal" onClick={closeModal}>
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BookingApp;




// // ..........................

// import React, { useState, useEffect } from 'react';
// import './BookingApp.css';
// const BookingApp = () => {
//   const allRooms = [
//     { number: 1, status: 'booked', img: 'vip-room1.jpg', price: 100 },
//     { number: 2, status: 'booked', img: 'vip-room.jpg', price: 200 },
//     { number: 3, status: 'booked', img: 'vip-room.jpg', price: 150 },
//     { number: 4, status: 'booked', img: 'vip-room1.jpg', price: 100 },
//     { number: 5, status: 'available', img: 'general.jpeg', price: 100 },
//     { number: 6, status: 'available', img: 'general1.jpg', price: 90 },
//     { number: 7, status: 'available', img: 'general.jpeg', price: 100 },
//     { number: 8, status: 'available', img: 'general1.jpg', price: 120 },
//     { number: 9, status: 'reserved', img: 'suite-room.jpg', price: 130 },
//     { number: 10, status: 'reserved', img: 'suite-room1.jpg', price: 100 }
//   ];

//   const [filteredRooms, setFilteredRooms] = useState(allRooms);
//   const [checkinDate, setCheckinDate] = useState('');
//   const [checkoutDate, setCheckoutDate] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedRoom, setSelectedRoom] = useState(null);
//   const [formValues, setFormValues] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     guests: '',
//     checkinDate: '',
//     checkoutDate: ''
//   });
//   const [isPaymentButtonEnabled, setPaymentButtonEnabled] = useState(false);

//   useEffect(() => {
//     if (checkinDate && checkoutDate) {
//       updateRoomAvailability(new Date(checkinDate), new Date(checkoutDate), filteredRooms);
//     }
//   }, [checkinDate, checkoutDate, filteredRooms]);

//   const handleFilterClick = (status) => {
//     setFilteredRooms(status === 'all' ? allRooms : allRooms.filter(room => room.status === status));
//   };

//   const renderRoomCards = () => {
//     return filteredRooms.map(room => (
//       <div key={room.number} className={`room-card ${room.status}`}>
//         <img src={room.img} alt={`Room ${room.number}`} className="room-img" />
//         <h4>Room {room.number}</h4>
//         <p>Price: ${room.price}</p>
//         <p>
//           {room.status === 'available' && <span className="status available">Available</span>}
//           {room.status === 'booked' && <span className="status booked">Booked</span>}
//           {room.status === 'reserved' && <span className="status reserved">Reserved &#128274;</span>}
//         </p>
//         <button
//           className="btn-book"
//           disabled={room.status !== 'available'}
//           onMouseOver={(e) => e.target.style.backgroundColor = 'darkblue'}
//           onMouseOut={(e) => e.target.style.backgroundColor = ''}
//           onClick={() => openModal(room)}
//         >
//           Book Now
//         </button>
//       </div>
//     ));
//   };

//   const updateRoomAvailability = (checkin, checkout, rooms) => {
//     renderRoomTable(rooms, checkin, checkout);
//   };

//   const renderRoomTable = (rooms, checkinDate, checkoutDate) => {
//     const dayCount = Math.ceil((checkoutDate - checkinDate) / (1000 * 60 * 60 * 24));
//     let availabilityHtml = `
//       <table>
//         <tr>
//           <th>Room Number</th>
//           <th colspan="7">Availability</th>
//         </tr>
//     `;
//     for (let i = 0; i < dayCount; i++) {
//       const currentDay = new Date(checkinDate);
//       currentDay.setDate(checkinDate.getDate() + i);
//       availabilityHtml += `<th>${currentDay.toLocaleString('en-US', { weekday: 'long' })}</th>`;
//     }
//     availabilityHtml += '</tr>';

//     rooms.forEach(room => {
//       availabilityHtml += `<tr><td>Room ${room.number}</td>`;
//       for (let i = 0; i < dayCount; i++) {
//         const currentDay = new Date(checkinDate);
//         currentDay.setDate(checkinDate.getDate() + i);
//         const statusSymbol = room.status === 'available'
//           ? `<span style="color: green;">●</span>`
//           : room.status === 'booked'
//             ? `<span style="color: red;">●</span>`
//             : '🔒';
//         availabilityHtml += `<td>${currentDay.toLocaleString('en-US', { weekday: 'long' })} ${statusSymbol}</td>`;
//       }
//       availabilityHtml += '</tr>';
//     });

//     document.getElementById('room-availability').innerHTML = availabilityHtml;
//   };

//   const openModal = (room) => {
//     setSelectedRoom(room);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const validateForm = () => {
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);

//     const checkin = new Date(formValues.checkinDate);
//     const checkout = new Date(formValues.checkoutDate);

//     if (formValues.fullName && formValues.email && formValues.phone && formValues.guests &&
//       checkin >= today && checkout > checkin) {
//       setPaymentButtonEnabled(true);
//     } else {
//       setPaymentButtonEnabled(false);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//     validateForm();
//   };

//   return (
//     <div>
//       <div id="room-cards">
//         {renderRoomCards()}
//       </div>

//       {isModalOpen && (
//         <div id="bookingModal">
//           <h2>Book Room {selectedRoom?.number}</h2>
//           <form id="bookingForm">
//             <input name="fullName" onChange={handleInputChange} placeholder="Full Name" />
//             <input name="email" onChange={handleInputChange} placeholder="Email" />
//             <input name="phone" onChange={handleInputChange} placeholder="Phone" />
//             <input name="guests" onChange={handleInputChange} placeholder="Number of Guests" />
//             <input name="checkinDate" onChange={handleInputChange} type="date" placeholder="Check-in Date" />
//             <input name="checkoutDate" onChange={handleInputChange} type="date" placeholder="Check-out Date" />
//             <button id="paymentButton" disabled={!isPaymentButtonEnabled}>
//               Proceed to Payment
//             </button>
//           </form>
//           <button onClick={closeModal}>Close</button>
//         </div>
//       )}

//       <div className="room-availability" style={{ display: checkinDate && checkoutDate ? 'block' : 'none' }}>
//         <div id="dates-display">
//           <p>Check-in Date: {checkinDate}</p>
//           <p>Check-out Date: {checkoutDate}</p>
//         </div>
//         <div id="room-availability"></div>
//       </div>
//     </div>
//   );
// };

// export default BookingApp;





// import React, { useState } from 'react';

// const BookingApp = () => {
//   const [rooms, setRooms] = useState([
//     { number: 1, status: 'booked', img: 'vip-room1.jpg', price: 100 },
//     { number: 2, status: 'booked', img: 'vip-room.jpg', price: 200 },
//     { number: 3, status: 'booked', img: 'vip-room.jpg', price: 150 },
//     { number: 4, status: 'booked', img: 'vip-room1.jpg', price: 100 },
//     { number: 5, status: 'available', img: 'general.jpeg', price: 100 },
//     { number: 6, status: 'available', img: 'general1.jpg', price: 90 },
//     { number: 7, status: 'available', img: 'general.jpeg', price: 100 },
//     { number: 8, status: 'available', img: 'general1.jpg', price: 120 },
//     { number: 9, status: 'reserved', img: 'suite-room.jpg', price: 130 },
//     { number: 10, status: 'reserved', img: 'suite-room1.jpg', price: 100 }
//   ]);

//   const [checkinDate, setCheckinDate] = useState('');
//   const [checkoutDate, setCheckoutDate] = useState('');
//   const [filteredRooms, setFilteredRooms] = useState(rooms);

//   const handleSearch = () => {
//     const checkin = new Date(checkinDate);
//     const checkout = new Date(checkoutDate);
//     const today = new Date();

//     if (checkin > today && checkout > checkin) {
//       // Filtering the rooms based on dates
//       const availableRooms = rooms.filter(room => room.status !== 'booked');
//       setFilteredRooms(availableRooms);
//       renderRoomTable(availableRooms, checkin, checkout);
//     } else {
//       alert('Please enter valid check-in and check-out dates.');
//     }
//   };

//   const renderRoomTable = (rooms, checkinDate, checkoutDate) => {
//     let availabilityHtml = `
//       <table>
//         <thead>
//           <tr>
//             <th>Room Number</th>
//             <th colspan="7">Availability</th>
//           </tr>
//         </thead>
//         <tbody>
//     `;

//     const dayCount = Math.ceil((checkoutDate - checkinDate) / (1000 * 60 * 60 * 24));

//     // Day-wise column headers
//     availabilityHtml += '<tr><td></td>';
//     for (let i = 0; i < dayCount; i++) {
//       const currentDay = new Date(checkinDate);
//       currentDay.setDate(checkinDate.getDate() + i);
//       availabilityHtml += `<td>${currentDay.toLocaleString('en-US', { weekday: 'short' })}</td>`;
//     }
//     availabilityHtml += '</tr>';

//     rooms.forEach(room => {
//       availabilityHtml += `<tr><td>Room ${room.number}</td>`;
//       for (let i = 0; i < dayCount; i++) {
//         let statusSymbol = '';

//         // Show room status day-wise
//         if (room.status === 'available') {
//           statusSymbol = '<span class="status-dot available"></span>'; // Green dot
//         } else if (room.status === 'booked') {
//           statusSymbol = '<span class="status-dot booked"></span>'; // Red dot
//         } else if (room.status === 'reserved') {
//           statusSymbol = '<span class="status-dot reserved">🔒</span>'; // Lock emoji
//         }

//         availabilityHtml += `<td>${statusSymbol}</td>`;
//       }
//       availabilityHtml += '</tr>';
//     });

//     availabilityHtml += '</tbody></table>';
//     document.getElementById('room-availability').innerHTML = availabilityHtml;
//   };

//   return (
//     <div className="container">
//       <h1>Room Booking</h1>

//       <div className="search-box">
//         <label>Check-in Date:</label>
//         <input
//           type="date"
//           value={checkinDate}
//           onChange={e => setCheckinDate(e.target.value)}
//         />

//         <label>Check-out Date:</label>
//         <input
//           type="date"
//           value={checkoutDate}
//           onChange={e => setCheckoutDate(e.target.value)}
//         />

//         <button onClick={handleSearch}>Search Rooms</button>
//       </div>

//       <div id="room-availability" className="room-availability"></div>
//     </div>
//   );
// };

// export default BookingApp;






// // ...

// import React, { useState, useEffect } from "react";
// import './BookingApp.css'
// const BookingApp = () => {

//   const allRooms = [
//     { number: 1, status: 'booked', img: './images/download (1).jpeg', price: 100 },
//     { number: 2, status: 'booked', img: './images/download (1).jpeg', price: 200 },
//     { number: 3, status: 'booked', img: './images/download (1).jpeg', price: 150 },
//     { number: 4, status: 'booked', img: './images/download (1).jpeg', price: 100 },
//     { number: 5, status: 'available', img: './images/download (1).jpeg', price: 100 },
//     { number: 6, status: 'available', img: './images/download (1).jpeg', price: 90 },
//     { number: 7, status: 'available', img: './images/download (1).jpeg', price: 100 },
//     { number: 8, status: 'available', img: './images/download (1).jpeg', price: 120 },
//     { number: 9, status: 'reserved', img: './images/download (1).jpeg', price: 130 },
//     { number: 10, status: 'reserved', img: './images/download (1).jpeg', price: 100 }
//   ];

//   // const [rooms, setRooms] = useState(allRooms);
//   const [filteredRooms, setFilteredRooms] = useState(allRooms);
//   const [checkinDate, setCheckinDate] = useState("");
//   const [checkoutDate, setCheckoutDate] = useState("");
//   const [showAvailability, setShowAvailability] = useState(false);

//   useEffect(() => {
//     if (checkinDate && checkoutDate) {
//       setShowAvailability(true);
//     } else {
//       setShowAvailability(false);
//     }
//   }, [checkinDate, checkoutDate]);

//   const filterRooms = (status) => {
//     if (status === "all") {
//       setFilteredRooms(allRooms);
//     } else {
//       setFilteredRooms(allRooms.filter((room) => room.status === status));
//     }
//   };

//   const renderRoomCards = (rooms) => {
//     return rooms.map((room) => (
//       <div className={`room-card ${room.status}`} key={room.number}>
//         <img src={room.img} alt={`Room ${room.number}`} className="room-img" />
//         <h4>Room {room.number}</h4>
//         <p>Price: ${room.price}</p>
//         <p>
//           {room.status === "available" && (
//             <span className="status available">Available</span>
//           )}
//           {room.status === "booked" && (
//             <span className="status booked">Booked</span>
//           )}
//           {room.status === "reserved" && (
//             <span className="status reserved">Reserved &#128274;</span>
//           )}
//         </p>
//         <button
//           className="btn-book"
//           disabled={room.status !== "available"}
//           // onClick={() => openModal(room.number)}
//         >
//           Book Now
//         </button>
//       </div>
//     ));
//   };

//   const renderRoomTable = (rooms, checkinDate, checkoutDate) => {
//     const start = new Date(checkinDate);
//     const end = new Date(checkoutDate);
//     const dayCount = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

//     let availabilityHtml = (
//       <table>
//         <thead>
//           <tr>
//             <th>Room Number</th>
//             {[...Array(dayCount)].map((_, i) => {
//               const currentDay = new Date(start);
//               currentDay.setDate(start.getDate() + i);
//               return (
//                 <th key={i}>
//                   {currentDay.toLocaleString("en-US", {
//                     weekday: "long",
//                     day: "numeric",
//                   })}
//                 </th>
//               );
//             })}
//           </tr>
//         </thead>
//         <tbody>
//           {rooms.map((room) => (
//             <tr key={room.number}>
//               <td>Room {room.number}</td>
//               {[...Array(dayCount)].map((_, i) => {
//                 const currentDay = new Date(start);
//                 currentDay.setDate(start.getDate() + i);
//                 let statusSymbol = "";

//                 if (room.status === "available") {
//                   statusSymbol = (
//                     <span style={{ color: "green" }}>●</span>
//                   ); // Green dot
//                 } else if (room.status === "booked") {
//                   statusSymbol = (
//                     <span style={{ color: "red" }}>●</span>
//                   ); // Red dot
//                 } else if (room.status === "reserved") {
//                   statusSymbol = "🔒"; // Lock icon
//                 }

//                 return <td key={i}>{statusSymbol}</td>;
//               })}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );

//     return availabilityHtml;
//   };

//   const handleSearchRooms = () => {
//     const today = new Date();
//     const checkin = new Date(checkinDate);
//     const checkout = new Date(checkoutDate);

//     if (
//       checkin > today &&
//       checkin <= new Date(today.setDate(today.getDate() + 7)) &&
//       checkout > checkin
//     ) {
//       setShowAvailability(true);
//     } else {
//       alert("Please select valid dates for next week.");
//       setShowAvailability(false);
//     }
//   };

//   return (
//     <div className="container">

//       <div className="room-availability">
//         <label htmlFor="checkin">Check-in Date:</label>
//         <input
//           type="date"
//           id="checkin"
//           value={checkinDate}
//           onChange={(e) => setCheckinDate(e.target.value)}
//         />
//         <label htmlFor="checkout">Check-out Date:</label>
//         <input
//           type="date"
//           id="checkout"
//           value={checkoutDate}
//           onChange={(e) => setCheckoutDate(e.target.value)}
//         />
//         <button onClick={handleSearchRooms}>Search Rooms</button>
//       </div>

//       {showAvailability && (
//         <div id="room-availability">
//           {renderRoomTable(filteredRooms, checkinDate, checkoutDate)}
//         </div>
//       )}

//       <div id="dates-display">
//         {checkinDate && <p>Check-in Date: {new Date(checkinDate).toLocaleDateString()}</p>}
//         {checkoutDate && <p>Check-out Date: {new Date(checkoutDate).toLocaleDateString()}</p>}
//       </div>
//       <div id="room-cards">{renderRoomCards(filteredRooms)}</div>

//     </div>
//   );
// };

// export default BookingApp;





//.....
import React, { useState,  useEffect } from "react";
// import React from "react";
// import { useNavigate } from "react-router-dom";
import './BookingApp.css'

const BookingApp = () => {

  const allRooms = [
    { number: 1, status: 'booked', img: './images/download (1).jpeg', price: 100 },
    { number: 2, status: 'booked', img: './images/download (1).jpeg', price: 200 },
    { number: 3, status: 'booked', img: './images/download (1).jpeg', price: 150 },
    { number: 4, status: 'booked', img: './images/download (1).jpeg', price: 100 },
    { number: 5, status: 'available', img: './images/download (1).jpeg', price: 100 },
    { number: 6, status: 'available', img: './images/download (1).jpeg', price: 90 },
    { number: 7, status: 'available', img: './images/download (1).jpeg', price: 100 },
    { number: 8, status: 'available', img: './images/download (1).jpeg', price: 120 },
    { number: 9, status: 'reserved', img: './images/download (1).jpeg', price: 130 },
    { number: 10, status: 'reserved', img: './images/download (1).jpeg', price: 100 }
  ];

  const [checkinDate, setCheckinDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");
  const [showAvailability, setShowAvailability] = useState(false);

  useEffect(() => {
    if (checkinDate && checkoutDate) {
      setShowAvailability(true);
    } else {
      setShowAvailability(false);
    }
  }, [checkinDate, checkoutDate]);

  const renderRoomTable = (rooms, checkinDate, checkoutDate) => {
    const start = new Date(checkinDate);
    const end = new Date(checkoutDate);
    const dayCount = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

    let availabilityHtml = (
      <table>
        <thead>
          <tr>
            <th>Room Number</th>
            {[...Array(dayCount)].map((_, i) => {
              const currentDay = new Date(start);
              currentDay.setDate(start.getDate() + i);
              return (
                <th key={i}>
                  {currentDay.toLocaleString("en-US", {
                    weekday: "long",
                    day: "numeric",
                  })}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room.number}>
              <td>Room {room.number}</td>
              {[...Array(dayCount)].map((_, i) => {
                const currentDay = new Date(start);
                currentDay.setDate(start.getDate() + i);
                let statusSymbol = "";

                if (room.status === "available") {
                  statusSymbol = (
                    <span style={{ color: "green" }}>●</span>
                  ); // Green dot
                } else if (room.status === "booked") {
                  statusSymbol = (
                    <span style={{ color: "red" }}>●</span>
                  ); // Red dot
                } else if (room.status === "reserved") {
                  statusSymbol = "🔒"; // Lock icon
                }

                return <td key={i}>{statusSymbol}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    );

    return availabilityHtml;
  };

  const handleSearchRooms = () => {
    const today = new Date();
    const checkin = new Date(checkinDate);
    const checkout = new Date(checkoutDate);

    if (
      checkin > today &&
      checkin <= new Date(today.setDate(today.getDate() + 7)) &&
      checkout > checkin
    ) {
      setShowAvailability(true);
    } else {
      alert("Please select valid dates for next week.");
      setShowAvailability(false);
    }
  };

  return (
    <div className="container">
      <div className="room-availability">
        <label id="check" htmlFor="checkin">Check-in Date:</label>
        <input
          type="date"
          id="checkin"
          value={checkinDate}
          onChange={(e) => setCheckinDate(e.target.value)}
        />
        <label id="check" htmlFor="checkout">Check-out Date:</label>
        <input
          type="date"
          id="checkout"
          value={checkoutDate}
          onChange={(e) => setCheckoutDate(e.target.value)}
        />
        <button id="bt1" onClick={handleSearchRooms}>Search Rooms</button>
      </div>

      {showAvailability && (
        <div id="room-availability">
          {renderRoomTable(allRooms, checkinDate, checkoutDate)}
        </div>
      )}

      <div id="dates-display">
        {checkinDate && <p>Check-in Date: {new Date(checkinDate).toLocaleDateString()}</p>}
        {checkoutDate && <p>Check-out Date: {new Date(checkoutDate).toLocaleDateString()}</p>}
      </div>
    </div>
  );
};

export default BookingApp;
