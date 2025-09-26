import React from "react";

const TaskStatus = ({ inProgress = [], resolved = [], onComplete, onRemove }) => {
  return (
    <aside>
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h4 className="font-semibold mb-3">Task Status</h4>

        {inProgress.length === 0 && (
          <div className="text-gray-500">No tasks in progress.</div>
        )}

        <div className="space-y-3">
          {inProgress.map((t) => (
            <div key={t.id} className="border rounded p-3 flex justify-between items-center">
              <div>
                <div className="font-medium">{t.title}</div>
                <div className="text-xs text-gray-500">{t.id}</div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <button
                  onClick={() => onComplete(t.id)}
                  className="bg-green-600 text-white text-sm px-3 py-1 rounded"
                >
                  Complete
                </button>

                <button
                  onClick={() => onRemove(t.id)}
                  className="text-sm text-gray-500 underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

     
        <div className="mt-6">
          <h5 className="font-semibold mb-2">Resolved Task</h5>
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
