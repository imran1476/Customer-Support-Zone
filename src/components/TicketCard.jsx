import React from "react";

const TicketCard = ({ ticket, onAddToTask }) => {
  return (
    <article
      onClick={() => onAddToTask(ticket)}
      className="cursor-pointer bg-white shadow-sm rounded-lg p-4 border hover:shadow-md transition"
    >
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-semibold text-md">{ticket.title}</h4>
          <p className="text-sm text-gray-600 mt-1">{ticket.description}</p>
        </div>

        <div className="text-right">
          <div className="text-xs text-gray-500">{ticket.id}</div>
          <div className="mt-2">
            <span className={`px-2 py-1 rounded text-xs font-medium ${ticket.priority.includes("HIGH") ? "bg-red-100 text-red-600" : ticket.priority.includes("MEDIUM") ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}>
              {ticket.priority}
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-gray-600">{ticket.customer}</div>
        <div className="text-sm text-gray-500">{ticket.createdAt}</div>
      </div>
    </article>
  );
};

export default TicketCard;
