import React from "react";

const Banner = ({ inProgress = 0, resolved = 0 }) => {
  return (
    <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="rounded-lg p-6 bg-gradient-to-r from-purple-600 to-purple-400 text-white shadow-md">
        <div className="text-sm">In-Progress</div>
        <div className="mt-6 text-4xl font-bold">{inProgress}</div>
      </div>

      <div className="rounded-lg p-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md">
        <div className="text-sm">Resolved</div>
        <div className="mt-6 text-4xl font-bold">{resolved}</div>
      </div>
    </section>
  );
};

export default Banner;
