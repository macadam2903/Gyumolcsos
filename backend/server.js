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

// Statikus képek – ide másold át a frontend forrasKepek mappáját
app.use("/kepek", express.static(path.join(__dirname, "forrasKepek")));

// Fruit routes
app.get("/fruits", fruitController.getAllFruits);
app.get("/fruits/:id", fruitController.getFruitById);
app.post("/fruits", fruitController.createFruit);
app.put("/fruits/:id", fruitController.updateFruit);
app.delete("/fruits/:id", fruitController.deleteFruit);

// Arrival routes
app.use("/arrivals", arrivalRoutes);

// Szerver indítása
app.listen(PORT, () => {
  console.log(`Szerver fut a http://localhost:${PORT} címen`);
});