import React, { useState } from 'react';
import QueuePanel from './QueuePanel';
import AgentChatPanel from './AgentChatPanel';
import CaseNotes from './CaseNotes';

const INITIAL_TICKETS = [
  {
    id: 'TK-1049',
    topic: 'Ödeme entegrasyonu hata kodu 500 alıyorum',
    risk: 'Yüksek',
    status: 'waiting',
    waitTime: '4 dk',
    clientName: 'Ahmet Yılmaz',
    company: 'Yılmazlar Ltd.'
  },
  {
    id: 'TK-1050',
    topic: 'API anahtarımı yenilemem gerekiyor',
    risk: 'Orta',
    status: 'active',
    waitTime: '12 dk',
    clientName: 'Zeynep Kaya',
    company: 'Kaya Yazılım'
  },
  {
    id: 'TK-1051',
    topic: 'Şifre sıfırlama e-postası ulaşmıyor',
    risk: 'Düşük',
    status: 'closed',
    waitTime: '25 dk',
    clientName: 'Mehmet Demir',
    company: 'Demir Bilişim'
  }
];

export default function AgentDashboard() {
  const [tickets] = useState(INITIAL_TICKETS);
  const [selectedId, setSelectedId] = useState('TK-1050');
  const [filter, setFilter] = useState('all');

  const filteredTickets = tickets.filter(t => {
    if (filter === 'all') return true;
    return t.status === filter;
  });

  const selectedTicket = tickets.find(t => t.id === selectedId) || tickets[0];

  return (
    <div className="min-h-screen bg-[#F4F7F6] p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-[#DCE5E2] shadow-sm">
          <div>
            <h1 className="text-2xl font-bold font-['Space_Grotesk',sans-serif] text-[#13212E]">
              Canlı Destek Uzman Paneli
            </h1>
            <p className="text-sm text-[#5A6B7B] mt-1">
              Aktif talepleri yönetin, müşterilerle yazışın ve vaka notlarını güncelleyin.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 bg-[#E6F4F0] text-[#0E7C66] px-3.5 py-1.5 rounded-xl text-xs font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
              Çevrimiçi (Aktif)
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-3">
            <QueuePanel
              tickets={filteredTickets}
              selectedId={selectedId}
              onSelect={setSelectedId}
              filter={filter}
              onFilterChange={setFilter}
            />
          </div>

          <div className="lg:col-span-6">
            <AgentChatPanel ticket={selectedTicket} />
          </div>

          <div className="lg:col-span-3">
            <CaseNotes ticket={selectedTicket} />
          </div>
        </div>
      </div>
    </div>
  );
}