import React from 'react';
import useTitle from '../../hooks/useTitle';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateMyToy = () => {
      useTitle('Toy Galaxy | Update Toy Info'); // use title

      const toys = useLoaderData();
      const { _id, name, price, description, quantity } = toys;

      const navigate = useNavigate();

      const handleUpdateToy = event => {
            event.preventDefault();

            const form = event.target;
            const price = form.price.value;
            const quantity = form.quantity.value;
            const description = form.description.value;
            form.reset();

            const toy = {
                  price: price,
                  quantity: quantity,
                  description: description
            };

            fetch(`https://toy-galaxy-server.vercel.app/toys/${_id}`, {
                  method: 'PATCH',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(toy)
            })
                  .then(res => res.json())
                  .then(data => {
                        if (data.modifiedCount > 0) {
                              Swal.fire({
                                    title: 'Your toy updated successfully!',
                                    icon: 'success',
                                    confirmButtonText: 'Okay'
                              });
                              navigate('/myToys')
                        }
                  });

      };

      return (
            <div className="my-10">

                  <h1
                        className="text-3xl text-center font-semibold font-lobster mb-8"
                        data-aos="fade-up"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                  >
                        Update Your Toy
                  </h1>

                  <div className="card shadow-lg bg-[#D3E3FD] hover:bg-[#b1cdfb] p-6 mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
                        <div className="card-body bg-gradient-to-l from-sky-300 to-purple-300 p-8 rounded-xl w-[400px]">
                              
                              <form onSubmit={handleUpdateToy}>
                                    <h1 className='text-xl font-bold text-center'>{name}</h1>

                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text text-lg font-bold">Price</span>
                                          </label>
                                          <input type="text" name='price' className="input input-bordered" defaultValue={price} />
                                    </div>

                                    <div className="form-control my-6">
                                          <label className="label">
                                                <span className="label-text text-lg font-bold">Available Quantity</span>
                                          </label>
                                          <input type="number" name='quantity' className="input input-bordered" defaultValue={quantity} />
                                    </div>

                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text text-lg font-bold">Description of Toy</span>
                                          </label>
                                          <textarea defaultValue={description} name='description' className="textarea textarea-bordered  w-full" ></textarea>
                                    </div>

                                    <div className="flex justify-center mt-10">
                                          <input className="btn btn-wide btn-outline border-2" type="submit" value="Update" />
                                    </div>
                              </form>
                        </div>
                  </div>

            </div>
      );
};

export default UpdateMyToy;