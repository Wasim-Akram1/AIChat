import { fetchWeather } from "./WeatherPlugin";
import { calculateExpression } from "./CalculatorPlugin";
import { fetchDefinition } from "./DictionaryPlugin";

const plugins = {
  weather: async (args) => fetchWeather(args),
  calc: (args) => calculateExpression(args),
  define: async (args) => fetchDefinition(args),
};

export const detectIntent = (message) => {
  if (message.match(/\bweather\b.*\b(in|for)\s(\w+)/i)) {
    return { command: "weather", args: message.match(/\b(in|for)\s(\w+)/i)[2] };
  }
  if (message.match(/\bcalculate\b\s([\d+\-*/]+)/i)) {
    return { command: "calc", args: message.match(/\bcalculate\b\s([\d+\-*/]+)/i)[1] };
  }
  if (message.match(/\bdefine\b\s(\w+)/i)) {
    return { command: "define", args: message.match(/\bdefine\b\s(\w+)/i)[1] };
  }
  return null;
};

export const executePlugin = async (message) => {
  const detected = detectIntent(message);
  if (detected) {
    const { command, args } = detected;
    return plugins[command] ? await plugins[command](args) : "❌ Unknown command!";
  }
  return null;
};
