import Button from "../components/Button.jsx";
import {arrowRight} from "../assets/icons/index.js";
import {offer, shoe8} from "../assets/images/index.js";

const SpecialOffer = () => {
  return (
    <section className="padding flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
        <div className='flex-1'>
            <img width={773} height={687} className="object-contain w-full" src={offer} alt="offers"/>
        </div>
        <div className='flex flex-1 flex-col'>
            <h1 className='capitalize text-4xl font-palanquin font-bold'><span className='text-coral-red'>Special </span>offer</h1>
            <p className='mt-6 lg:max-w-lg info-text'>
                Experience the thrill of discovering top-notch items from our collection, all while enjoying significant discounts that make your shopping experience even more rewarding. Whether you're looking to treat yourself or find the perfect gift for a loved one, this limited-time offer is the gateway to affordability without compromise.
            </p>
            <p className='lg:max-w-lg mt-2 info-text'>
                Don't miss out on this chance to indulge in quality and value like never before. Visit us now and take advantage of our "Special Offer" – your ticket to exceptional products without the premium price tag. Shop smart, shop with us!
            </p>
            <div className='mt-11 flex flex-wrap gap-4'>
                <Button label='View details' iconURL={arrowRight} />
                <Button label='Learn more' backgroundColor='bg-white'  />
            </div>
        </div>
    </section>
  )
}

export default SpecialOffer