# Workshop Bosch - Zvládání změn a adaptace

Moderní webová aplikace pro interaktivní 8-hodinový workshop zaměřený na zvládání změn a adaptaci v pracovním prostředí.

## 📋 Obsah

Workshop je rozdělen do 7 modulů:

1. **Úvod a mapování** - Zmapování vlastní zkušenosti se změnou
2. **Odpor vůči změně** - Pochopení příčin odporu vůči změnám
3. **Moje reakce** - Individuální reflexe pracovní situace
4. **Orientace v nové situaci** - Praktické způsoby přístupu
5. **Skupinová práce** - Sdílení zkušeností s kolegy
6. **Podpora kolegů** - Jak podpořit kolegu v obtížné situaci
7. **Akční plán** - Osobní plán na další kroky

## 🚀 Spuštění

### Lokálně (development)

```bash
npm install
npm run dev
```

Aplikace poběží na `http://localhost:5173`

### Build pro produkci

```bash
npm run build
npm run preview
```

## 🌐 Deployment na Netlify

### Automaticky z GitHub

1. Push kódu na GitHub
2. Připojte repozitář na Netlify
3. Netlify automaticky buildne a deployuje

### Manuálně

```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 📊 Data a Admin Panel

### Kde se data ukládají?

- **Lokálně**: V prohlížeči (localStorage) každého účastníka
- **Admin panel**: Dostupný na `/admin` - vyžaduje přihlášení správce

### Přístup k datům

Admin panel umožňuje:
- Prohlídnutí všech sbíraných dat
- Filtrování podle modulů
- Export do CSV nebo JSON

**Správci**: milan.cap@zfound.cz, monnika.kosulicovou@tymovyinstitut.cz

## 🎨 Design

Aplikace používá:
- **Framework**: React + Vite
- **Styling**: Tailwind CSS
- **Paleta barev**: Tmavá modrá (#0f2e3f) + Oranžová (#ea7a4a) + Teal (#3a9bb8)
- **Font**: Inter sans-serif

## 🔐 Bezpečnost a soukromí

- Data účastníků zůstávají v jejich prohlížeči
- Admin panel je chráněn jednoduchou kontrolou jména
- Bez cookies nebo trackingu
- GDPR-friendly

## 📝 Přihlášení účastníků

Účastníci se přihlašují pomocí:
- Svého jména
- Pracovní pozice

Nejsou vyžadována hesla.

## 🛠️ Technický stack

- React 19
- Vite
- Tailwind CSS
- React Router
- Netlify Functions

## 📱 Responsivní design

Aplikace funguje na:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobil (< 768px)

## 🚨 Troubleshooting

### Aplikace se nenačítá
- Zkontrolujte, že port 5173 není obsazen
- Vymažte `node_modules` a spusťte `npm install` znovu

### Data se neukazují v admin panelu
- Zkontrolujte, že účastníci uložili odpovědi
- Otevřete DevTools → Application → Local Storage

### Import chyby
- Ujistěte se, že máte nainstalované všechny závislosti
- Spusťte `npm install`

## 📧 Kontakt a support

Pro otázky nebo issues kontaktujte:
- milan.cap@zfound.cz
- monnika.kosulicovou@tymovyinstitut.cz

---

**Vytvořeno pro Bosch** | LifeScale Business - Modul 05
