import React, { useState } from 'react';

export default function CaseNotes({ ticket }) {
  const [note, setNote] = useState('');
  const [notesList, setNotesList] = useState([
    { id: 1, text: 'Müşteri ödeme ekranında 500 hatası aldığını belirtti. Loglar inceleniyor.', date: '14:22' }
  ]);

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!note.trim()) return;

    const newNoteItem = {
      id: Date.now(),
      text: note,
      date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setNotesList([newNoteItem, ...notesList]);
    setNote('');
  };

  return (
    <div className="bg-white border border-[#DCE5E2] rounded-2xl p-4 flex flex-col h-[640px] shadow-sm">
      <h2 className="text-base font-bold font-['Space_Grotesk',sans-serif] text-[#13212E] mb-3">
        Vaka Notları ve Detay
      </h2>

      {/* Talep Özeti Kartı */}
      <div className="bg-[#F4F7F6] p-3.5 rounded-xl border border-[#E4ECE9] mb-4 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-[#0E7C66]">{ticket.id}</span>
          <span className="text-[#5A6B7B]">{ticket.waitTime} bekliyor</span>
        </div>
        <div>
          <p className="text-xs font-semibold text-[#13212E]">{ticket.clientName}</p>
          <p className="text-[11px] text-[#5A6B7B]">{ticket.company}</p>
        </div>
      </div>

      {/* Not Ekleme Formu */}
      <form onSubmit={handleAddNote} className="mb-4 space-y-2">
        <textarea
          rows="3"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Bu vaka için dahili not ekleyin..."
          className="w-full bg-[#F4F7F6] border border-[#DCE5E2] rounded-xl p-3 text-xs text-[#13212E] focus:outline-none focus:border-[#0E7C66] resize-none"
        />
        <button
          type="submit"
          className="w-full bg-[#13212E] hover:bg-[#1D3043] text-white py-2 rounded-xl text-xs font-semibold transition shadow-xs"
        >
          Not Ekle
        </button>
      </form>

      {/* Geçmiş Notlar Listesi */}
      <div className="flex-1 overflow-y-auto space-y-2.5 pr-1">
        <span className="text-xs font-bold text-[#5A6B7B] block mb-1">Geçmiş Notlar</span>
        {notesList.map((item) => (
          <div key={item.id} className="bg-[#F9FBFB] border border-[#E4ECE9] p-3 rounded-xl">
            <p className="text-xs text-[#13212E] mb-1.5">{item.text}</p>
            <span className="text-[10px] text-[#8C9BA5] block text-right">{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}