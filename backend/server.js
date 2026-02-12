import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import * as fruitController from "./controllers/fruitController.js";
import arrivalRoutes from "./routes/arrivalRoutes.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Statikus képek
app.use("/kepek", express.static(path.join(__dirname, "forrasKepek")));

// Routes
app.get("/fruits", fruitController.getAllFruits);
app.get("/fruits/:id", fruitController.getFruitById);
app.post("/fruits", fruitController.createFruit);
app.put("/fruits/:id", fruitController.updateFruit);
app.delete("/fruits/:id", fruitController.deleteFruit);

// Szerver indítása
app.listen(PORT, () => {
  console.log(`Szerver fut a http://localhost:${PORT} címen`);

app.use("/arrivals", arrivalRoutes);
});

