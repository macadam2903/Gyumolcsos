import db from '../Db.js';

export const getAll = async () => {
  const [rows] = await db.query(`
    SELECT e.*, g.nev as gyumolcs_nev 
    FROM erkezes e
    JOIN gyumolcs g ON e.gyumolcsid = g.gyumolcsid
    ORDER BY e.erkezett DESC
  `);
  return rows;
};