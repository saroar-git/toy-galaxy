import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
      useTitle('Toy Galaxy | All Toys'); // use title

      const { user, loading } = useContext(AuthContext);
      const [toys, setToys] = useState([]);
      const [search, setSearch] = useState('');
      const navigate = useNavigate();

      useEffect(() => {
            fetch('https://toy-galaxy-server.vercel.app/toys')
                  .then((res) => res.json())
                  .then((data) => setToys(data));
      }, []);

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

      // Filter the toys and search by toy name
      const filteredToys = toys.filter((toy) =>
            toy.name.toLowerCase().includes(search.toLowerCase())
      );

      return (
            <div className="my-12">
                  <h1
                        className="text-3xl text-center font-semibold font-lobster mb-4"
                        data-aos="fade-up"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                  >
                        Our all Toys are Here..
                  </h1>

                  {/* search field */}
                  <div className="flex justify-end mb-4">
                        <input
                              type="text"
                              placeholder="Search by Toy Name"
                              value={search}
                              onChange={(e) => setSearch(e.target.value)}
                              className="input input-bordered input-info w-full max-w-xs"
                        />
                  </div>

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
                                                <th></th>
                                          </tr>
                                    </thead>

                                    <tbody className="text-center">
                                          {filteredToys.map((toy, index) => (
                                                <>
                                                      <tr key={toy.id}>

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
                                                                                          alt="Avatar Tailwind CSS Component"
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

                                                            <th>
                                                                  <Link
                                                                        to={`/details/${toy._id}`}
                                                                        className="card-actions justify-start text-xl"
                                                                        title="View Details"
                                                                        onClick={handleClick}
                                                                  >
                                                                        <FaEye />
                                                                  </Link>
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

export default AllToys;