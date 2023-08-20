import Button from "../components/Button"
import {arrowRight} from '../assets/icons'
import { statistics } from "../constants";
import { bigShoe1 } from "../assets/images";

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
        <p className="text-xl font-montserrat text-coral-red">Our summer collections</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The new Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike Arrivals, quality
          comfort, and innovation for your active life
        </p>
        <Button label='Shop now' iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16 border-2 border-red-600">
          {
            statistics.map((item, index) => (
              <div key={item.label} >
                <p className="font-palanquin font-bold text-4xl">{item.value}</p>
                <p className="leading-7 font-montserrat text-slate-gray">{item.label}</p>
              </div>
          ))}
        </div>
      </div>
      <div>
        <img src={ bigShoe1 } alt="big-shoe" />
      </div>
    </section>
  )
}

export default Hero

