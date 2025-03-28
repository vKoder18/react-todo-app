import { ADD_TASK, DELETE_TASK, SET_TASKS, SET_ERROR } from "../types";
import axios from "axios";

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;

// Add Task with API integration
export const addTask = (task) => async (dispatch) => {
  try {
    if (task.type === "outdoor") {
      const response = await axios.get(`${API_URL}?q=${task.location}&appid=${API_KEY}`);
      task.weather = response.data.weather[0].description;
    }
    dispatch({ type: ADD_TASK, payload: task });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: "Failed to fetch weather data" });
  }
};

// Delete Task
export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

// Load tasks from localStorage
export const setTasks = (tasks) => ({
  type: SET_TASKS,
  payload: tasks,
});
