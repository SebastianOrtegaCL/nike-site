import { products } from '../constants';
import PopularProductCard from "../components/PopularProductCard.jsx";


const PopularProducts = () => {
  return (
    <section className="padding max-container max-sm:mt-12" id='products'>
        <div className='flex flex-col justify-start gap-5'>
            <h2 className='text-4xl font-palanquin font-bold'>Our <span className='text-coral-red'>popular</span> products</h2>
            <p className='lg:max-w-lg mt-2 font-montserrat'>
                Step into the world of ultimate style and comfort with our curated selection of Nike shoes. From iconic classics to cutting-edge innovations, our popular products are designed to elevate your athletic performance and showcase your unique sense of fashion.
            </p>
            <div className='
                gap-5
                mt-16
                grid
                lg:grid-cols-4
                md:grid-cols-3
                sm:grid-cols-2
                grid-cols-1'
            >
                {
                    products.map((product, index) => (
                        <PopularProductCard key={index} product={product} {...product} />
                    ))
                }
            </div>
        </div>
      </section>
  )
}

export default PopularProducts