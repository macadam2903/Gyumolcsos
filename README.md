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
2. Navigálj a backend mappába és telepítsd a függőségeket:

cd backend
npm install

3. Hozd létre a .env fájlt a következővel:

DB_HOST=localhost
DB_USER=<mysql felhasználó>
DB_PASSWORD=<mysql jelszó>
DB_NAME=<adatbázis neve>
DB_PORT=3306
PORT=3000

4. Indítsd a backend-et:

npm run dev

5. Nyisd meg a frontend mappát és telepítsd a függőségeket:

cd ../frontend
npm install

6. Indítsd a frontendet:

npm run dev

7. Most a weboldal a http://localhost:5173 címen elérhető (Vite default port).

Megjegyzés: A képek a backend forrasKepek mappájából töltődnek.

2️⃣ Windows Forms alkalmazás telepítése (winforms branch)

1. Válts a winforms branch-re:

git checkout winforms

2. Nyisd meg a GyumolcsApp.sln megoldást Visual Studio-ban.

3. Ellenőrizd, hogy a Form1.cs-ben a baseUrl a backend URL-re mutat:

private string baseUrl = "http://localhost:3000";

4. Futtasd a projektet (F5 vagy Start Debugging).

5. A Windows Forms app látja a backendből a gyümölcsöket és a képeket is.

3️⃣ Konzolos alkalmazás telepítése (konzolos branch)

1. Válts a konzolos branch-re:

git checkout konzolos

2. Nyisd meg a .sln fájlt Visual Studio-ban.

3. Ellenőrizd, hogy a backend URL helyesen van beállítva a Program.cs-ben:

string baseUrl = "http://localhost:3000";

4. Futtasd a konzolos alkalmazást (F5).

   A konzolos alkalmazás lehetővé teszi a gyümölcsök listázását, hozzáadását, frissítését és törlését a parancssorból.

4️⃣ Fontos megjegyzések
- A backend forrasKepek mappáját a backend könyvtárban kell tartani, hogy a webes és Windows Forms kliens is elérje a képeket.

- Győződj meg róla, hogy a MySQL adatbázis fut, és a .env fájlban helyesek az adatok.

- Ha bármelyik kliens hibát jelez a képek betöltésénél, ellenőrizd, hogy a backend fut, és a http://localhost:3000/kepek/<kepnev> URL közvetlenül elérhető a böngészőből.
