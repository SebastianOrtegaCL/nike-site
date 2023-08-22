import {footerLogo} from "../assets/images/index.js";
import {footerLinks, socialMedia} from "../constants/index.js";
import {copyrightSign} from "../assets/icons/index.js";

const Footer = () => {
  return (
    <section className="text-white padding bg-black">
        <footer className=''>
            <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
                <div className='flex flex-col items-start'>
                    <a href='/'>
                        <img src={footerLogo} alt='logo' width={150} height={46}/>
                    </a>
                    <p className='text-white-400 mt-6 text-base leading-7 font-montserrat sm:max-w-sm'>Get shoes ready for the new era </p>
                    <div className='flex items-center gap-5 mt-8'>
                        {
                            socialMedia.map((item) => (
                                <div key={item.src} className='bg-white rounded-full w-12 h-12 flex justify-center items-center'>
                                    <img src={item.src} alt={item.alt} width={24} height={24} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
                    {
                        footerLinks.map((item) =>(
                            <div key={item.title}>
                                <h4 className='text-white text-2xl font-montserrat tracking-wide uppercase mb-6 '>{item.title}</h4>
                                <ul className='mt-4'>
                                    {
                                        item.links.map((link) => (
                                            <li key={link.name}>
                                                <a className='text-white-400 cursor-pointer'>{link.name}</a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center '>
                <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer '>
                    <img src={copyrightSign} alt='copyright' width={15} height={15} className='m-0 rounded-full'/>
                    <p className='text-white-400 font-montserrat tracking-wide uppercase'>Copyright. all rights reserved.</p>
                </div>
                <p className='font-montserrat'>
                    Terms and Conditions
                </p>
            </div>
        </footer>
    </section>
  )
}

export default Footer