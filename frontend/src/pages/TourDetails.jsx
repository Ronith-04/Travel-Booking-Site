import React,{useEffect, useRef,useState, useContext} from "react";
import '../styles/tour-details.css';
import { Container, Row, Col,Form,ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
// import tourData from "../assets/data/tours";
import calculateAvgRating from "../Utils/AvgRtaing";
import avatar from '../assets/images/avatar.jpg';
import Booking from "../components/Booking/Booking";
import Newsletter from "../shared/Newsletter";
// import { BASE_URL } from "../../Utils/config";
import { BASE_URL } from "./../Utils/config";
// import useFetch from "../hooks/useFetch.js";
import { AuthContext } from "../context/AuthContext";
import axios from'axios'

const TourDetails = () => {
    const {id} = useParams();
    const reviewMsgRef=useRef('');
    const [tourRating,setTourRating]=useState(null);
    const [tour,setTour] = useState([]);
    const [review,setReviews]=useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {user}=useContext(AuthContext);

    /*this is an static data later we will call API to get the data from database*/
    useEffect(()=>{
        // console.log(1234)
        const getTour= async()=>{
            // console.log(1234)
            // const data = await axios.get(`${BASE_URL}/tours/${id}`);
            // console.log(1,data);
            // setTour(data.data.data)
            // setReview(data.data.data.reviews);
            try {
                const data = await axios.get(`${BASE_URL}/tours/${id}`);
                setTour(data.data.data);
                setReviews(data.data.data.reviews);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        getTour();
        window.scrollTo(0,0);
    },[])

    // const {data:tour}=axios.get(`${BASE_URL}/tours/${id}`)
    // .then(response => {
    //   const tour = response.data;
    //   console.log(0, tour);
    // })
    // .catch(error => {
    //   // Handle error
    //   console.error('Error fetching tour:', error);
    // });
    
    const {photo, title,description,price,city,distance,address,maxGroupSize}=tour;
    const {totalRating,avgRating}=calculateAvgRating(review);
    const options={day:'numeric',month:'long',year:'numeric'};

    const submitHandler=async e=>{
        e.preventDefault();
        const reviewText=reviewMsgRef.current.value;
        // alert(`${reviewText},${tourRating}`)
        try{
            if(!user || user===undefined || user===null){
                alert("Please Sign-in")
            }
            else{
                const reviewObj={
                    username:user?.username,
                    reviewText,
                    rating: tourRating
                }
                const res=await fetch(`${BASE_URL}/review/${id}`,{
                    method:"post",
                    headers:{
                        "content-type":"application/json"
                    },
                    credentials:"include",
                    body:JSON.stringify(reviewObj),
                })
                console.log(res)
                const result=await res.json();
                console.log(result)
                if(!res.ok){return alert(result.message)}
    
                alert(result.message)
                // console.log(result.message)
            }  
        }catch(error){
            alert(error.message)
        }
    }

    if (loading){
        return (
            <h4 className="text-center pt-5">Loading...</h4>
        )
    };
    if (error){
        return (
            <h4 className="text-center pt-5">{error}</h4>
        )
    } ;
    
    return (<>
    <section>
        <Container>
                {loading && <h4 className="text-center pt-5">Loading...</h4>}
                {error && <h4 className="text-center pt-5">{error}</h4>}
                {!loading && !error &&
                <Row>
                <Col lg='8'>
                    <div className="tour__content">
                        <img src={photo} alt="" />
                        <div className="tour__info">
                            <h2>{title}</h2>
                            <div className="d-flex align-items-center gap-5">
                                <span className="tour__rating d-flex align-items-center gap-1">
                                    <i class="ri-star-fill" style={{color:"var(--secondary-color)"}}></i>{avgRating===0?null:avgRating}
                 {totalRating===0 ?("Not Rated"):(
                                    <span>
                                        ({review.length})
                                    </span>
                                    )}
                                </span>
                                <span>
                                    <i class="ri-map-pin-user-fill"></i>{address}
                                </span>
                            </div>
                            <div className="tour__extra-details">
                                <span><i class="ri-map-pin-2-line"></i>{city}</span>
                                <span><i class="ri-money-dollar-circle-line"></i>{price}/ per person</span>
                                <span><i class="ri-pin-distance-line"></i>{distance} km</span>
                                <span><i class="ri-group-line"></i>{maxGroupSize} people</span>
                            </div>
                            <h5>Description</h5>
                            <p>{description}</p>
                        </div>

                        {/* ===========tours review========== */}
                        <div className="tour__reviews">
                            <h4>Reviews ({review?.length} reviews)
                            </h4>
                            <Form onSubmit={submitHandler}>
                                <div className="d-flex align-items-cente gap-3 mb-4 rating__group">
                                    <span onClick={()=>setTourRating(1)}>1<i class="ri-star-s-fill"></i></span>
                                    <span onClick={()=>setTourRating(2)}>2<i class="ri-star-s-fill"></i></span>
                                    <span onClick={()=>setTourRating(3)}>3<i class="ri-star-s-fill"></i></span>
                                    <span onClick={()=>setTourRating(4)}>4<i class="ri-star-s-fill"></i></span>
                                    <span onClick={()=>setTourRating(5)}>5<i class="ri-star-s-fill"></i></span>
                                </div>
                                <div className="review__input">
                                    <input type="text" ref={reviewMsgRef} placeholder="share your thoughts" required />
                                    <button className="btn primary__btn text-white" type="submit">
                                        Submit
                                    </button>
                                </div>
                            </Form>
                            <ListGroup className="user___reviews">
                                {
                                    review?.map((review)=>(
                                        <div className="review__item">
                                            <img src={avatar} alt="" />
                                            <div className="w-100">
                                                <div className="d-flex align-items-cenetr justify-content-between">
                                                    <div>
                                                        <h5>{review.username}</h5>
                                                        <p>
                                                            {new Date(review.createdAt).toLocaleDateString("en-US",options)}
                                                        </p>
                                                    </div>
                                                    <span className="d-flex align-items-center">
                                                        {review.rating}
                                                        < i class="ri-star-s-fill"></i>
                                                    </span>
                                                </div>
                                                <h6>{review.reviewText}</h6>
                                            </div>
                                        </div>
                                    ))
                                }
                            </ListGroup>
                        </div>
                    </div>
                </Col>
                <Col lg='4'>
                    <Booking tour={tour} avgRating={avgRating} />
                </Col>
            </Row>
            }
        </Container>    
    </section>
    <Newsletter/>
    </>)
}

export default TourDetails;