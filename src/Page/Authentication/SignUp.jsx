import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const {createUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        return updateProfile(user, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          console.log("Profile create successfully");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div>
      <div className="min-h-screen">
        <div className="w-full max-w-md p-4 rounded-md sm:p-8 dark:bg-gray-50 dark:text-gray-800 mx-auto mt-10 shadow-md">
          <h2 className="mb-3 text-3xl font-semibold text-center">
            Create your account
          </h2>
          <p className="text-sm text-center dark:text-gray-600">
            You have already an account?
            <Link
              to="/login"
              rel="noopener noreferrer"
              className="focus:underline hover:underline ml-1 text-accent font-semibold"
            >
              Login here
            </Link>
          </p>

          <form
            onSubmit={handleSignUp}
            noValidate=""
            action=""
            className="space-y-8 mt-5"
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Leroy Jenkins"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="url" className="block text-sm">
                  Photo URL
                </label>
                <input
                  type="URL"
                  name="photo"
                  id="url"
                  placeholder=""
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline dark:text-gray-600"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md btn btn-accent text-white dark:bg-violet-600 dark:text-gray-50"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
