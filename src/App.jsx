// Geçici başlangıç sayfası. Yönlendirme (src/routes/AppRouter.jsx) eklenince bu bileşen onu render edecek.
export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2 bg-slate-50 p-6 text-center">
      <h1 className="text-4xl font-bold text-slate-900">Kalkan</h1>
      <p className="text-lg text-slate-600">Tıklamadan önce sor.</p>
    </main>
  );
}
