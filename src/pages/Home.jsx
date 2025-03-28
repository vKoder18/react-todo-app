import React from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <div className="bg-blue-600 text-white py-4 px-8 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">📋 Task Manager</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-6 flex flex-col items-center space-y-6">
        {/* Task Input Component */}
        <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Task</h2>
          <TaskInput />
        </div>

        {/* Task List Component */}
        <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Tasks</h2>
          <TaskList />
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-4">
        © {new Date().getFullYear()} Task Manager. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
