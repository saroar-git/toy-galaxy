import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Banner = () => {
      const slides = [
            {
                  url: 'https://images.unsplash.com/photo-1636572481914-a07d36917486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            },
            {
                  url: 'https://images.unsplash.com/photo-1611604548018-d56bbd85d681?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            },
            {
                  url: 'https://images.unsplash.com/photo-1513704519535-f5c81aa78d0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            },
            {
                  url: 'https://images.unsplash.com/photo-1512572525676-f9b59951929e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=757&q=80',
            },
      ];

      const [currentIndex, setCurrentIndex] = useState(0);

      const prevSlide = () => {
            setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
      };

      const nextSlide = () => {
            setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
      };

      const goToSlide = (slideIndex) => {
            setCurrentIndex(slideIndex);
      };

      return (
            <div className='max-w-[1400px] h-[600px] w-full mb-12 m-auto  relative group' data-aos="zoom-in" data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000">
                  <div
                        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                  >
                        <div>
                              <div className="absolute rounded-xl flex justify-center md:justify-start p-4 h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 30, 0)] text-start">
                                    
                                    <div className='text-white md:space-y-7 space-y-5 mt-10 md:mt-0 md:p-10 w-11/12 md:w-[70%]'>
                                          <h2 className='md:text-6xl text-2xl font-bold'>Assemble Your Collection with SuperHero Toys</h2>

                                          <p className="text-sm md:text-lg text-justify">Explore the worlds of Marvel, DC, Star Wars and Transformers through our vast collection of toys. From superhero action figures and plushiest to vehicles and playlets, we have everything you need to bring your favorite characters to life. Assemble your own team of Avengers or Justice League heroes, battle for control of the galaxy with Star Wars figures.</p>

                                          <div className="text-center md:text-start">
                                                <button className="border border-white px-3 py-2 rounded text-xs md:text-base md:px-5 md:py-2 hover:bg-[#F78F8F] hover:text-black md:hover:font-semibold">New Arrival</button>
                                          </div>
                                    </div>
                              </div>

                              <h2 className='text-white absolute text-center bottom-12 font-semibold md:text-lg text-sm font-lobster w-full mx-auto'>"Discover the ultimate collection of superhero toys and merchandise from iconic franchises at our online store, with new arrivals added regularly."</h2>
                        </div>
                  </div>

                  {/* Left Arrow */}
                  <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactLeft onClick={prevSlide} size={30} />
                  </div>

                  {/* Right Arrow */}
                  <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactRight onClick={nextSlide} size={30} />
                  </div>
                  
                  <div className='flex top-4 justify-center py-2'>
                        {slides.map((slide, slideIndex) => (
                              <div
                                    key={slideIndex}
                                    onClick={() => goToSlide(slideIndex)}
                                    className='text-2xl cursor-pointer'
                              >
                                    <RxDotFilled />
                              </div>
                        ))}
                  </div>
            </div>
      );
};

export default Banner;