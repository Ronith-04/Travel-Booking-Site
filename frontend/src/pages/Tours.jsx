import React,{useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import CommonSection from "../shared/CommonSection";
import "../styles/tours.css";
// import TourData from "../assets/data/tours";
import NewsLetter from "../shared/Newsletter";
import TourCard from "../shared/TourCard";
import SearchBar from "../shared/SearchBar";
// import UseFetch from "../hooks/UseFetch";
import { BASE_URL } from "./../Utils/config";
import useFetch from "../hooks/useFetch.js";

const Tours = () => {
    const [pageCount, setPageCount] = useState(0);
    const [page,setPage]=useState(0);
    const {data:tours,loading,error}=useFetch (`${BASE_URL}/tours?page=${page}&limit=4`);
    const {data:tourCount}=useFetch (`${BASE_URL}/tours/search/getTourCount`);

    useEffect(() => {
        const pages= Math.ceil(tourCount/8)
        /*later we will use backend data count*/ 
        setPageCount(pages);
        window.scrollTo(0,0);
    },[page,tourCount])

    return (
    <>
        <CommonSection title={"All Tours"} />
        <section>
            <Container>
                <Row>
                    <SearchBar />
                </Row>
            </Container>
        </section>
        <section className="pt-0">
            <Container>
                {loading && <h4 className="text-center pt-5">Loading...</h4>}
                {error && <h4 className="text-center pt-5">{error}</h4>}
                {
                    !loading && !error &&
                <Row>
                    {tours?.map((tour) => (
                        <Col key={tour._id} lg='3'md='6'sm='6' className="mb-4" >
                            <TourCard tour={tour} />
                        </Col>
                    ))}

                    <Col lg='12'>
                        <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                                    {[...Array(pageCount).keys()].map(number=>(
                                <span key={number} onClick={()=>setPage(number)} className={page===number?"active__page":""}>
                                    {number+1}
                                </span>
                            ))}
                            
                        </div>
                    </Col>
                </Row>
                }
            </Container>
        </section>
        <NewsLetter /> 
    </>
    )
}

export default Tours;