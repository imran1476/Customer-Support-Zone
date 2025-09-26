import React from "react";
import TicketCard from "./TicketCard";

const TicketList = ({ tickets, onAddToTask }) => {
  if (!tickets || tickets.length === 0) {
    return <div className="text-gray-500">No tickets available.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {tickets.map((t) => (
        <TicketCard key={t.id} ticket={t} onAddToTask={onAddToTask} />
      ))}
    </div>
  );
};

export default TicketList;
