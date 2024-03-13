import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from 'react-bootstrap'
import WeatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationsImg from '../assets/images/customization.png'

const servicesData=[
    {
        imgUrl: WeatherImg,
        title: 'Calculate Weather',
        description: 'We provide you with most accurate weather forecast for your trip.',
    },
    {
        imgUrl: guideImg,
        title: 'Best Tour Guides',
        description: 'We provide you with the best guides for your trip.',
    },
    {
        imgUrl: customizationsImg,
        title: 'Customization',
        description: 'We provide you with the best customizations for your trip.',
    },
]


const ServiceList = () => {
  return <>
    {
        servicesData.map((item, index) => (
          <Col key={index} lg='3' md='6' sm='12' className='mb-4'>
            <ServiceCard item={item} />
          </Col>
        ))
    }

  </>
}

export default ServiceList