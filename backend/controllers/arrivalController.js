import db from "../Db.js";

export const getAllArrivals = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT e.*, g.nev as gyumolcs_nev
      FROM erkezes e
      JOIN gyumolcs g ON e.gyumolcsid = g.gyumolcsid
      ORDER BY e.erkezett DESC
    `);
    res.json(rows);
  } catch (error) {
    console.error("Hiba az érkezések lekérdezésekor:", error);
    res.status(500).json({ error: "Szerver hiba" });
  }
};