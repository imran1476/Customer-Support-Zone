import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa'; 

const Footer = () => {
  return (
<footer className="bg-black mt-20 text-gray-400">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        
 <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-8 border-b border-gray-800 pb-10">
          
         
<div className="col-span-full sm:col-span-3 lg:col-span-1">
<h3 className="text-xl font-bold text-white mb-4">CS — Ticket System</h3>
 <p className="text-sm pr-4"> 
 A simple and efficient Customer Support Ticket Management system. Easily manage, track, and resolve customer issues in one place.
 </p>
  </div>

          
<div className="col-span-1">
 <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
 <ul className="space-y-2">
 <li><a href="#" className="hover:text-white transition duration-300">About Us</a></li>
 <li><a href="#" className="hover:text-white transition duration-300">Our Mission</a></li>
<li><a href="#" className="hover:text-white transition duration-300">Contact Sales</a></li>
 </ul>
  </div>

          
<div className="col-span-1">
<h4 className="text-lg font-semibold text-white mb-4">Services</h4>
<ul className="space-y-2">
<li><a href="#" className="hover:text-white transition duration-300">Products & Services</a></li>
<li><a href="#" className="hover:text-white transition duration-300">Customer Stories</a></li>
<li><a href="#" className="hover:text-white transition duration-300">Download Apps</a></li>
 </ul>
 </div>
 
 <div className="col-span-1">
<h4 className="text-lg font-semibold text-white mb-4">Information</h4>
<ul className="space-y-2">
 <li><a href="#" className="hover:text-white transition duration-300">Privacy Policy</a></li>
<li><a href="#" className="hover:text-white transition duration-300">Terms & Conditions</a></li>
<li><a href="#" className="hover:text-white transition duration-300">Join Us</a></li>
</ul>
 </div>

 <div className="col-span-full sm:col-span-1 lg:col-span-1">
<h4 className="text-lg font-semibold text-white mb-4">Social Links</h4>
<ul className="space-y-3">
<li className="flex items-center space-x-2">
 <FaTwitter className="text-white w-4 h-4" />
 <a href="#" className="hover:text-white transition duration-300 text-sm">@CS — Ticket System</a>
  </li>
<li className="flex items-center space-x-2">
 <FaLinkedinIn className="text-white w-4 h-4" />
<a href="#" className="hover:text-white transition duration-300 text-sm">@CS — Ticket System</a>
</li>
<li className="flex items-center space-x-2">
<FaFacebookF className="text-white w-4 h-4" />
 <a href="#" className="hover:text-white transition duration-300 text-sm">@CS — Ticket System</a>
</li>
<li className="flex items-center space-x-2">
<FaEnvelope className="text-white w-4 h-4" />
<a href="#" className="hover:text-white transition duration-300 text-sm">support@cst.com</a> </li>
  </ul>
</div>
</div>
        
 <div className="mt-8 text-center text-sm md:text-base">
  © {new Date().getFullYear()} CS — Ticket System. All rights reserved.
  </div>
   </div>
    </footer>
  );
};

export default Footer;