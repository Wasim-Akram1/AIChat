import axios from "axios";

export const getAIResponse = async (userInput) => {
  const API_KEY = "ADD API Here";
  const API_URL = "https://api.openai.com/v1/chat/completions";

  try {
    const response = await axios.post(
      API_URL,
      {
        model: "gpt-3.5-turbo", 
        messages: [{ role: "user", content: userInput }],
        max_tokens: 150,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    const aiMessage = response.data.choices[0].message.content;
    return aiMessage;
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return "Sorry, I encountered an error generating a response.";
  }
};
