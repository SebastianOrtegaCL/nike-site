const Subscribe = () => {
  return (
    <section className="padding-x sm:py-32 py-16 w-full max-container flex justify-between items-center max-lg:flex-col gap-10" id='contact-us'>
        <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold capitalize'> Sign up for <span className='text-coral-red'>updates</span> & newsletter</h3>
        <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
            <input type="text" className="input" placeholder='subscribe@example.com' />
            <div className='flex max-sm:justify-end items-center max-sm:w-full'>
                <button className="hover:bg-red-500 px-7 py-4 rounded-full leading-none bg-coral-red text-white font-montserrat">Subscribe</button>
            </div>
        </div>
    </section>
  )
}

export default Subscribe
