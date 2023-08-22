import {star} from "../assets/icons/index.js";

const ReviewSection = ({imgURL, customerName, rating, feedback}) => {
    return (
        <>
            <div className='bg-green-black flex flex-col justify-center items-center'>

                <img width={100} height={100} src={imgURL} alt='customer' className='rounded-full object-cover w-[120px] h-[120px]'/>
                <p className='info-text mt-6 max-w-sm text-center '>{feedback}</p>
                <div>
                    <img className='object-contain m-0' src={star} alt='star-icon' width={24} height={24} />
                </div>
                <p>({rating})</p>
                <h3>{customerName}</h3>
            </div>
        </>
    )
}


export default ReviewSection;