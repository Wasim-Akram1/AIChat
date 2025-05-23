import axios from "axios";

export const fetchDefinition = async (word) => {
  try {
    const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    return response.data[0]?.meanings[0]?.definitions[0]?.definition || "❌ Word not found!";
  } catch {
    return "❌ Could not fetch definition!";
  }
};
