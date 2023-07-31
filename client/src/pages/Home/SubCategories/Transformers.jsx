import React, { useContext, useState } from 'react';
import { FaArrowRight, FaRegStar, FaStar } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Rating from "react-rating";
import { AuthContext } from '../../../context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Transformers = ({ transformer }) => {
      const { user } = useContext(AuthContext);
      const navigate = useNavigate();
      const { _id, name, picture, price, rating } = transformer;

      const handleClick = () => {
            if (!user) {
                  Swal.fire({
                        title: 'You have to login first to view details',
                        icon: 'error',
                        confirmButtonText: 'Okay'
                  });
                  navigate("/login");
            }
      };

      return (
            <div>
                  <div
                        className="card card-compact shadow-lg md:w-96 my-3" data-aos="fade-up"
                        data-aos-duration="2000">
                        <figure>
                              <LazyLoadImage src={picture}
                                    alt="Toy"
                                    effect="blur"
                                    loading='lazy' />
                        </figure>

                        <div className="card-body">
                              <h2 className="card-title text-3xl text-[#14104A]">{name}</h2>
                              <p className='flex items-center text-lg text-[#14104A] font-bold'>Price: $ {price}</p>
                              <p className="font-semibold text-[17px]">
                                    Ratings:{" "}
                                    <Rating
                                          className="text-orange-500"
                                          readonly
                                          placeholderRating={rating}
                                          emptySymbol={<FaRegStar />}
                                          placeholderSymbol={<FaStar />}
                                          fullSymbol={<FaStar />}
                                    />
                              </p>

                              <Link to={`/details/${_id}`} className="card-actions justify-end">
                                    <button
                                          className="border-2 border-[#8bb4f6] p-2 text-[#14104A] rounded-full  hover:bg-purple-600 hover:text-white hover:border-purple-400 cursor-pointer"
                                          onClick={handleClick}>
                                          <FaArrowRight />
                                    </button>
                              </Link>
                        </div>
                  </div>
            </div>
      );
};

export default Transformers;
