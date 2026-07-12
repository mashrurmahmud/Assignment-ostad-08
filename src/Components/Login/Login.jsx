import React from 'react';

const Login = () => {
    return (
       <div className="min-h-screen my-2 bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl grid md:grid-cols-2">
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center bg-gradient-to-br from-indigo-600 to-purple-700 p-12 text-white">
          <h1 className="text-4xl font-bold">Welcome Back 👋</h1>

          <p className="mt-6 text-lg text-indigo-100 leading-8">
            Sign in to access your dashboard, manage your applications, and
            discover your next career opportunity.
          </p>

          <div className="mt-10">
            <button className="rounded-lg border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-indigo-700">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-8 md:p-12">
          <div className="w-full max-w-md">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800">
                Sign In
              </h2>
              <p className="mt-2 text-gray-500">
                Login to continue to your account.
              </p>
            </div>

            <form className="space-y-5">
              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex justify-between">
                  <label className="text-sm font-medium text-gray-700">
                    Password
                  </label>

                  <a
                    href="#"
                    className="text-sm text-indigo-600 hover:underline"
                  >
                    Forgot Password?
                  </a>
                </div>

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-indigo-600"
                  />
                  Remember me
                </label>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
              >
                Sign In
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="h-px flex-1 bg-gray-300"></div>
              <span className="px-4 text-sm text-gray-500">OR</span>
              <div className="h-px flex-1 bg-gray-300"></div>
            </div>

            {/* Google Button */}
            <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 py-3 font-medium text-gray-700 transition hover:bg-gray-100">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="h-5 w-5"
              />
              Continue with Google
            </button>

            {/* Register */}
            <p className="mt-8 text-center text-gray-600">
              Don't have an account?{" "}
              <a
                href="/register"
                className="font-semibold text-indigo-600 hover:underline"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;