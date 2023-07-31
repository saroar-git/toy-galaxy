import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.svg';
import marvel from '../../assets/logo/avengers.svg';
import dc from '../../assets/logo/dc.svg';
import wars from '../../assets/logo/starWars.svg';
import Transformers from '../../assets/logo/transformer.png';

import {
    FaEnvelopeOpen,
    FaHome,
    FaMobileAlt,
    FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-base-content rounded-t-lg p-10'>
            <footer className="footer mb-16 text-white">
                <div>
                    <img className='w-20' src={logo} alt="" data-aos="zoom-in" />
                    <p className='text-xl font-semibold'>Galaxy Industries Ltd.<br />Providing reliable tech since 1992</p>
                </div>

                <div>
                    <span className="footer-title">Contact</span>
                    <div className="flex gap-2 mb-2 items-center">
                        <FaEnvelopeOpen className='text-[#8BB7F0]' />
                        <p>toys@galaxy.com</p>
                    </div>
                    <div className="flex gap-2 mb-2 items-center">
                        <FaMobileAlt className='text-[#8BB7F0]' />
                        <p>+88 01512121212</p>
                    </div>
                    <div className="flex gap-2 md:items-center">
                        <FaWhatsapp className='text-[#8BB7F0]' />
                        <p className=''>+88 01512121215</p>
                    </div>
                    <div className="flex gap-2 md:items-center">
                        <FaHome className='text-[#8BB7F0]' />
                        <p className=''>Matihar, Rajshahi, Bangladesh.</p>
                    </div>
                </div>

                <div>
                    <span className="footer-title">Categories</span>
                    <a className="link link-hover flex items-center gap-1"><img className='w-6' src={marvel} alt="" />
                        Marvel</a>
                    <a className="link link-hover flex items-center gap-1"><img className='w-[22px]' src={dc} alt="" /> DC</a>
                    <a className="link link-hover flex items-center gap-1"><img className='w-[29px]' src={wars} alt="" /> Star Wars</a>
                    <a className="link link-hover flex items-center gap-1"><img className='w-6' src={Transformers} alt="" /> Transformers</a>
                </div>

                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4 text-[#F78F8F]">
                        <Link to="https://www.linkedin.com/in/saroar-in/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="38px" height="38px" className="fill-current border-2 border-[#CF4F4F] rounded-full p-2"><path d="M 21.125 0 L 4.875 0 C 2.183594 0 0 2.183594 0 4.875 L 0 21.125 C 0 23.816406 2.183594 26 4.875 26 L 21.125 26 C 23.816406 26 26 23.816406 26 21.125 L 26 4.875 C 26 2.183594 23.816406 0 21.125 0 Z M 8.039063 22.070313 L 4 22.070313 L 3.976563 9.976563 L 8.015625 9.976563 Z M 5.917969 8.394531 L 5.894531 8.394531 C 4.574219 8.394531 3.722656 7.484375 3.722656 6.351563 C 3.722656 5.191406 4.601563 4.3125 5.945313 4.3125 C 7.289063 4.3125 8.113281 5.191406 8.140625 6.351563 C 8.140625 7.484375 7.285156 8.394531 5.917969 8.394531 Z M 22.042969 22.070313 L 17.96875 22.070313 L 17.96875 15.5 C 17.96875 13.910156 17.546875 12.828125 16.125 12.828125 C 15.039063 12.828125 14.453125 13.558594 14.171875 14.265625 C 14.066406 14.519531 14.039063 14.867188 14.039063 15.222656 L 14.039063 22.070313 L 9.945313 22.070313 L 9.921875 9.976563 L 14.015625 9.976563 L 14.039063 11.683594 C 14.5625 10.875 15.433594 9.730469 17.519531 9.730469 C 20.105469 9.730469 22.039063 11.417969 22.039063 15.046875 L 22.039063 22.070313 Z" /></svg></Link>

                        <Link to="https://www.facebook.com/programmingherowebcourse"><svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" className="fill-current border-2 border-[#CF4F4F] rounded-full p-2"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>

                        <Link to="https://www.youtube.com/@ProgrammingHeroCommunity"><svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" className="fill-current border-2 border-[#CF4F4F] rounded-full p-2"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
                    </div>

                    <div className="form-control md:w-80 mt-4">
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full md:pr-16 pr-20" />
                            <button className="btn border-none bg-[#8BB7F0] absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>

            <div className='footer-center text-sm font-lobster text-white'>
                <p>Copyright © 2023 - All right reserved by Galaxy Industries Ltd.</p>
            </div>
        </div>

    );
};

export default Footer;