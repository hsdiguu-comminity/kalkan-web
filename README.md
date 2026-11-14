# Kalkan – Web (Frontend)

> *"Tıklamadan önce sor."* – Kalkan'ın kullanıcıya görünen web yüzü.

**Sorumlu:** Ümmügülsüm Söğüt · **Diller:** HTML, CSS, JavaScript · **Stack:** React (Vite), Tailwind CSS

## Klasör yapısı

```
public/                 Statik dosyalar
src/
├── main.jsx, App.jsx   Uygulama girişi
├── assets/             Görseller, fontlar
├── components/ui/      Tasarım sistemi bileşenleri
├── components/layout/  Header, footer, sayfa iskeletleri
├── pages/
│   ├── home/           Ana sayfa
│   ├── auth/           Giriş, kayıt, 2FA
│   ├── chat/           Yapay zeka asistanı sohbet ekranı
│   ├── support/        Canlı destek & ajan paneli
│   ├── tools/          Link/QR, hash, parola sızıntı, e-posta başlığı
│   ├── reports/        İhbar formu
│   ├── dashboard/      Dolandırıcılık dashboard'u & harita
│   ├── academy/        Dersler, quizler, "Bu mesaj sahte mi?"
│   └── admin/          Admin paneli
├── api/                API istemcisi (OpenAPI sözleşmesine göre)
├── mocks/              MSW mock verileri
├── hooks/  store/  lib/  routes/
tests/unit/             Vitest
tests/e2e/              Playwright
```

## Kurulum

Node.js 22+ gerekir.

```bash
npm install
npm run dev        # http://localhost:5173
npm test           # Vitest birim testleri
npm run lint       # ESLint
npm run build      # Üretim derlemesi
```

Uçtan uca testler için bir kez `npx playwright install` çalıştırıp `npm run test:e2e` kullanın.
Tailwind CSS v4 kullanılır; tema ayarları `src/index.css` içinde `@theme` ile yapılır.

## Çalışma kuralları

- `main` korumalıdır; her değişiklik ayrı bir branch ve pull request ile gelir, en az 1 onay gerekir.
- Branch adları: `feature/<alan>-<kısa-açıklama>`, `fix/<alan>-<kısa-açıklama>`
- Commit mesajları: Conventional Commits (`feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`)
- `.env` dosyaları repoya eklenmez; örnek değerler `.env.example` içinde tutulur.
- Projenin tamamı için bkz. [`CLAUDE.md`](CLAUDE.md).
