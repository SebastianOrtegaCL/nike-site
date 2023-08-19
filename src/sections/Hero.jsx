import Button from "../components/Button"
import {arrowRight} from '../assets/icons'
const Hero = () => {
  return (
    <section
     className="
     xl:padding-1 
     wide:padding-r 
     padding-b
     border-red-600 border-2
     w-full
     xl:flex-row
     flex-col
     justify-center
     min-h-screen
     gap-10
     max-container
     "
     id="home"
     >
      <div className="
      relative xl:w-2/5
      flex flex-col justify-center 
      items-start w-full
      max-xl:padding-x pt-28 ">
        <p>Our summer collections</p>
        <h1>
          <span>The new Arrival</span>
          <br />
          <span>Nike</span>
          Shoes
        </h1>
        <p>Discover stylish Nike Arrivals, quality
          comfort, and innovation for your active life
        </p>
        <Button label='Shop now' iconURL={arrowRight} />
      </div>
    </section>
  )
}

export default Hero

