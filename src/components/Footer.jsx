import React from "react";
// Font Awesome Icons-এর জন্য এই লাইনগুলো প্রয়োজন।
// আপনার প্রজেক্টে যদি Font Awesome সেটআপ না করা থাকে, তাহলে শুধু টেক্সট লিংকগুলো দেখাবে।
// ধরে নিচ্ছি আপনি Tailwind CSS ব্যবহার করছেন।
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa'; 

const Footer = () => {
  return (
    // Outer container with black background
    <footer className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-800 pb-10">
          
          {/* Column 1: CS - Ticket System (Description) */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">CS — Ticket System</h3>
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Our Mission</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Contact Sales</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition duration-300">Products & Services</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Customer Stories</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Download Apps</a></li>
            </ul>
          </div>

          {/* Column 4: Information */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Information</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Join Us</a></li>
            </ul>
          </div>

          {/* Column 5: Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Social Links</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <FaTwitter className="text-white" />
                <a href="#" className="hover:text-white transition duration-300 text-sm">@CS — Ticket System</a>
              </li>
              <li className="flex items-center space-x-2">
                <FaLinkedinIn className="text-white" />
                <a href="#" className="hover:text-white transition duration-300 text-sm">@CS — Ticket System</a>
              </li>
              <li className="flex items-center space-x-2">
                <FaFacebookF className="text-white" />
                <a href="#" className="hover:text-white transition duration-300 text-sm">@CS — Ticket System</a>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-white" />
                <a href="#" className="hover:text-white transition duration-300 text-sm">support@cst.com</a>
              </li>
            </ul>
          </div>

        </div>
        
        {/* Copyright Section */}
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} CS — Ticket System. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;