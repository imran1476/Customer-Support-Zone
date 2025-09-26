import React from "react";

const TaskStatus = ({ inProgress = [], resolved = [], onComplete, onRemove }) => {
  return (
    <aside className="mt-11">
 <div className="bg-white rounded-lg shadow-sm p-4">
 <h4 className="font-semibold text-xl mb-3">Task Status</h4>
 {inProgress.length === 0 && (
  <div className="text-gray-500">Select a ticket to add to Task Status</div>
        )}

<div className="space-y-3">
{inProgress.map((t) => (
 <div key={t.id} className="border border-gray-200 rounded p-3 flex justify-between items-center">
  <div>
   <div className="flex">
    <div className="font-medium">{t.title}</div>
  <button
      onClick={() => onRemove(t.id)}
  className=" cursor-pointer ml-3 text-sm text-gray-500 underline hover:text-red-400"
                > Remove </button>
  </div>
<div className="text-xs text-gray-500">{t.id}</div>
 <button onClick={() => onComplete(t.id)} className="bg-green-600  w-[310px] text-white text-sm px-3 py-1 mt-3 rounded cursor-pointer hover:bg-green-800 "
   >  Complete</button>
</div>
 </div>
 ))}</div>
<div className="mt-6">
<h5 className="font-semibold text-xl mb-2">Resolved Task</h5>
 {resolved.length === 0 && <div className="text-gray-500">No resolved tasks yet.</div>}
  <div className="space-y-2 mt-2">
  {resolved.map((r) => (
 <div key={r.id} className="text-sm text-gray-700 bg-gray-50 p-2 rounded">
 {r.title}
 </div>
 ))}
  </div>
</div>
</div>
</aside>
  );
};
export default TaskStatus;
