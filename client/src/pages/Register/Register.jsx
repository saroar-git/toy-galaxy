import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Register = () => {
      useTitle('Toy Galaxy | Register'); // use title
      const { createUser, updateUser, signInWithGoogle } = useContext(AuthContext);

      // display error and success message
      const [error, setError] = useState("");
      const [success, setSuccess] = useState("");

      // show - hide password & T&C
      const [password, setPassword] = useState(false);
      const [accepted, setAccepted] = useState(false);
      
      // navigation & after login go expected page
      const navigate = useNavigate();
      const location = useLocation();
      const from = location?.state?.from?.pathname || "/";

      // register
      const handleRegister = (event) => {
            event.preventDefault();

            const form = event.target;
            const name = form.name.value;
            const photo = form.photo.value;
            const email = form.email.value;
            const password = form.password.value;

            setError("");
            setSuccess("");

            // password validation
            if (password.length < 8) {
                  setError("Password must be at least 8 characters");
                  return;
            } else if (!/(?=.*[a-zA-Z])/.test(password)) {
                  setError("Password must contain at least one letter");
                  return;
            }

            //create new user
            createUser(email, password)
                  .then((result) => {
                        const createdUser = result.user;
                        updateUserData(result.user, name, photo);

                        setError("");
                        setSuccess("Account created successfully.");
                        navigate("/");

                        form.reset();
                  })
                  .catch((error) => {
                        setError(error.message);
                  });
      };

      // update user data
      const updateUserData = (user, name, photo) => {
            updateUser(user, name, photo)
                  .then(() => { })
                  .catch((error) => {
                        console.error("Failed to update user", error);
                  });
      };

      // login with google
      const handleGoogleSignIn = () => {
            signInWithGoogle()
                  .then((result) => {
                        const loggedUser = result.user;
                        navigate(from, { replace: true });
                  })
                  .catch((error) => {
                        setError(error.message);
                  });
      };

      // T&C handle
      const handleAccepted = (event) => {
            setAccepted(event.target.checked);
      };

      return (
            <div className="my-6 md:mx-24">
                  <div className="flex min-h-full flex-1 flex-col justify-center px-6 ">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                              <h2 className="text-center text-2xl font-bold text-gray-900">
                                    Register to
                                    <span className="text-2xl font-bold font-lobster text-gray-900 ml-2">
                                          Toy Galaxy
                                    </span>
                              </h2>
                        </div>

                        <div className="card shadow-xl bg-[#D3E3FD] hover:bg-[#b1cdfb] p-8 mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
                              <form
                                    onSubmit={handleRegister}
                                    className="space-y-3"
                                    method="POST"
                              >
                                    <div>
                                          <label
                                                htmlFor="email"
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                          >
                                                Name
                                          </label>
                                          <div className="mt-2">
                                                <input
                                                      id="name"
                                                      name="name"
                                                      type="text"
                                                      required
                                                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm  sm:leading-6"
                                                />
                                          </div>
                                    </div>

                                    <div>
                                          <label
                                                htmlFor="email"
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                          >
                                                Photo URL
                                          </label>
                                          <div className="mt-2">
                                                <input
                                                      id="photo"
                                                      name="photo"
                                                      type="text"
                                                      required
                                                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm  sm:leading-6"
                                                />
                                          </div>
                                    </div>

                                    <div>
                                          <label
                                                htmlFor="email"
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                          >
                                                Email address
                                          </label>
                                          <div className="mt-2">
                                                <input
                                                      id="email"
                                                      name="email"
                                                      type="email"
                                                      autoComplete="email"
                                                      required
                                                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm  sm:leading-6"
                                                />
                                          </div>
                                    </div>

                                    <div>
                                          <div className="flex items-center justify-between">
                                                <label
                                                      htmlFor="password"
                                                      className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                      Password
                                                </label>
                                          </div>
                                          <div className="mt-2">
                                                <div className="relative">
                                                      <input
                                                            id="password"
                                                            name="password"
                                                            type={password ? "text" : "password"}
                                                            autoComplete="current-password"
                                                            required
                                                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                                      />
                                                      <span onClick={() => setPassword(!password)}>
                                                            {password ? (
                                                                  <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        strokeWidth={1.5}
                                                                        stroke="currentColor"
                                                                        className="w-5 absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500"
                                                                  >
                                                                        <path
                                                                              strokeLinecap="round"
                                                                              strokeLinejoin="round"
                                                                              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                                                        />
                                                                  </svg>
                                                            ) : (
                                                                  <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        strokeWidth={1.5}
                                                                        stroke="currentColor"
                                                                        className="w-5 absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500"
                                                                  >
                                                                        <path
                                                                              strokeLinecap="round"
                                                                              strokeLinejoin="round"
                                                                              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                                                        />
                                                                        <path
                                                                              strokeLinecap="round"
                                                                              strokeLinejoin="round"
                                                                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                                        />
                                                                  </svg>
                                                            )}
                                                      </span>
                                                </div>
                                          </div>
                                    </div>

                                    <div>
                                          <label className="label cursor-pointer">
                                                <span className="label-text text-sm font-medium leading-6 text-gray-900 flex items-center">
                                                      <input
                                                            onClick={handleAccepted}
                                                            type="checkbox"
                                                            className="checkbox checkbox-primary mr-2 w-4 h-4"
                                                      />
                                                      Accept{" "}
                                                      <Link className="ml-1 btn-link" to="/terms">
                                                            terms and conditions
                                                      </Link>
                                                </span>
                                          </label>
                                    </div>

                                    <div>
                                          <button
                                                disabled={!accepted}
                                                type="submit"
                                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                          >
                                                Register
                                          </button>
                                    </div>
                              </form>

                              <div className="text-center">
                                    <p className="text-green-600">{success}</p> <br />
                                    <p className="text-red-600">{error}</p>
                              </div>

                              <p className="text-center mb-6  text-sm text-gray-500">
                                    Already have an account?{" "}
                                    <Link
                                          to="/login"
                                          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                                    >
                                          Login
                                    </Link>
                              </p>
                              
                              <div className="flex flex-col space-y-5">
                                    <span className="flex items-center justify-center space-x-2">
                                          <span className="h-px bg-gray-400 w-14"></span>
                                          <span className="font-normal text-gray-500">or enter with</span>
                                          <span className="h-px bg-gray-400 w-14"></span>
                                    </span>
                                    <div className="flex flex-col space-y-4">
                                          <button
                                                onClick={handleGoogleSignIn}
                                                className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-[#215287] focus:outline-none"
                                          >
                                                <span>
                                                      <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 48 48"
                                                            className="text-blue-500 group-hover:text-white"
                                                            width="20"
                                                            height="20"
                                                            fill="currentColor"
                                                      >
                                                            <path
                                                                  fill="#FFC107"
                                                                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                                                            />
                                                            <path
                                                                  fill="#FF3D00"
                                                                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                                                            />
                                                            <path
                                                                  fill="#4CAF50"
                                                                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                                                            />
                                                            <path
                                                                  fill="#1976D2"
                                                                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                                                            />
                                                      </svg>
                                                </span>
                                                <span className="text-sm font-medium text-gray-800  group-hover:text-white">
                                                      Google
                                                </span>
                                          </button>
                                    </div>
                              </div>
                        </div>
                  </div >
            </div >
      );
};

export default Register;
