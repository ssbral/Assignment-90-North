import { IoSend } from "react-icons/io5";
import { useState } from "react";

const ChatArea = () => {
  const [inputText, setInputText] = useState(""); 
  const [messages, setMessages] = useState([]);

  // Handles input changes
  const handleOnChange = (event) => {
    setInputText(event.target.value);
  };

  // Handles sending the message
  const sendMessage = () => {
    if (inputText.trim() !== "") {
      setMessages([...messages, inputText]); 
      setInputText(""); 
    }
  };

  // Handles pressing Enter to send a message
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="bg-green-50 rounded-xl p-5 mt-20 h-[88vh] relative">
      <h1 className="text-xl font-bold my-3">Chat</h1>

      {/* Chat history */}
      <div className="overflow-y-auto h-[70%] mb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className="bg-white text-black p-3 rounded-lg my-2 shadow-sm"
          >
            {message}
          </div>
        ))}
      </div>

      {/* Input field */}
      <div className="absolute bottom-8 w-full">
        <div className="flex items-center px-5 space-x-2">
          <div className="w-full">
            <input
              className="w-full h-10 rounded px-3 border-2 border-black"
              value={inputText}
              onChange={handleOnChange}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
            />
          </div>
          <div
            className="text-green-600 text-3xl cursor-pointer"
            onClick={sendMessage}
          >
            <IoSend />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
