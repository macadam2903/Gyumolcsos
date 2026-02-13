# 🍎 Gyümölcs Nyilvántartó Rendszer

Ez a projekt egy teljes CRUD (Create, Read, Update, Delete) rendszer gyümölcsök kezelésére.

A projekt 4 részből áll:

- 🌐 Frontend (React webalkalmazás)
- 🖥 Backend (Node.js REST API)
- 🪟 Windows Forms asztali alkalmazás
- 💻 Konzolos alkalmazás

Minden projekt a `main` branch-ben található.

---

# 📁 Projekt struktúra

```
/backend
/frontend
/winforms
/consoleapp
```

---

# ⚙️ Rendszerkövetelmények

Telepíteni kell:

- Node.js (v18+ ajánlott)
- npm
- .NET 6 vagy újabb
- Visual Studio 2022 (WinForms miatt ajánlott)
- SQL Server vagy SQLite (attól függően mit használtok)

---

# 🚀 Backend indítása

1️⃣ Lépj be a backend mappába:

```bash
cd backend
```

2️⃣ Telepítsd a csomagokat:

```bash
npm install
```

3️⃣ Indítsd el a szervert:

```bash
node server.js
```

Ha minden jó:

```
Server running on http://localhost:3000
```

---

## 📡 Backend API végpontok

| Művelet | Endpoint |
|----------|----------|
| Összes gyümölcs | GET /fruits |
| Egy gyümölcs | GET /fruits/:id |
| Új gyümölcs | POST /fruits |
| Módosítás | PUT /fruits/:id |
| Törlés | DELETE /fruits/:id |

---

# 🌐 Frontend indítása (React)

1️⃣ Lépj be:

```bash
cd frontend
```

2️⃣ Telepítés:

```bash
npm install
```

3️⃣ Indítás:

```bash
npm start
```

A weboldal itt fog futni:

```
http://localhost:3001
```

---

## 🖼 Képek kezelése

A gyümölcs képek helye:

```
backend/forrasKepek/
```

A backendben az adatbázisban a `src` mező tartalmazza a fájlnevet:

Példa:
```
alma.jpg
korte.jpg
banan.jpg
```

A React így hivatkozik rá:

```js
<img src={`/forrasKepek/${fruit.src}`} />
```

---

# 🪟 Windows Forms alkalmazás indítása

1️⃣ Nyisd meg a `winforms` mappát Visual Studio-ban  
2️⃣ Állítsd be startup projectnek  
3️⃣ Futtatás (F5)

⚠ Fontos: A backendnek futnia kell előtte!

Az alkalmazás a következő API-t használja:

```
http://localhost:3000/fruits
```

---

# 💻 Konzolos alkalmazás

1️⃣ Nyisd meg a `consoleapp` projektet Visual Studio-ban  
2️⃣ Futtasd

Ez is a backend REST API-t használja.

---

# 🔗 Kapcsolat a részek között

```
Frontend  ---> Backend API ---> Adatbázis
WinForms  ---> Backend API ---> Adatbázis
Console   ---> Backend API ---> Adatbázis
```

Minden kliens ugyanazt az API-t használja.

---

# 🛠 Gyakori hibák

### ❌ 500 Internal Server Error

→ Backend nem fut  
→ Hibás adatbázis kapcsolat  
→ Hibás ID törlésnél  

### ❌ Képek nem jelennek meg

→ Nem jó helyen van a `forrasKepek` mappa  
→ Hibás fájlnév az adatbázisban  

### ❌ CORS hiba

A backendben legyen:

```js
const cors = require("cors");
app.use(cors());
```

---

# 👨‍💻 Fejlesztői információ

Ez a projekt:

- REST API kommunikációt használ
- CRUD műveleteket valósít meg
- Több klienssel dolgozik (web + desktop + console)
- JSON adatcserét használ

---

# 📌 Fontos

A backendnek mindig futnia kell, mielőtt:

- Frontend indul
- WinForms indul
- Console app indul

---

# 📷 Példa működés

✔ Gyümölcs hozzáadása  
✔ Gyümölcs módosítása  
✔ Gyümölcs törlése  
✔ Képek megjelenítése  
✔ Lista frissítése  
