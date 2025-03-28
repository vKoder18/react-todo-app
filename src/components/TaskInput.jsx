import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions/taskActions";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("indoor");

  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      const newTask = {
        id: Date.now(),
        title:task,
        priority,
        type,
        location,
      };
      dispatch(addTask(newTask));
      setTask("");
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Add a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <select onChange={(e) => setPriority(e.target.value)} value={priority}>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <select onChange={(e) => setType(e.target.value)} value={type}>
        <option value="indoor">Indoor</option>
        <option value="outdoor">Outdoor</option>
      </select>
      {type === "outdoor" && (
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      )}
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
