import db from '../Db.js';

export const getAll = async () => {
  const [rows] = await db.query('SELECT * FROM gyumolcs ORDER BY gyumolcsid');
  return rows;
};

export const getById = async (id) => {
  const [rows] = await db.query('SELECT * FROM gyumolcs WHERE gyumolcsid = ?', [id]);
  return rows[0];
};

export const create = async (data) => {
  const { nev, megjegyzes, nev_eng, alt_szoveg, src } = data;
  const [result] = await db.query(
    'INSERT INTO gyumolcs (nev, megjegyzes, nev_eng, alt_szoveg, src) VALUES (?, ?, ?, ?, ?)',
    [nev, megjegyzes || null, nev_eng || null, alt_szoveg, src]
  );
  return result.insertId;
};

export const update = async (id, data) => {
  const { nev, megjegyzes, nev_eng, alt_szoveg, src } = data;
  await db.query(
    'UPDATE gyumolcs SET nev = ?, megjegyzes = ?, nev_eng = ?, alt_szoveg = ?, src = ? WHERE gyumolcsid = ?',
    [nev, megjegyzes || null, nev_eng || null, alt_szoveg, src, id]
  );
};

export const forceDelete = async (id) => {
    await db.query('DELETE FROM gyumolcs WHERE gyumolcsid = ?', [id]);
  };
  
  export const deleteArrivalsByFruit = async (id) => {
    await db.query('DELETE FROM erkezes WHERE gyumolcsid = ?', [id]);
  };