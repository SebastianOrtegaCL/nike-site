import { shoe8 } from '../assets/images';
import Button from "../components/Button.jsx";
const SuperQuality = () => {
  return (
    <section className="padding flex justify-between items-center max-lg:flex-col gap-10 w-full max-container" id='about-us' >
        <div className='flex flex-1 flex-col'>
            <h1 className='
                xl:bg-black
                xl:whitespace-nowrap
                relative
                z-10
                pr-10

                '>
                We Provide You <span>Super Quality Shoes</span>.
            </h1>
            <div className='mt-11'>
                <Button label='View details'  />
            </div>

        </div>
        <div>
            <img src={shoe8} width={570} height={522}/>
        </div>
    </section>
  )
}

export default SuperQuality