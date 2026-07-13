import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from "zod";
import Swal from "sweetalert2";

// @hookform/resolvers/zod


   const user = z.object({
        name: z.string().min(3, { message: "Name must be at least 3 characters long" }),
        email: z.string().email({ message: "Enter a valid email address" }),
        password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
        username: z.string().min(3, { message: "Username must be at least 3 characters long" }),
        confirmPassword: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    }).refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });
const Register = () => {
    const {register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver:zodResolver(user),
        }
    );
    const navigate = useNavigate()

 

 const onSubmit = async (data) => {
    try {
        const { confirmPassword, ...rest } = data;

        const res = await axiosInstance.post("/register", rest);
        Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
});

         

        

    } catch (err) {
        console.log(err.response?.data?.message || err.message);
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.response?.data?.message || err.message,
        footer: "<a href=\"#\">Why do I have this issue?</a>"
});
    }
};
    
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-2xl grid md:grid-cols-2">
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 p-12 text-white">
          <h1 className="text-4xl font-bold leading-tight">
            Start Your <br /> Career Journey
          </h1>

          <p className="mt-6 text-indigo-100 leading-8">
            Create your account and explore thousands of job opportunities,
            connect with top companies, and build your professional future.
          </p>

          <div className="mt-10">
            <img
              src="https://illustrations.popsy.co/white/team-work.svg"
              alt="Register"
              className="w-80"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-8 md:p-12">
          <div className="w-full max-w-lg">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800">
                Create Account
              </h2>

              <p className="mt-2 text-gray-500">
                Fill in the information below to get started.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  {...register("name")}
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
              </div>

              {/* Username */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Username
                </label>

                <input
                  type="text"
                  {...register("username")}
                  placeholder="@johndoe"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
                {errors.username && <p className="text-red-500">{errors.username.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  {...register("email")}
                  placeholder="john@example.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Password
                </label>

                <input
                  type="password"
                  {...register("password")}
                  placeholder="********"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Re-type Password
                </label>

                <input
                  type="password"
                  {...register("confirmPassword")}
                  placeholder="********"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
                {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-indigo-600"
                />

                <p className="text-sm text-gray-600">
                  I agree to the{" "}
                  <span className="text-indigo-600 cursor-pointer hover:underline">
                    Terms & Conditions
                  </span>{" "}
                  and{" "}
                  <span className="text-indigo-600 cursor-pointer hover:underline">
                    Privacy Policy
                  </span>
                  .
                </p>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
              >
                Create Account
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="h-px flex-1 bg-gray-300"></div>
              <span className="px-4 text-sm text-gray-500">OR</span>
              <div className="h-px flex-1 bg-gray-300"></div>
            </div>

            {/* Google Sign Up */}
            <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 py-3 font-medium text-gray-700 transition hover:bg-gray-100">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="h-5 w-5"
              />
              Continue with Google
            </button>

            {/* Login */}
            <p className="mt-8 text-center text-gray-600">
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="font-semibold text-indigo-600 hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;