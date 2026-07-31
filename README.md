# 🎬 Netflix Clone – FullStack con Next.js, Tailwind CSS & NeDB

Benvenuto nel repository del **Netflix Clone**, un’app full-stack che riproduce l’esperienza base di una piattaforma di streaming.

Il progetto combina Next.js, TypeScript, Tailwind CSS e un database embedded per offrire autenticazione, API e interfaccia responsive.

[![Next.js](https://img.shields.io/badge/Next.js-16.2.11-black?style=flat&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![NeDB](https://img.shields.io/badge/NeDB-embedded-4CAF50?style=flat)](https://github.com/louischatriot/nedb)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

![screenshot](/screenshot.png)

## ✨ Tecnologie utilizzate

| Area | Tecnologie |
|------|------------|
| **Frontend** | React, Next.js (Pages Router), TypeScript |
| **Stile** | Tailwind CSS |
| **Database** | NeDB (embedded) |
| **Autenticazione** | NextAuth.js |
| **State Management** | Zustand |
| **Data Fetching** | SWR |

---

## 🚀 Funzionalità principali

- Autenticazione email/password con NextAuth
- Gestione utenti e sessioni JWT
- Database locale NeDB con seed automatico
- API routes in `pages/api`
- UI responsive con Tailwind
- Pagina di riproduzione film in `pages/watch/[movieId].tsx`
- Selezione preferiti e storico dell’utente

---

## 📦 Prerequisiti

- Node.js 16.x o superiore
- npm
- Editor di codice (es. VS Code)

---

## 🛠 Installazione

```bash
git clone https://github.com/tuo-username/netflix-clone.git
```

per installare le dipendenze

```bash
cd netflix-clone
npm install
```

> Nota: `npm run dev` esegue automaticamente lo script `predev` per popolare il database se necessario.

---

## ⚙️ Configurazione dell'ambiente

Crea un file `.env.local` nella root del progetto e aggiungi:

```bash
NEXTAUTH_JWT_SECRET=inserisci_una_stringa_sicura
NEXTAUTH_SECRET=inserisci_un_altra_stringa_sicura
NEXTAUTH_URL=http://localhost:3000
```

Suggerimento: genera una stringa sicura con `openssl rand -base64 32`.

---

## ▶️ Avvio dell'applicazione

```bash
npm run dev
```

Apri `http://localhost:3000` nel browser.

---

## 📜 Script disponibili

| Comando | Descrizione |
|---------|-------------|
| `npm run dev` | Avvia il server di sviluppo |
| `npm run build` | Costruisce l’app per produzione |
| `npm run start` | Avvia la build di produzione |
| `npm run lint` | Esegue ESLint |

---

## 🗂 Struttura del progetto

```text
components/         # Componenti React riutilizzabili
hooks/              # Custom hook
lib/                # Configurazioni e helper (db, auth, fetcher)
pages/              # Route Next.js e API routes
  api/              # Endpoint API
  watch/            # Pagina di riproduzione film
public/             # Asset statici
data/               # File NeDB generati automaticamente
scripts/            # Script di utilità
styles/             # CSS globali
```

---

## 🔌 API principali

| Metodo | Endpoint | Descrizione |
|--------|----------|-------------|
| POST | `/api/register` | Registra un nuovo utente |
| POST | `/api/auth/...` | Login gestito da NextAuth |
| GET | `/api/current` | Recupera l’utente loggato |
| GET | `/api/movies` | Ottiene la lista dei film |
| GET | `/api/movies/[movieId]` | Dettagli di un film |
| GET | `/api/random` | Restituisce un film casuale |
| POST | `/api/favorite` | Aggiunge un film ai preferiti |
| DELETE | `/api/favorite` | Rimuove un film dai preferiti |
| GET | `/api/favorites` | Recupera i film preferiti |

---

## 🧩 Personalizzazione

- `lib/db.ts`: gestisce il database NeDB e salva i file in `data/`
- `lib/authOptions.ts`: configurazione NextAuth con provider Credentials
- `pages/auth.tsx`: pagina di login personalizzata
- `pages/api/movies/`: logica film e dettagli
- `components/` e `hooks/`: UI e logiche client
- `tailwind.config.js`: impostazioni di stile

---

## 🤝 Contribuire

Se vuoi migliorare il progetto, apri una issue oppure invia una pull request.

---

## 📄 Licenza

Questo progetto è rilasciato sotto licenza MIT.
