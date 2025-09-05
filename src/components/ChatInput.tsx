// "use client";
// import React, { useState } from "react";

// export default function ChatInput({ onSend }: { onSend: (msg: string) => void }) {
//   const [input, setInput] = useState("");

//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         if (!input.trim()) return;
//         onSend(input);
//         setInput("");
//       }}
//       className="flex mt-2"
//     >
//       <input
//         className="flex-1 border p-2 rounded-l-lg"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Type a message..."
//       />
//       <button className="bg-blue-500 text-white px-4 rounded-r-lg">Send</button>
//     </form>
//   );
// }

"use client";
import React, { useState } from "react";

export default function ChatInput({ onSend, disabled }: { onSend: (msg: string) => void, disabled?: boolean }) {
  const [input, setInput] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!input.trim()) return;
        onSend(input);
        setInput("");
      }}
      className="flex mt-3"
    >
      <input
        className="flex-1 border border-gray-300 p-3 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        disabled={disabled}
      />
      <button
        className={`px-5 rounded-r-xl text-white font-semibold ${
          disabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
        }`}
        disabled={disabled}
      >
        Send
      </button>
    </form>
  );
}
