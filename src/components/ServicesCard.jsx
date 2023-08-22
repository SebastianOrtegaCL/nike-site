
const ServicesCard = ({label, imgURL, subtext}) => {
    return(
        <div className='flex-1
        sm:w-[350px]
        w-full
        shadow-xl
        rounded-[20px]
        px-10
        py-16
        '>
            <div className='hover:bg-red-500 bg-coral-red rounded-full w-11 h-11 flex justify-center items-center '>
                <img src={imgURL} alt={label} width={24} height={24}/>
            </div>
            <h3 className='leading-normal font-bold text-3xl pb-4 mt-5 font-palanquin'>{label}</h3>
            <p className='m-3 break-words'>{subtext}</p>
        </div>
    )
}




export default ServicesCard;