import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-wrap justify-evenly items-center ">
          {/* Company Logo */}
          <div className="w-full sm:w-1/3 text-center sm:text-left mb-6 sm:mb-0">
            <h2 className="text-2xl font-bold">MyChat Logo</h2>
            <p className="text-sm mt-2 text-gray-400">Chat with the world</p>
          </div>

          {/* Navigation Menu */}
          <div className="w-full sm:w-1/3 text-center mb-6 sm:mb-0">
            <nav>
              <ul className="flex justify-center space-x-6">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Social Media Links */}
          <div className="w-full sm:w-1/3 text-center sm:text-right">
            <p className="mb-3 text-gray-400">Follow us:</p>
            <div className="flex justify-center sm:justify-end space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition duration-300"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} MyChat. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
