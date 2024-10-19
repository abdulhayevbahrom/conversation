import axios from "axios";
import React, { useState } from "react";

function Router() {
  const api_key = process.env.REACT_APP_API_URL;
  const [message, setMessage] = useState("");

  const [response, setResponse] = useState("");

  const handleSend = async () => {
    try {
      const API = "https://api.openai.com/v1/chat/completions";
      const body = {
        model: "gpt-4",
        messages: [{ role: "user", content: message }],
      };

      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + api_key,
      };

      const response = await axios.post(API, body, { headers });
      setResponse(response.data.choices[0].message.content); // Jav
    } catch (error) {
      console.error("xato>>", error); // Xatolarni ko'rsatish
    }
  };

  return (
    <div className="app">
      <main>
        <nav>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Savolingizni kiriting..."
          />
          <button onClick={handleSend}>Yuborish</button>
        </nav>
        <div className="response">
          <p>{response}</p>
        </div>
      </main>
    </div>
  );
}

export default Router;
