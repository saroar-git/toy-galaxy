import React from 'react';
import useTitle from '../../hooks/useTitle';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Swal from 'sweetalert2';

const AddAToy = () => {
      useTitle('Toy Galaxy | Add a Toy'); // use title

      const { user } = useContext(AuthContext);

      const handleAddToy = event => {
            event.preventDefault();

            const form = event.target;
            const seller = form.seller.value;
            const email = user?.email;
            const photo = form.photo.value;
            const name = form.name.value;
            const category = form.querySelector('.select').value;
            const price = form.price.value;
            const rating = form.rating.value;
            const quantity = form.quantity.value;
            const description = form.description.value;
            form.reset();

            const toy = {
                  picture: photo,
                  subCategory: category,
                  name: name,
                  price: price,
                  rating: rating,
                  quantity: quantity,
                  seller: seller,
                  email: email,
                  description: description
            };

            fetch('https://toy-galaxy-server.vercel.app/toys', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(toy)
            })
                  .then(res => res.json())
                  .then(data => {
                        if (data.insertedId) {
                              Swal.fire({
                                    title: 'Your toy has been posted successfully!',
                                    icon: 'success',
                                    confirmButtonText: 'Okay'
                              });
                        }
                  });

      };

      return (
            <div className="my-12">
                  <h1
                        className="text-3xl text-center font-semibold font-lobster mb-8"
                        data-aos="fade-up"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                  >
                        Post Your Toy Now!
                  </h1>

                  <div className='bg-gradient-to-l from-sky-300 to-purple-300 p-8 rounded-lg'>
                        <form onSubmit={handleAddToy}>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-4 md:mx-0">
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Your Name</span>
                                          </label>
                                          <input type="text" defaultValue={user?.displayName} name="seller" className="input input-bordered" />
                                    </div>

                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Email</span>
                                          </label>
                                          <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" readOnly />
                                    </div>

                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Photo URL</span>
                                          </label>
                                          <input type="text" name="photo" className="input input-bordered" placeholder='Photo url of your toy' required />
                                    </div>

                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Toy Name</span>
                                          </label>
                                          <input type="text" name="name" className="input input-bordered" placeholder='Add a name of your toy' required />
                                    </div>

                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Select a Category</span>
                                          </label>
                                          <select required className="select select-bordered w-full" defaultValue="Action Figure">
                                                <option disabled>Action Figure</option>
                                                <option>Marvel</option>
                                                <option>DC</option>
                                                <option>Star Wars</option>
                                                <option>Transformers</option>
                                          </select>
                                    </div>

                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Price</span>
                                          </label>
                                          <input type="text" name='price' className="input input-bordered" placeholder=' $ digit only' required />
                                    </div>

                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Rating</span>
                                          </label>
                                          <input type="text" name='rating' className="input input-bordered" placeholder='Rate a number of your toy (out of 5)' required />
                                    </div>

                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Available Quantity</span>
                                          </label>
                                          <input type="number" name='quantity' className="input input-bordered" placeholder='Add available quantity of your toy' required />
                                    </div>

                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Description of Toy</span>
                                          </label>
                                          <textarea placeholder="Add a description of your toy" name='description' required className="textarea textarea-bordered textarea-xs w-full" ></textarea>
                                    </div>
                              </div>

                              <div className="flex justify-center mt-10">
                                    <input className="btn btn-wide btn-outline border-2" type="submit" value="Add a Toy" />
                              </div>
                        </form>
                  </div>
            </div>
      );
};

export default AddAToy;