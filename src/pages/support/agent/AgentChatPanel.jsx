import React, { useState } from 'react';

export default function AgentChatPanel({ ticket }) {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'client', text: 'Merhaba, sistemde hata alıyorum, yardımcı olabilir misiniz?', time: '14:20' },
    { id: 2, sender: 'agent', text: 'Merhaba, tabii ki konuyu inceliyorum. Detay paylaşabilir misiniz?', time: '14:21' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: 'agent',
      text: inputMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');
  };

  return (
    <div className="bg-white border border-[#DCE5E2] rounded-2xl flex flex-col h-[640px] shadow-sm">
      {/* Üst Bilgi */}
      <div className="p-4 border-b border-[#E4ECE9] flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#0E7C66] bg-[#E6F4F0] px-2.5 py-0.5 rounded-md">
              {ticket.id}
            </span>
            <h2 className="text-sm font-bold font-['Space_Grotesk',sans-serif] text-[#13212E]">
              {ticket.clientName}
            </h2>
            <span className="text-xs text-[#5A6B7B]">({ticket.company})</span>
          </div>
          <p className="text-xs text-[#5A6B7B] mt-1 line-clamp-1">{ticket.topic}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="px-3 py-1.5 text-xs font-semibold text-[#B42318] bg-[#FEE4E2] hover:bg-[#FECDCA] rounded-xl transition"
          >
            Görüşmeyi Sonlandır
          </button>
        </div>
      </div>

      {/* Mesajlaşma Alanı */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#F9FBFB]">
        {messages.map((msg) => {
          const isAgent = msg.sender === 'agent';
          return (
            <div
              key={msg.id}
              className={`flex flex-col ${isAgent ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[75%] p-3.5 rounded-2xl text-sm ${
                  isAgent
                    ? 'bg-[#13212E] text-white rounded-br-xs'
                    : 'bg-white text-[#13212E] border border-[#E4ECE9] rounded-bl-xs shadow-xs'
                }`}
              >
                <p>{msg.text}</p>
              </div>
              <span className="text-[10px] text-[#8C9BA5] mt-1 px-1">{msg.time}</span>
            </div>
          );
        })}
      </div>

      {/* Mesaj Gönderme Çubuğu */}
      <form onSubmit={handleSend} className="p-3 border-t border-[#E4ECE9] flex items-center gap-2 bg-white rounded-b-2xl">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Mesajınızı yazın..."
          className="flex-1 bg-[#F4F7F6] border border-[#DCE5E2] rounded-xl px-4 py-2.5 text-sm text-[#13212E] focus:outline-none focus:border-[#0E7C66]"
        />
        <button
          type="submit"
          className="bg-[#0E7C66] hover:bg-[#0B6351] text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition shadow-xs"
        >
          Gönder
        </button>
      </form>
    </div>
  );
}