import React from "react";
 
const TicketCard = ({ ticket, onAddToTask }) => {
  return (
    <article
      onClick={() => onAddToTask(ticket)}
      className="cursor-pointer bg-white shadow-sm rounded-lg p-4  hover:shadow-md transition"
    >
      <div className="flex justify-between items-start">
         
        <div>  <h4 className="font-semibold text-md">{ticket.title}</h4>
        </div>
        
           <div> <span className={`px-3 text-center py-1 rounded-xl text-xs font-medium ${ticket.status.includes("open") ? "bg-[#b9f8cf]  text-green-600" : ticket.status.includes("In-Progress") ? "bg-[#f8f3b9] text-yellow-700" : "bg-green-100 text-green-700"}`}>
              {ticket.status}
            </span></div>
              </div>

         <div>
           <p className="text-sm h-[50px] text-gray-600 mt-1">{ticket.description}</p>
           </div>
         
        

     
    

      <div className="flex justify-between items-center mt-4">
            
         <div className="flex justify-between items-center gap-3">
           <div className="text-xs text-gray-500">{ticket.id}</div>
          <div className=" ">
            <span className={`px-2 py-1 rounded text-xs font-medium ${ticket.priority.includes("HIGH") ? "bg-red-100 text-red-600" : ticket.priority.includes("MEDIUM") ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}>
              {ticket.priority}
            </span>
         
        </div>
         </div>
       <div className="flex justify-between items-center gap-3">
         <div className="text-sm text-gray-600">{ticket.customer}</div>
        <div className="text-sm text-gray-500">{ticket.createdAt}</div>
       </div>
      </div>
    </article>
  );
};

export default TicketCard;
