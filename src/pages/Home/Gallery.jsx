import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Gallery = () => {
      return (
            <div className="min-h-screen my-20">
                  <h1 className='text-4xl text-center font-semibold font-lobster mb-8' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">Toys Gallery</h1>
                  <h4 className='mb-8 md:w-[70%] mx-auto text-center text-gray-500' data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000">Explore the world of superheroes and villains with our Toy Gallery section. An impressive collection of high-quality action figures, statues, and other collectibles from the most beloved comic book franchises.</h4>

                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        <LazyLoadImage src="https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" className="md:w-60 rounded-lg shadow-2xl" title='Deadpool'
                              alt="Album"
                              effect="blur"
                              loading='lazy'
                        />
                        <LazyLoadImage src="https://images.unsplash.com/photo-1608889476561-6242cfdbf622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" className="md:w-60 rounded-lg shadow-2xl" title='Spider-Man, Iron-Man and Captain America' alt="Album"
                              effect="blur"
                              loading='lazy' />
                        <LazyLoadImage src="https://images.unsplash.com/photo-1626209731723-4bf514fcdcd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" className="md:w-60 md:h-56 rounded-lg shadow-2xl" title='Thor' alt="Album"
                              effect="blur"
                              loading='lazy' />
                        <LazyLoadImage src="https://images.unsplash.com/photo-1608889175638-9322300c46e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" className="md:w-60 rounded-lg shadow-2xl" title='Infinity Stone Gauntlet Gloves' alt="Album"
                              effect="blur"
                              loading='lazy' />
                        <LazyLoadImage src="https://images.unsplash.com/photo-1608889175250-c3b0c1667d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" className="md:w-60 rounded-lg shadow-2xl" title='Thanos' alt="Album"
                              effect="blur"
                              loading='lazy' />
                  </div>
                  <p className='text-center my-4 text-xl' data-aos="fade-up-right" data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">Marvel Universe</p>

                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        <LazyLoadImage src="https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" className="md:w-60 rounded-lg shadow-2xl" title='Storm Trooper' alt="Album"
                              effect="blur"
                              loading='lazy' />
                        <LazyLoadImage src="https://images.unsplash.com/photo-1601814933824-fd0b574dd592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80" className="md:w-60 md:h-[147px] rounded-lg shadow-2xl" title='Yoda' alt="Album"
                              effect="blur"
                              loading='lazy' />
                        <LazyLoadImage src="https://images.unsplash.com/photo-1586861203927-800a5acdcc4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" className="md:w-60 md:h-[147px] rounded-lg shadow-2xl" title='Darth Vader' alt="Album"
                              effect="blur"
                              loading='lazy' />
                        <LazyLoadImage src="https://images.unsplash.com/photo-1608346128025-1896b97a6fa7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="md:w-60 rounded-lg shadow-2xl" title='Chewbacca' alt="Album"
                              effect="blur"
                              loading='lazy' />
                        <LazyLoadImage src="https://images.unsplash.com/photo-1521985179118-6008b8cef2c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="md:w-60 rounded-lg shadow-2xl" title='Storm Trooper and Darth Vader' alt="Album"
                              effect="blur"
                              loading='lazy' />
                  </div>
                  <p className='text-center my-4 text-xl' data-aos="fade-down-right" data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">Star Wars</p>

                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        <LazyLoadImage src="https://images.unsplash.com/photo-1513384312027-9fa69a360337?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" className="md:w-60 rounded-lg shadow-2xl" title='Super-Man' alt="Album"
                              effect="blur"
                              loading='lazy' />
                        <LazyLoadImage src="https://images.unsplash.com/photo-1611604548018-d56bbd85d681?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="md:w-60 rounded-lg shadow-2xl" title='Super-Man and Batman' alt="Album"
                              effect="blur"
                              loading='lazy' />
                        <LazyLoadImage src="https://images.unsplash.com/photo-1628864021318-17265a845a52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" className="md:w-60 md:h-[147px] rounded-lg shadow-2xl" title='Batman and Deadpool' alt="Album"
                              effect="blur"
                              loading='lazy' />
                        <LazyLoadImage src="https://images.unsplash.com/photo-1579986965247-608bb43de2d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80" className="md:w-60 md:h-[147px] rounded-lg shadow-2xl" title='Joker Family' alt="Album"
                              effect="blur"
                              loading='lazy' />
                        <LazyLoadImage src="https://images.unsplash.com/photo-1559107503-521c2b36b98d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="md:w-60 rounded-lg shadow-2xl" title='Super-Man, Wonder Woman and Batman' alt="Album"
                              effect="blur"
                              loading='lazy' />
                  </div>
                  <p className='text-center my-4 text-xl' data-aos="fade-up-left" data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">DC Universe</p>

                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        <LazyLoadImage src="https://images.unsplash.com/photo-1512572525676-f9b59951929e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=757&q=80" className="md:w-60 md:h-[147px] rounded-lg shadow-2xl" title='Optimus Prime' alt="Album"
                              effect="blur"
                              loading='lazy' />
                        <LazyLoadImage src="https://images.unsplash.com/photo-1618945524163-32451704cbb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="md:w-60 rounded-lg shadow-2xl" title='Bumblebee' alt="Album"
                              effect="blur"
                              loading='lazy' />
                        <LazyLoadImage src="https://images.unsplash.com/photo-1545548171-37a54e5c1ea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" className="md:w-60 md:h-[147px] rounded-lg shadow-2xl" title='Bumblebee' alt="Album"
                              effect="blur"
                              loading='lazy' />
                        <LazyLoadImage src="https://images.unsplash.com/photo-1545548138-6a1e65b5e233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" className="md:w-60 md:h-[147px] rounded-lg shadow-2xl" title='Bumblebee' alt="Album"
                              effect="blur"
                              loading='lazy' />
                        <LazyLoadImage src="https://images.unsplash.com/photo-1657276055907-1ebd236c9850?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" className="md:w-60 rounded-lg shadow-2xl" title='Megatron' alt="Album"
                              effect="blur"
                              loading='lazy' />
                  </div>
                  <p className='text-center my-4 text-xl' data-aos="fade-down-right" data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">Transformers</p>
            </div>
      );
};

export default Gallery;