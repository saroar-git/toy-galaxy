import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthProvider';

const Apply = () => {
      const navigate = useNavigate();
      const { user } = useContext(AuthContext);

      const handleSubmitApply = event => {
            event.preventDefault();
            event.target.reset();
            if (!user) {
                  Swal.fire({
                        title: 'Register now to post your products',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                  });
                  navigate('/register');
            }
            else {
                  Swal.fire({
                        title: 'Congratulations! Post a product now',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                  });
                  navigate('/addToy');
            }
      };
      return (
            <div className="my-20">
                  <h1 className='text-4xl text-center font-semibold font-lobster mb-8' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000"> Apply to become a Seller</ h1>

                  <div className="bg-gradient-to-l from-sky-300 to-purple-300 p-10 rounded-lg">
                        <form onSubmit={handleSubmitApply}>
                              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
                                    <div className="max-w-md md:w-full">
                                          <input type="text" placeholder="Your Name" className="input w-full max-w-xs" required />
                                    </div>

                                    <div className="max-w-md md:w-full">
                                          <input type="email" placeholder="Email" className="input w-full max-w-xs" required />
                                    </div>

                                    <div className="max-w-md md:w-full">
                                          <input type="number" placeholder="Phone" className="input w-full max-w-xs" required />
                                    </div>

                                    <div className="max-w-md md:w-full">
                                          <select required className="select select-bordered w-full max-w-xs" defaultValue="Gender">
                                                <option disabled>Gender</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>Others</option>
                                          </select>
                                    </div>

                                    <div className="max-w-md md:w-full">
                                          <select required className="select select-bordered w-full max-w-xs" defaultValue="Education">
                                                <option disabled>Education</option>
                                                <option>SSC</option>
                                                <option>HSC</option>
                                                <option>Diploma</option>
                                                <option>Graduation</option>
                                          </select>
                                    </div>

                                    <div className="max-w-md md:w-full">
                                          <input type="number" placeholder="Any Experience? (in years)" className="input w-full max-w-xs" />
                                    </div>
                                    
                                    <div className="form-control w-full max-w-xs">
                                          <label className="label">
                                                <span className="label-text font-semibold">Drop Your CV</span>
                                          </label>
                                          <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                                    </div>
                              </div>

                              <div className='mt-4 md:flex items-center gap-20'>
                                    <textarea placeholder="Write your interest here" className="textarea textarea-bordered textarea-lg w-full md:w-9/12" ></textarea>
                                    <button className="btn btn-outline border-[#130F49] text-[#130F49]">Submit</button>
                              </div>
                        </form>
                  </div>
            </div >
      );
};

export default Apply;