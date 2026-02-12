import { useState } from "react";
import { createFruit } from "../api";

function FruitForm({ onSuccess }) {
  const [form, setForm] = useState({
    nev: "",
    nev_eng: "",
    megjegyzes: "",
    alt_szoveg: "",
    src: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createFruit(form);
    onSuccess();
    setForm({
      nev: "",
      nev_eng: "",
      megjegyzes: "",
      alt_szoveg: "",
      src: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Új gyümölcs</h2>

      <input name="nev" placeholder="Név" value={form.nev} onChange={handleChange} required />
      <input name="nev_eng" placeholder="Angol név" value={form.nev_eng} onChange={handleChange} />
      <input name="megjegyzes" placeholder="Megjegyzés" value={form.megjegyzes} onChange={handleChange} />
      <input name="alt_szoveg" placeholder="Alt szöveg" value={form.alt_szoveg} onChange={handleChange} required />
      <input name="src" placeholder="Kép URL" value={form.src} onChange={handleChange} required />

      <button type="submit">Hozzáadás</button>
    </form>
  );
}

export default FruitForm;