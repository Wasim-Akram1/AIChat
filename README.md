# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# AI Chat Interface

An AI-powered chat application with a plugin-style architecture. Users can interact with the chat by sending natural language messages, to trigger dedicated plugins. If no plugin matches the input, an AI (powered by OpenAI) generates a response.

## Table of Contents

- [Features]
- [Tech Stack]
- [Setup and Running Instructions]
- [Plugin Architecture and Parsing Logic]
- [Plugins Implemented and APIs Used]
- [Future Enhancements]

## Features

- **Dynamic Chat Interface:** A modern chat UI with polished design, smooth scrolling, and responsive styling.
- **Plugin-Style Commands:** Support for commands such as:
  - `weather in [city name]` – returns current weather information.
  - `calculate [expression]` – evaluates mathematical expressions.
  - `define [word]` – fetches definitions from a dictionary API.
- **AI-Driven Responses:** When no command is detected, an AI service provides the answer.
- **Chat Persistence:** History is saved to localStorage so messages persist on page reload.
- **Enhanced UX:** Loading states, error handling, and markdown support for rich text formatting.

## Tech Stack

- **React:** For building the interactive user interface.
- **React Hooks:** Utilized for state management and side-effects.
- **Axios:** For API fetching in various plugins.
- **React Markdown:** Renders markdown-formatted responses.
- **CSS3:** Custom styles with Flexbox and modern styling techniques.
- **OpenAI API:** For generating AI-powered responses.
- **Public APIs:**
  - [OpenWeatherMap API](https://openweathermap.org/api) for weather data.
  - [DictionaryAPI.dev](https://dictionaryapi.dev/) for definitions.

## Setup and Running Instructions

1. **Clone the Repository**

   git clone https://github.com/yourusername/AIChat.git
   cd AIChat

2. **Install Dependencies**

Make sure you have Node.js installed. Then, run: `npm install`


3. **Run the Application**

Start the Vite development server: `npm run dev`

## Plugin Architecture and Parsing Logic

The chat application utilizes a simple plugin manager to detect and execute plugin commands:

**Message Parsing:** The application uses regular expressions in the detectIntent(message) function (located inside plugins/PluginManager.jsx) to look for keywords such as "weather", "calculate", or "define". If a match is found, the command and its arguments are extracted and passed to the corresponding plugin.

**Plugin Manager:** The executePlugin(message) function in PluginManager.jsx checks if the user input matches any of the predefined plugin commands. If it does, the corresponding plugin function (e.g., fetchWeather, calculateExpression, or fetchDefinition) is executed and its result is returned.

**Fallback to AI Response:** If no plugin intent is detected, the chat component then calls getAIResponse(input) (in utils/aiService.js) to generate a response from the AI model.

This architecture allows for easy extension—new plugins can be added simply by defining their trigger pattern and execution logic, and registering them in the plugin manager.

## Plugins Implemented and APIs Used

Weather Plugin (weather in [city]):

**Plugin File:** plugins/WeatherPlugin.jsx

**API Used:** OpenWeatherMap API

**Functionality:** Fetches the current weather and temperature for the specified city.

Calculator Plugin (calculate [expression]):

**Plugin File:** plugins/CalculatorPlugin.jsx

**Functionality:** Safely evaluates mathematical expressions and returns the result. Uses a custom JavaScript evaluation function to process the expression.

Dictionary Plugin (define [word]):

**Plugin File:** plugins/DictionaryPlugin.jsx

**API Used:** DictionaryAPI.dev

**Functionality:** Looks up and returns the definition of a specified word.

**AI Response:**

**Utility File:** utils/aiService.js

**API Used:** OpenAI Chat Completion endpoint (or GPT API)

**Functionality:** Provides a dynamic, conversational answer when no plugin command is recognized.

## Future Enhancements

**Dynamic Plugin Loading:** Allow users to add new plugins at runtime.

**Advanced Natural Language Parsing:** Enhance the regex or integrate an NLP model for more robust command detection.

**Rich Text Customization:** Further improve markdown customization and message formatting.

**Improved Error Handling:** Add comprehensive error states and retry logic for API failures.
