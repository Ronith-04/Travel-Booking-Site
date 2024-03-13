import React,{useRef} from 'react'
import './SearchBar.css'
import {Col, Form ,FormGroup} from 'react-bootstrap'
import { BASE_URL } from './../Utils/config'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
    const locationRef = useRef('')
    const distanceRef = useRef(0)
    const maxGroupSizeRef = useRef(0)
    const navigate= useNavigate()

    const searchHandler =  async () => {
        // e.preventDefault()
        const location = locationRef.current.value
        const distance = distanceRef.current.value
        const maxGroupSize = maxGroupSizeRef.current.value

        if (location===''|| distance ==='' || maxGroupSize ===''){
            return alert('All the fields are required!')
        }

        const res= await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`)
        console.log(res)
        if(!res.ok)alert('Something went wrong')
        const result= await res.json()
        navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
        {state: result.data})

    }



  return (
  <Col lg='12'>
    <div className="search__bar">
        <Form className='d-flex align-items-center gap-4'>
            <FormGroup className='d-flex gap-2 form__group form__group-fast'>
                <span><i class="ri-map-pin-line"></i></span>
                <div className="">
                    <h6>Location</h6>
                    <input type="text" placeholder='where are you going?' ref={locationRef} />
                </div>
            </FormGroup>
            <FormGroup className='d-flex gap-2 form__group form__group-fast'>
                <span><i class="ri-map-pin-time-line"></i></span>
                <div className="">
                    <h6>Distance</h6>
                    <input type="number" placeholder='Distance km' ref={distanceRef} />
                </div>
            </FormGroup>
            <FormGroup className='d-flex gap-2 form__group form__group-fast'>
                <span><i class="ri-group-line"></i></span>
                <div className="">
                    <h6>Max People</h6>
                    <input type="number" placeholder='where are you going?' ref={maxGroupSizeRef} />
                </div>
            </FormGroup>
            <span className="search__icon" type="submit" onClick={searchHandler}>
                <i class="ri-search-line"></i>
            </span>

        </Form>
    </div>
  </Col>
  )
}


export default SearchBar