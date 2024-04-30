 
import HeroSection from './HeroSection'
import { useProductData } from '../context/product'

function About() {
  let x=useProductData()
  console.log(x);
  return (
    <> 
    
    <HeroSection name="E Commerce"/>
    </>
    
  )
}

export default About