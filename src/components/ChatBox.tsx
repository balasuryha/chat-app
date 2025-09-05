// "use client";
// import React from "react";

// type Message = { role: "user" | "bot"; text: string };

// export default function ChatBox({ messages }: { messages: Message[] }) {
//   return (
//     <div className="p-4 h-96 overflow-y-auto border rounded-lg bg-white">
//       {messages.map((m, i) => (
//         <div
//           key={i}
//           className={`my-2 ${
//             m.role === "user" ? "text-blue-600" : "text-green-600"
//           }`}
//         >
//           <strong>{m.role}:</strong> {m.text}
//         </div>
//       ))}
//     </div>
//   );
// }

"use client";
import React, { useEffect, useRef } from "react";

type Message = { role: "user" | "bot"; text: string };

export default function ChatBox({ messages, loading }: { messages: Message[], loading?: boolean }) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="p-4 h-96 overflow-y-auto border rounded-xl bg-white shadow-md">
      {messages.map((m, i) => (
        <div
          key={i}
          className={`my-2 max-w-[80%] p-2 rounded-xl break-words ${
            m.role === "user"
              ? "bg-blue-100 text-blue-800 ml-auto"
              : "bg-green-100 text-green-800"
          }`}
        >
          {m.text}
        </div>
      ))}

      {loading && (
        <div className="my-2 max-w-[80%] p-2 rounded-xl bg-gray-100 text-gray-700 animate-pulse">
          Bot is typing...
        </div>
      )}
      <div ref={bottomRef} />
    </div>
  );
}
