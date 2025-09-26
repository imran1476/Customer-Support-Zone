import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-[1200px] mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold text-indigo-700">CS — Ticket System</div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6 text-sm">
            <a className="hover:text-indigo-600" href="#">Home</a>
            <a className="hover:text-indigo-600" href="#">FAQ</a>
            <a className="hover:text-indigo-600" href="#">Blog</a>
            <a className="hover:text-indigo-600" href="#">Contact</a>
          </nav>

          <button className="bg-violet-600 text-white px-4 py-2 rounded-md text-sm">
            + New Ticket
          </button>
        </div>

        
        <div className="md:hidden">
          <button className="bg-violet-600 text-white px-3 py-2 rounded-md text-sm">
            + New
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
