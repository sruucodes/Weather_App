# Weather App

## Overview

Weather App is a React-based application that provides users with current weather conditions and forecasts for the next few days. The application uses the OpenWeatherMap API to fetch weather data and display it with a clean and user-friendly interface.

## Features

- **Search for Weather by City Name**: Users can input a city name to get the weather data.
- **Display Current Weather Conditions**: Shows temperature, humidity, and a weather description.
- **5-Day Weather Forecast**: Provides daily summaries and weather icons for the next few days.
- **Loading Indicators and Error Handling**: Improves the user experience with feedback during data fetching and error handling.

## Tech Stack

- **Frontend**: React.js
- **API**: OpenWeatherMap
- **CSS**: Custom styles for a modern and responsive UI

## Getting Started

### Prerequisites

- **Node.js (with npm)**: Download and install Node.js from [nodejs.org](https://nodejs.org/).
- **API Key**: Sign up for an API key from [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. **Install Dependencies**:

   Ensure you are in the project directory and run:

   ```bash
   npm install
   ```

3. **Configure API Key**:

   Replace `YOUR_API_KEY` in the `App.js` file with your actual OpenWeatherMap API key.

   ```javascript
   const API_KEY = 'YOUR_API_KEY';
   ```

4. **Start the Development Server**:

   ```bash
   npm start
   ```

   This will start the development server and open the application in your default web browser at [http://localhost:3000](http://localhost:3000).

## Usage

1. **Enter a City Name**:

   - Type the name of the city into the search input field.
   - Click the "Search" button to fetch weather data.

2. **View Current Weather**:

   - The application will display the current weather for the specified city, including temperature, humidity, and a weather description along with an icon representing the weather condition.

3. **View Forecast**:

   - Below the current weather section, a 5-day forecast will be shown with daily temperature and weather description along with icons for each day.

## Folder Structure

```
weather-app/
├── public/
│   └── index.html
├── src/
│   ├── App.css
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
└── README.md
```

- **`public/`**: Contains the `index.html` file which is the main HTML file.
- **`src/`**: Contains React components, CSS files, and other source code.
- **`package.json`**: Contains project metadata and dependencies.

## API Reference

### OpenWeatherMap API

- **Current Weather**: `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric`
- **5-Day Forecast**: `https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}&units=metric`

Replace `{city}` with the city name and `{API_KEY}` with your OpenWeatherMap API key.

## CSS Styling

- **Background Image**: A weather-related background image is set for a better visual experience.
- **Responsive Design**: The application is styled to be responsive and user-friendly.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

- **`npm start`**: Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.

- **`npm test`**: Launches the test runner in interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

- **`npm run build`**: Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed! See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

- **`npm run eject`**: **Note**: This is a one-way operation. Once you `eject`, you can't go back! If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project. Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them.

#Screenshots
<img width="1099" alt="Screenshot 2024-09-05 at 12 36 38 PM" src="https://github.com/user-attachments/assets/34265c57-d644-49a3-a689-18b59c0bfb5b">
