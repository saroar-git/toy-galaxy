import React from 'react';
import shipping from '../../assets/icons/shipping.png';
import delivery from '../../assets/icons/delivery.png';
import card from '../../assets/icons/credit.png';

const Services = () => {
      return (
            <div className="my-20">
                  <h1 className='text-4xl text-center font-semibold font-lobster mb-8' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">Get Best Services</h1>
                  <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <div className="card md:w-96 bg-[#D3F4EC]">
                              <div className="card-body">
                                    <div className='mx-auto'>
                                          <img src={shipping} alt="" className='w-24' data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="2000" />
                                    </div>
                                    <h2 className="text-center text-xl font-bold mt-4">Free Delivery!</h2>
                                    <p>Available in Bangladesh for orders above 499</p>
                              </div>
                        </div>

                        <div className="card md:w-96 bg-[#FCE8D4]">
                              <div className="card-body">
                                    <div className='mx-auto'>
                                          <img src={delivery} alt="" className='w-24' data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="2000" />
                                    </div>
                                    <h2 className="text-center text-xl font-bold mt-4">Cash on Delivery!</h2>
                                    <p>Available in Bangladesh for orders above 699</p>
                              </div>
                        </div>

                        <div className="card md:w-96 bg-[#E3F9E0]">
                              <div className="card-body">
                                    <div className='mx-auto'>
                                          <img src={card} alt="" className='w-24' data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="2000" />
                                    </div>
                                    <h2 className="text-center text-xl font-bold mt-4">Secure Payment!</h2>
                                    <p>Paypal, bKash, Rocket available for all orders</p>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Services;