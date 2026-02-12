# Gyümölcs Nyilvántartó Rendszer

Ez a projekt egy gyümölcs nyilvántartó rendszer, ami háromféle klienset tartalmaz:

- **Webes frontend + Node.js/Express backend** (`frontend-backend` branch)  
- **Windows Forms asztali alkalmazás** (`winforms` branch)  
- **Konzolos alkalmazás** (`konzolos` branch)  

A rendszer lehetővé teszi a gyümölcsök listázását, hozzáadását, frissítését és törlését, valamint az érkezések megtekintését.

---

## Általános követelmények

- Node.js v24.x (a backendhez)  
- NPM vagy Yarn (a frontendhez)  
- .NET 6 vagy .NET 7 (Windows Forms és konzolos apphoz)  
- Git  

---

## Branch-ek

| Branch neve          | Leírás                                |
|---------------------|--------------------------------------|
| frontend-backend     | Webes frontend (React/Vite) + backend (Node.js/Express) |
| winforms             | Windows Forms asztali alkalmazás     |
| konzolos             | Konzolos alkalmazás (.NET)           |

---

## 1️⃣ Frontend + Backend telepítése (`frontend-backend` branch)

1. Klónozd a repót és válts a megfelelő branch-re:

```bash
git clone <repo-url>
cd <repo-name>
git checkout frontend-backend
```
Rendben! 😎 Akkor írok egy teljes, kész README.md fájlt, amit közvetlenül be tudsz tenni a GitHub repódba, a branch-ekkel, telepítéssel, futtatással és fontos megjegyzésekkel együtt.

# Gyümölcs Nyilvántartó Rendszer


Ez a projekt egy gyümölcs nyilvántartó rendszer, amely háromféle klienset tartalmaz:


- **Webes frontend + Node.js/Express backend** (`frontend-backend` branch)  
- **Windows Forms asztali alkalmazás** (`winforms` branch)  
- **Konzolos alkalmazás** (`konzolos` branch)  


A rendszer lehetővé teszi a gyümölcsök listázását, hozzáadását, frissítését és törlését, valamint az érkezések megtekintését.


---


## Általános követelmények


- Node.js v24.x (a backendhez)  
- NPM vagy Yarn (a frontendhez)  
- .NET 6 vagy .NET 7 (Windows Forms és konzolos apphoz)  
- Git  
- MySQL szerver a backendhez


---


## Branch-ek


| Branch neve          | Leírás                                |
|---------------------|--------------------------------------|
| frontend-backend     | Webes frontend (React/Vite) + backend (Node.js/Express) |
| winforms             | Windows Forms asztali alkalmazás     |
| konzolos             | Konzolos alkalmazás (.NET)           |


---


## 1️⃣ Frontend + Backend telepítése (`frontend-backend` branch)


1. Klónozd a repót és válts a megfelelő branch-re:



Backend telepítése:

cd backend
npm install

.env fájl létrehozása a backendhez:

DB_HOST=localhost
DB_USER=<mysql felhasználó>
DB_PASSWORD=<mysql jelszó>
DB_NAME=<adatbázis neve>
DB_PORT=3306
PORT=3000

Indítsd a backend-et:

npm run dev

Frontend telepítése és indítása:

cd ../frontend
npm install
npm run dev

Most a weboldal elérhető: http://localhost:5173

Fontos: A képek a backend forrasKepek mappájából töltődnek.

2️⃣ Windows Forms alkalmazás telepítése (winforms branch)

Válts a winforms branch-re:

git checkout winforms

Nyisd meg a GyumolcsApp.sln megoldást Visual Studio-ban.

Ellenőrizd a backend URL-t a Form1.cs-ben:

private string baseUrl = "http://localhost:3000";

Futtasd a projektet (F5 vagy Start Debugging).

A Windows Forms app látja a backendből a gyümölcsöket és a képeket is.

3️⃣ Konzolos alkalmazás telepítése (konzolos branch)

Válts a konzolos branch-re:

git checkout konzolos

Nyisd meg a KonzolosApp.sln megoldást Visual Studio-ban.

Ellenőrizd a backend URL-t a Program.cs-ben:

string baseUrl = "http://localhost:3000";

Futtasd a konzolos alkalmazást (F5).

A konzolos alkalmazás lehetővé teszi a gyümölcsök listázását, hozzáadását, frissítését és törlését parancssorból.

4️⃣ Backend képek konfigurálása

Másold a forrasKepek mappát a backend könyvtárába:

backend/
 ├─ controllers/
 ├─ routes/
 ├─ forrasKepek/  <-- képek ide
 └─ server.js

Backend server.js:

import path from "path";
import { fileURLToPath } from "url";
import express from "express";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();


app.use("/kepek", express.static(path.join(__dirname, "forrasKepek")));

Ezzel mind a webes frontend, mind a Windows Forms app HTTP-n keresztül éri el a képeket:

<img src="http://localhost:3000/kepek/alma.jpg" alt="Alma" />
picFruit.LoadAsync("http://localhost:3000/kepek/alma.jpg");
5️⃣ Fontos megjegyzések

Ellenőrizd, hogy a MySQL adatbázis fut és a .env fájlban helyesek az adatok.

Győződj meg róla, hogy a backend fut, mielőtt bármelyik klienshez csatlakozol.

Ha bármelyik kliens hibát jelez a képek betöltésénél, ellenőrizd a http://localhost:3000/kepek/<kepnev> URL-t a böngészőben.

A Windows Forms és web frontend ugyanazt a backend statikus mappát használja a képekhez, így nincs kettősség.

6️⃣ Projekt struktúra
repo/
 ├─ frontend-backend/       # Web + Backend
 │   ├─ frontend/           # React/Vite frontend
 │   └─ backend/            # Node.js backend
 │       ├─ controllers/
 │       ├─ routes/
 │       ├─ forrasKepek/    # Képek ide
 │       └─ server.js
 ├─ winforms/               # Windows Forms app
 └─ konzolos/               # Konzolos .NET app
7️⃣ Kapcsolódás a backendhez

Backend API végpontok:

HTTP metódus	URL	Leírás
GET	/fruits	Összes gyümölcs lekérdezése
GET	/fruits/:id	Egy gyümölcs lekérdezése
POST	/fruits	Új gyümölcs hozzáadása
PUT	/fruits/:id	Gyümölcs frissítése
DELETE	/fruits/:id	Gyümölcs törlése
GET	/arrivals	Összes érkezés lekérdezése
8️⃣ Kapcsolat

Backend és frontend: http://localhost:3000

Web frontend: http://localhost:5173 (Vite)

Windows Forms és konzolos app: csatlakozás a backend API-hoz

Ez a README teljes telepítési útmutatót és leírást ad minden branch-hez és klienshez.
Győződj meg róla, hogy a MySQL adatbázis fut, és a .env fájlban helyesek az adatok.

Ha bármelyik kliens hibát jelez a képek betöltésénél, ellenőrizd, hogy a backend fut, és a http://localhost:3000/kepek/<kepnev> URL közvetlenül elérhető a böngészőből.
