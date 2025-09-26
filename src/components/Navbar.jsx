import React from "react";

const Navbar = () => {
  return (
<header className="bg-white shadow-sm fixed top-0 left-0 w-full">
<div className=" mx-auto px-4 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="text-2xl font-bold text-[#130B2D] ml-10">CS — Ticket System</div>
 </div>

<div className="hidden md:flex items-center gap-6">
<nav className="flex gap-6 text-sm">
<a className="hover:text-indigo-600" href="#">Home</a>
<a className="hover:text-indigo-600" href="#">FAQ</a>
<a className="hover:text-indigo-600" href="#">Changelog</a>
<a className="hover:text-indigo-600" href="#">Blog</a>
<a className="hover:text-indigo-600" href="#">Download</a>
<a className="hover:text-indigo-600" href="#">Contact</a>
</nav>

<button className="bg-violet-600 text-white px-4 py-2 rounded-md text-sm mr-10 hover:bg-blue-900"> + New Ticket</button>
</div>

<div className="md:hidden">
<button className="bg-violet-600 text-white px-3 py-2 rounded-md text-sm"> + New</button>
</div>
</div>
 </header>
  );
};

export default Navbar;
