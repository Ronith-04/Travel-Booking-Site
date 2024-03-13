import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { Link} from 'react-router-dom'
import './Tourcard.css'
import calculateAvgRating from '../Utils/AvgRtaing'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import TourDetails from '../pages/TourDetails';
// import TourCard from '../components/TourCard';

const TourCard = ({tour}) => {
    const {_id, title,city, photo, price,featured,reviews} = tour
    const {avgRating,totalRating} = calculateAvgRating(reviews)
    
  return <div className="tour__card">
    <Card>
        <div className="tour__img">
            <img src={photo} alt="tour-img" />
            {featured &&<span>Featured</span>}
        </div>


        <CardBody>
            <div className="card__top d-flex align-items-center justify-content-between">
                <span className="tour__location d-flex align-items-center gap-1">
                <i class="ri-map-pin-line"></i>{city}
                </span>
                <span className="tour__rating d-flex align-items-center gap-1">
                 <i class="ri-star-fill"></i>{avgRating===0?null:avgRating}
                 {totalRating===0 ?("Not Rated"):(
                        <span>
                            ({reviews.length})
                        </span>
                    
                 )}
                </span> 
            </div>
            <h5 className="tour__title">
                <Link to={`/Tour/${_id}`}>{title}</Link>
                {/* // Assuming you have something like this in your App component */}
                {/* <Router>
                    <Route path={`/tours/${id}`} component={TourDetails} />
                </Router> */}







            </h5>
            <div className="card__bottom d-flex align-items-center justofy-content-between mt-3">
                <h5>
                    ${price}<span>/per person</span>
                </h5>
                <button className="btn booking__btn">
                    <Link to={`/Tour/${_id}`}>Book Now</Link>
                </button>
             
            </div>
        </CardBody>
    </Card>
    
  </div>
}

export default TourCard