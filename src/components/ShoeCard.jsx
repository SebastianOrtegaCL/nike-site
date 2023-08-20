const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
    return(
        <div className='border-2 rounded-xl'>

            <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
                <img src={ imgURL.thumbnail } className='' alt='shoe-collection' width={127} height={103}  />
            </div>
        </div>
    )
}

export default ShoeCard;