import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="container mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-xl font-bold text-white">
                J
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  Job<span className="text-indigo-500">Board</span>
                </h2>
                <p className="text-sm text-gray-400">
                  Find Your Dream Career
                </p>
              </div>
            </div>

            <p className="mt-5 leading-7 text-gray-400">
              Connecting talented professionals with the best companies.
              Search thousands of jobs and build your future with confidence.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="rounded-full bg-slate-800 p-3 transition hover:bg-indigo-600 hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-indigo-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="hover:text-indigo-400">
                  Jobs
                </Link>
              </li>
              <li>
                <Link to="/companies" className="hover:text-indigo-400">
                  Companies
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-indigo-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-indigo-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Resources
            </h3>

            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-indigo-400">
                  Career Advice
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400">
                  Resume Builder
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400">
                  Interview Tips
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Newsletter
            </h3>

            <p className="mb-4 text-gray-400">
              Subscribe to receive the latest job opportunities and updates.
            </p>

            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-indigo-500"
              />

              <button
                className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} JobBoard. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="hover:text-indigo-400">
                Privacy
              </Link>

              <Link to="/terms" className="hover:text-indigo-400">
                Terms
              </Link>

              <Link to="/support" className="hover:text-indigo-400">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;