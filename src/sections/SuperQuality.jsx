import { shoe8 } from '../assets/images';
import Button from "../components/Button.jsx";
const SuperQuality = () => {
  return (
    <section className="padding flex justify-between items-center max-lg:flex-col gap-10 w-full max-container" id='about-us' >
        <div className='flex flex-1 flex-col'>
            <h2 className='
                font-palanquin
                text-4xl
                capitalize
                font-bold
                lg:max-w-lg
                '>
                We provide you <span className='text-coral-red'>Super </span>
                <span className='text-coral-red'>Quality</span> shoes
            </h2>
            <p className='
                mt-4
                font-monserrat
                text-slate-gray
                bg-green-200'>
                Discover footwear that transcends mere fashion, embodying craftsmanship at its finest. Each step you take in our shoes reflects our dedication to providing you with nothing but the best. Experience the luxury of unparalleled quality with every stride.
            </p>

            <div className='mt-11'>
                <Button label='View details'  />
            </div>
        </div>
        <div>
            <img alt='shoe-hero' src={shoe8} width={570} height={522}/>
        </div>
    </section>
  )
}

export default SuperQuality