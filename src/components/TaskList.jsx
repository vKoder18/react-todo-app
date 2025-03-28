import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/actions/taskActions";

// Function to sort tasks by priority
const sortTasksByPriority = (tasks) => {
  const priorityOrder = { High: 1, Medium: 2, Low: 3 };
  return tasks.slice().sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
};

const TaskList = () => {
  const { tasks, error } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div className="max-w-3xl mx-auto mt-8 space-y-4">
      {error && <p className="text-red-500 text-center">{error}</p>}

      {sortTasksByPriority(tasks).map((task) => (
        <div
          key={task.id}
          className={`flex justify-between items-center p-4 mb-3 rounded-lg shadow-md ${
            task.priority === "High"
              ? "bg-red-100 border-l-4 border-red-500"
              : task.priority === "Medium"
              ? "bg-yellow-100 border-l-4 border-yellow-500"
              : "bg-green-100 border-l-4 border-green-500"
          }`}
        >
          <div>
            {/* ✅ Correctly displaying task.title */}
            <p className="text-lg font-semibold text-gray-800">{task.title}</p>

            {task.type === "outdoor" && (
              <p className="text-sm text-gray-600">🌤️ Weather: {task.weather || "N/A"}</p>
            )}
            <p
              className={`text-sm font-medium ${
                task.priority === "High"
                  ? "text-red-600"
                  : task.priority === "Medium"
                  ? "text-yellow-600"
                  : "text-green-600"
              }`}
            >
              Priority: {task.priority}
            </p>
          </div>

          <button
            onClick={() => dispatch(deleteTask(task.id))}
            className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
