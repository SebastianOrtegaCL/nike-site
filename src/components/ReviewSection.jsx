import {star} from "../assets/icons/index.js";

const ReviewSection = ({imgURL, customerName, rating, feedback}) => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img width={100} height={100} src={imgURL} alt='customer' className='rounded-full object-cover w-[120px] h-[120px]'/>
            <p className='info-text mt-6 max-w-sm text-center mb-4'>{feedback}</p>
            <div className='flex justify-center items-center gap-3 '>
                <img className='object-contain m-0' src={star} alt='star-icon' width={24} height={24} />
                <p>({rating})</p>
            </div>
            <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>{customerName}</h3>
        </div>
    )
}


export default ReviewSection;