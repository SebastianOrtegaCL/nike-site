
const Button = ({label, iconURL, backgroundColor}) => {
  return (
    <button className="
    flex
    justify-center
    items-center
    gap-2
    px-7
    py-4
    rounded-full
    font-montserrat
    text-lg
    leading-none
    bg-coral-red
    text-white
    hover:bg-red-500
    ">
        {label}
        {
            iconURL &&
            <img src={iconURL} alt="arrow right icon"
                 className=" rounded-full ml-2 w-10 h-10" />
        }

    </button>

  )
}

export default Button