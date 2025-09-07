import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="border-t py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-xl font-semibold">
          Cilli<span className="text-blue-500 font-bold">Blog</span>
        </div>

        {/* Copyright */}
        <div className="text-gray-400 text-sm mt-2 md:mt-0">
          <p>&copy; {new Date().getFullYear()} CilliBlog. All rights reserved.</p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#">
            <FaGithub className="h-6 hover:text-blue-500 transition" />
          </a>
          <a href="#">
            <BsYoutube className="h-6 hover:text-red-500 transition" />
          </a>
          <a href="#">
            <FaLinkedin className="h-6 hover:text-blue-600 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
