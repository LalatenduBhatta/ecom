import React from 'react'
import HeroSection from './HeroSection'
import Service from './Service'
import Truseted from './Truseted'
import FetureProduct from './FetureProduct'
import Wrapper from './CommonTemplate/Wrapper'


function Home() {
  return (
    <>
      <Wrapper>
        <HeroSection />
        <FetureProduct />
        <Service />
        <Truseted />
      </Wrapper>


    </>

  )
}

export default Home