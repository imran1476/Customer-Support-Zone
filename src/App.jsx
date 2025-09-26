import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketList from "./components/TicketList";
import TaskStatus from "./components/TaskStatus";
import Footer from "./components/Footer";
import ticketsData from "./data/tickets";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
   
  const [tickets, setTickets] = useState(ticketsData);
 
  const [inProgress, setInProgress] = useState([]);
 
  const [resolved, setResolved] = useState([]);
 
  const inProgressCount = inProgress.length;
  const resolvedCount = resolved.length;

 
  const handleAddToTask = (ticket) => {
    
    if (inProgress.find((t) => t.id === ticket.id) || resolved.find((t)=>t.id===ticket.id)) {
      toast.info("Ticket already in Task Status or Resolved");
      return;
    }
    setInProgress((prev) => [...prev, ticket]);
    toast.success(`In-Progress: "${ticket.title}"`);
  };
 
  const handleComplete = (ticketId) => {
    const task = inProgress.find((t) => t.id === ticketId);
    if (!task) return;
    
    setInProgress((prev) => prev.filter((t) => t.id !== ticketId));
    
    setResolved((prev) => [task, ...prev]);
     
    setTickets((prev) => prev.filter((t) => t.id !== ticketId));
    toast.success(`Completed: "${task.title}"`);
  };


  const handleRemoveFromTask = (ticketId) => {
    const task = inProgress.find((t) => t.id === ticketId);
    if (!task) return;
    setInProgress((prev) => prev.filter((t) => t.id !== ticketId));
    toast.info(`Removed from Task Status: "${task.title}"`);
  };

  return (
 <div className="min-h-screen bg-gray-100 text-gray-800">
 <Navbar />
<div className="max-w-[1200px] mx-auto px-4">
<Banner inProgress={inProgressCount} resolved={resolvedCount} />
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
           
  <div className="lg:col-span-2">
  <h3 className="text-xl font-bold mb-4">Customer Tickets</h3>
 <TicketList tickets={tickets} onAddToTask={handleAddToTask} />
 </div>

           
 <div className="lg:col-span-1">
  <TaskStatus   
 inProgress={inProgress}
 resolved={resolved}
 onComplete={handleComplete}
    onRemove={handleRemoveFromTask} />
   </div>
 </div>
</div>

      <Footer />

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default App;
