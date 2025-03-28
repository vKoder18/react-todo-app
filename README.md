📚 Advanced React To-Do Application with API Integration
This is an advanced To-Do application built using React, Redux, and Vite with API integration, authentication, and priority-based task management.

🎯 Features
✅ Add, View, and Delete Tasks
✅ Task Prioritization (High, Medium, Low)
✅ API Integration with OpenWeather API for outdoor tasks
✅ User Authentication (Mock Login/Logout)
✅ Persistent Data with Local Storage
✅ Fully Responsive Design using Tailwind CSS
✅ Error Handling for API requests
✅ Tasks Sorted by Priority Automatically

🛠️ Tech Stack
Frontend: React, Redux, Vite

State Management: Redux Toolkit

Styling: Tailwind CSS

API Integration: OpenWeather API

Authentication: Redux for State Management

Deployment: Vercel

📸 Screenshots
🎨 Home Page
![Screenshot 2025-03-28 145919](https://github.com/user-attachments/assets/94d96e05-219f-4628-9462-b708f9d40dfc)

🔐 Login Page
![Screenshot 2025-03-28 145852](https://github.com/user-attachments/assets/27970343-7057-4624-bc04-66550ec93e28)

🚀 Getting Started
Prerequisites
Node.js installed (v18+ recommended)

Git installed

Basic knowledge of React and Redux

📥 Installation and Setup

1. Clone the Repository
git clone https://github.com/your-username/react-todo-app.git
cd react-todo-app

2. Install Dependencies
npm install

3. Add Environment Variables
Create a .env file in the root directory and add:
VITE_REACT_APP_WEATHER_API_KEY=your_openweather_api_key

4. Credentials to login:
 username : "admin"
 password : "password"

5.▶️ Run the Application
npm run dev
The app will be available at:
👉 http://localhost:5173

🌐 API Integration
This application uses the OpenWeather API to fetch weather data for outdoor tasks.
Get your API key from OpenWeather and add it to the .env file.
