import React from "react";

const Footer = () => {
  return (
    <footer className="mt-12 bg-white border-t">
      <div className="max-w-[1200px] mx-auto px-4 py-6 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center">
        <div>© {new Date().getFullYear()} CS — Ticket System</div>
        <div className="mt-2 md:mt-0">Good luck 👍</div>
      </div>
    </footer>
  );
};

export default Footer;
