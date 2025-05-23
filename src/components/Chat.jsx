import { useState, useEffect } from "react";
import { executePlugin } from "../plugins/PluginManager";
import { getAIResponse } from "../utils/aiService";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const savedMessages = localStorage.getItem("chatHistory");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(messages));
  }, [messages]);

  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", content: input };
    const newMessages = [...messages, userMessage];

    let responseContent = await executePlugin(input);

    if (!responseContent) {
      responseContent = await getAIResponse(input);
    }
    
    newMessages.push({ sender: "assistant", content: responseContent });

    setMessages(newMessages);
    setInput("");
  };

  return (
    <div className="chat-container">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.content}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Chat with me!"
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
