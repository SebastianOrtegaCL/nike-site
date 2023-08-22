import {reviews} from "../constants/index.js";
import ReviewSection from "../components/ReviewSection.jsx";
// bg-pale-blue
const CustomerReviews = () => {
  return (
    <section className="padding max-container ">
        <h3 className='font-palanquin text-center text-4xl font-bold'>
            What our?
            <span className='text-coral-red'> Customers</span> Say?
        </h3>
        <p className='info-text mt-4 m-auto max-w-lg text-center'>Hear What Our Valued Customers Are Saying!</p>
        {
            reviews.map((review) => (
                <ReviewSection key={review.customerName} {...review} />
            ))
        }
    </section>
  )
}

export default CustomerReviews