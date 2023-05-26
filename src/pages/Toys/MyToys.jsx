import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { FaEdit, FaEye, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyToys = () => {
      useTitle('Toy Galaxy | My Toys'); // use title

      const { user, loading } = useContext(AuthContext);
      const [toys, setToys] = useState([]);
      const navigate = useNavigate();

      const url = `https://toy-galaxy-server.vercel.app/toys/?email=${user.email}`;
      useEffect(() => {
            fetch(url)
                  .then(res => res.json())
                  .then(data => setToys(data));
      }, [url]);

      const handleClick = () => {
            if (!user) {
                  Swal.fire({
                        title: 'You have to login first to view details',
                        icon: 'error',
                        confirmButtonText: 'Okay',
                  });
                  navigate('/login');
            }
      };

      // delete toy post
      const handleDelete = id => {
            const proceed = Swal.fire({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, delete it!'
            });

            proceed.then((result) => {
                  if (result.isConfirmed) {
                        fetch(`https://toy-galaxy-server.vercel.app/toys/${id}`, {
                              method: 'DELETE'
                        })
                              .then(res => res.json())
                              .then(data => {
                                    if (data.deletedCount > 0) {
                                          Swal.fire(
                                                'Deleted!',
                                                'Your toy has been deleted.',
                                                'success'
                                          );
                                          const remaining = toys.filter(toy => toy._id !== id);
                                          setToys(remaining);
                                    }
                              });
                  }
            });
      };

      return (
            <div className="min-h-screen my-12">

                  <h1
                        className="text-3xl text-center font-semibold font-lobster mb-8"
                        data-aos="fade-up"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                  >
                        Your Posted Toys
                  </h1>

                  {loading ? (
                        <div className="flex justify-center items-center">
                              <img
                                    src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/78796f69321565.5b7d0cbe71285.gif"
                                    alt=""
                              ></img>
                        </div>
                  ) : (
                        <div className="overflow-x-auto w-full">
                              <table className="table w-full text-center">
                                    {/* head */}
                                    <thead>
                                          <tr>
                                                <th></th>
                                                <th>Seller Name</th>
                                                <th>Toy Name</th>
                                                <th>Sub-category</th>
                                                <th>Price</th>
                                                <th>Available Quantity</th>
                                                <th>Rating</th>
                                                <th>Description</th>
                                                <th>Actions</th>
                                          </tr>
                                    </thead>

                                    <tbody className="text-center">
                                          {toys.map((toy, index) => (
                                                <>
                                                      <tr key={toy._id}>

                                                            <td>
                                                                  <div className="font-bold">{index + 1}</div>
                                                            </td>

                                                            <td>
                                                                  <div className="font-bold">
                                                                        {toy.seller ? toy.seller : ''}
                                                                  </div>
                                                            </td>

                                                            <td>
                                                                  <div className="flex items-center space-x-3">
                                                                        <div className="avatar">
                                                                              <div className="mask mask-squircle w-12 h-12">
                                                                                    <img
                                                                                          src={toy.picture}
                                                                                          alt="Avatar"
                                                                                    />
                                                                              </div>
                                                                        </div>
                                                                        <div>
                                                                              <div className="text-2xl font-semibold">
                                                                                    {toy.name}
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </td>

                                                            <td>
                                                                  <div className="font-semibold">{toy.subCategory}</div>
                                                            </td>

                                                            <td>
                                                                  <div className="font-semibold">$ {toy.price}</div>
                                                            </td>

                                                            <td>
                                                                  <div className="font-semibold">{toy.quantity}</div>
                                                            </td>

                                                            <td>
                                                                  <div className="font-semibold">{toy.rating}</div>
                                                            </td>

                                                            <td>
                                                                  <div className="font-semibold" title={toy.description}>
                                                                        {toy.description.split(" ").slice(0, 5).join(" ")}...</div>
                                                            </td>

                                                            <th className='flex items-center mt-4 gap-3'>
                                                                  <Link
                                                                        to={`/details/${toy._id}`}
                                                                        className="text-xl"
                                                                        title="View Details"
                                                                        onClick={handleClick}
                                                                  >
                                                                        <FaEye />
                                                                  </Link>

                                                                  <Link
                                                                        to={`/update/${toy._id}`}
                                                                        className="text-xl"
                                                                        title="Update"
                                                                        onClick={handleClick}
                                                                  >
                                                                        <FaEdit />
                                                                  </Link>

                                                                  <button
                                                                        className="text-xl"
                                                                        title="Delete"
                                                                        onClick={() => handleDelete(toy._id)}
                                                                  >
                                                                        <FaTrashAlt />
                                                                  </button>
                                                            </th>
                                                      </tr>
                                                </>
                                          ))}
                                    </tbody>
                              </table>
                        </div>
                  )}
            </div>
      );
};

export default MyToys;