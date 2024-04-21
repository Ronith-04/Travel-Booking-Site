import React,{useState,useContext} from 'react'
import './booking.css'
import {Form, FormGroup, ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import {BASE_URL} from '../../Utils/config';

const Booking = ({tour, avgRating}) => {
  const {price, reviews,title}=tour;
  const navigate=useNavigate();
  const {user}=useContext(AuthContext);
  // console.log(user)
  const [booking,setBooking]=useState({
    userId:user && user._id,
    userEmail:user && user.email,
    tourName:title,
    fullName:'',
    phone:'',
    guestSize:1,
    bookAt:''
  })
  // const maxsize=maxGroupSize
  const handleChange=e=>{
    setBooking(prev=>({
      ...prev,
      [e.target.id]:e.target.value
    }))
  }

  const serviceFee=10
  const totalAmount=Number(price)*Number(booking.guestSize)+Number(serviceFee)
  const handleClick= async e=>{
    e.preventDefault();
    // console.log(booking)
    try{
      if(!user || user===undefined || user===null){
        alert("Please Sign-in")
      }
      else{
        const res=await fetch(`${BASE_URL}/booking`,{
          method:'post',
          headers:{
            "content-type":"application/json"
          },
          credentials:'include',
          body:JSON.stringify(booking),
        })
        const result=await res.json();
        const existingBookingData = localStorage.getItem("booking");

        // Parse the existing data if it exists, or initialize to an empty array
        let bookingData = existingBookingData ? JSON.parse(existingBookingData) : [];
        
        // Assuming result.data is the new data you want to append
        bookingData.push(result.data);
        
        // Convert the updated array back to a JSON string
        const updatedBookingData = JSON.stringify(bookingData);
        
        // Store the updated booking data back into local storage
        localStorage.setItem("booking", updatedBookingData);
        if (res.ok){
          navigate("/thank-you")
        }else{
          return alert(result.message)
        }
      }
      
    }catch(error){
      alert(error.message)
    }

  }
  return <div className="booking">
    <div className="booking__top d-flex align-items-center justify-content-between">
      <h3>${price}<span>/ per person</span></h3>
      <span className="tour__rating d-flex align-items-center">
        <i class="ri-star-fill"></i>{avgRating===0 ? null :  avgRating}  ({reviews?.length})          
      </span>
    </div>
    {/*----------booking form----------*/}
    <div className="booking__form">
      <h5>Information</h5>
      <Form className="booking__info-form" onSubmit={handleClick}>
        <FormGroup>
          <input 
          type="text" 
          placeholder="Full Name" 
          id="fullName" required 
          onChange={handleChange} />
        </FormGroup><br/>
        <FormGroup>
          <input 
          type="number" 
          placeholder="Phone" 
          id="phone" required 
          onChange={handleChange} />
        </FormGroup><br/>
        <FormGroup>
          <input 
          type="email" 
          placeholder="email" 
          id="userEmail" required 
          onChange={handleChange} />
        </FormGroup><br/>
        <FormGroup className='d-flex align-items-center gap-3'>
          <input 
          type="date" 
          placeholder="Book On" 
          id="bookAt" required 
          onChange={handleChange} />
          <input 
          type="number" 
          placeholder="GuestSize" 
          id="guestSize" required 
          onChange={handleChange} />
        </FormGroup>
      </Form>
    </div>

    {/*----------booking bottom----------*/}
    <div className="booking__bottom">
      <ListGroup>
        <ListGroupItem className="border-0 px-0 list">
          <h5 className="d-flex align-items-center gap-1">${price} <i class="ri-close-line"></i> {booking.guestSize} person</h5>
          <span>${price}</span>
        </ListGroupItem>
        <ListGroupItem className="border-0 px-0 list">
          <h5>Service charges</h5>
          <span>${serviceFee}</span>
        </ListGroupItem>
        <ListGroupItem className="border-0 px-0 total list">
          <h5>Total</h5>
          <span>${totalAmount}</span>
        </ListGroupItem>
      </ListGroup>
      <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
        Book Now
      </Button>
    </div>

  </div>
}

export default Booking