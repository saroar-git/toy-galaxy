import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import { FaCartPlus, FaCheckCircle, FaEnvelopeOpenText, FaMoneyCheckAlt, FaStar, FaUserTag } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";

const Details = () => {
      useTitle('Toy Galaxy | Toy Detail'); // use title

      const toys = useLoaderData();
      const { name, price, email, description, seller, subCategory, rating, quantity, picture } = toys;

      const [isLinkDisabled, setIsLinkDisabled] = useState(false);

      const handleDisable = () => {

            Swal.fire({
                  title: 'Added to your cart',
                  icon: 'success'
            });
            setIsLinkDisabled(true);
      };

      return (
            <div className="my-8">
                  <h1 className='text-4xl text-center font-semibold font-lobster mb-8' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">Toy Detail Information</h1>

                  <div className="bg-gradient-to-l from-[#cbf9c5] to-[#B1CDFB] md:px-24 py-12 rounded-xl">
                        <div className="hero-content flex-col lg:flex-row gap-8">
                              <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
                              <div>
                                    <h1 className="text-5xl font-bold">{name}</h1>
                                    <p className="mt-5 text-lg font-bold">Toy Category: {subCategory}</p>
                                    <p className="py-3">{description}</p>
                              </div>
                        </div>
                        
                        <div className="md:flex md:gap-20 mt-20 mb-8 mx-6">
                              <div>
                                    <h1 className="text-2xl font-semibold flex items-center gap-4"> <FaUserTag /> Seller: {seller}</h1>
                                    <p className="py-3 text-xl flex items-center gap-4"><FaEnvelopeOpenText /> Email: {email}</p>
                              </div>
                              <div>
                                    <h1 className="text-xl flex items-center gap-4"><FaMoneyCheckAlt /> Price: $ {price}</h1>
                                    <p className="py-3 text-xl flex items-center gap-4"><FaCheckCircle /> Available Quantity: {quantity}</p>
                              </div>
                              <div>
                                    <h1 className="text-xl pb-3 flex items-center gap-4"><FaStar /> Rating: {rating}</h1>
                                    <div className="flex items-center gap-4 text-xl">
                                          <FaCartPlus />
                                          <a onClick={handleDisable} className={isLinkDisabled ? "underline text-xl disabled text-gray-500" : "link link-accent text-xl"} disabled={isLinkDisabled}>
                                                {isLinkDisabled ? "Added to cart" : "Make it Yours"}
                                          </a>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Details;