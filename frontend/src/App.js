import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = 'http://localhost:3000';

function App() {
  const [fruits, setFruits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    nev: '',
    megjegyzes: '',
    nev_eng: '',
    alt_szoveg: '',
    src: ''
  });

  // Gyümölcsök betöltése
  useEffect(() => {
    fetchFruits();
  }, []);

  const fetchFruits = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/fruits`);
      setFruits(response.data);
      setError(null);
    } catch (err) {
      setError('Hiba a gyümölcsök betöltésekor: ' + err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Űrlap kezelése
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Új gyümölcs hozzáadása
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (editingId) {
        // Frissítés
        await axios.put(`${API_URL}/fruits/${editingId}`, formData);
        alert('Gyümölcs sikeresen frissítve!');
      } else {
        // Új hozzáadása
        await axios.post(`${API_URL}/fruits`, formData);
        alert('Gyümölcs sikeresen hozzáadva!');
      }
      
      // Űrlap visszaállítása
      resetForm();
      fetchFruits();
    } catch (err) {
      alert('Hiba: ' + (err.response?.data?.error || err.message));
    }
  };

  // Szerkesztés indítása
  const handleEdit = (fruit) => {
    setFormData({
      nev: fruit.nev,
      megjegyzes: fruit.megjegyzes || '',
      nev_eng: fruit.nev_eng || '',
      alt_szoveg: fruit.alt_szoveg,
      src: fruit.src
    });
    setEditingId(fruit.gyumolcsid);
    setShowForm(true);
  };

  // Törlés
  const handleDelete = async (id, nev) => {
    if (!window.confirm(`Biztosan törölni szeretnéd: ${nev}?`)) {
      return;
    }

    try {
      await axios.delete(`${API_URL}/fruits/${id}`);
      alert('Gyümölcs törölve!');
      fetchFruits();
    } catch (err) {
      alert('Hiba a törléskor: ' + (err.response?.data?.error || err.message));
    }
  };

  // Űrlap visszaállítása
  const resetForm = () => {
    setFormData({
      nev: '',
      megjegyzes: '',
      nev_eng: '',
      alt_szoveg: '',
      src: ''
    });
    setEditingId(null);
    setShowForm(false);
  };

  if (loading) {
    return <div className="container"><h2>Betöltés...</h2></div>;
  }

  return (
    <div className="App">
      <header className="header">
        <h1>🍎 Gyümölcsök Nyilvántartási Rendszere</h1>
      </header>

      <div className="container">
        {error && <div className="error">{error}</div>}

        <div className="actions">
          <button 
            className="btn btn-primary"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? '❌ Mégse' : '➕ Új gyümölcs hozzáadása'}
          </button>
        </div>

        {/* Űrlap */}
        {showForm && (
          <div className="form-container">
            <h2>{editingId ? '✏️ Gyümölcs szerkesztése' : '➕ Új gyümölcs hozzáadása'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Név (magyar): *</label>
                <input
                  type="text"
                  name="nev"
                  value={formData.nev}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Név (angol):</label>
                <input
                  type="text"
                  name="nev_eng"
                  value={formData.nev_eng}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Alt szöveg: *</label>
                <input
                  type="text"
                  name="alt_szoveg"
                  value={formData.alt_szoveg}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Kép forrás (pl: apple.png): *</label>
                <input
                  type="text"
                  name="src"
                  value={formData.src}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Megjegyzés:</label>
                <textarea
                  name="megjegyzes"
                  value={formData.megjegyzes}
                  onChange={handleInputChange}
                  rows="4"
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-success">
                  {editingId ? '💾 Mentés' : '➕ Hozzáadás'}
                </button>
                <button type="button" className="btn btn-secondary" onClick={resetForm}>
                  ❌ Mégse
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Táblázat */}
        <div className="table-container">
          <h2>📋 Gyümölcsök listája ({fruits.length} db)</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Név (magyar)</th>
                <th>Név (angol)</th>
                <th>Kép</th>
                <th>Megjegyzés</th>
                <th>Műveletek</th>
              </tr>
            </thead>
            <tbody>
              {fruits.length === 0 ? (
                <tr>
                  <td colSpan="6" style={{textAlign: 'center'}}>
                    Nincs még gyümölcs az adatbázisban
                  </td>
                </tr>
              ) : (
                fruits.map(fruit => (
                  <tr key={fruit.gyumolcsid}>
                    <td>{fruit.gyumolcsid}</td>
                    <td><strong>{fruit.nev}</strong></td>
                    <td>{fruit.nev_eng || '-'}</td>
                    <td>{fruit.src}</td>
                    <td className="megjegyzes">
                      {fruit.megjegyzes ? fruit.megjegyzes.substring(0, 100) + '...' : '-'}
                    </td>
                    <td>
                      <button 
                        className="btn btn-edit"
                        onClick={() => handleEdit(fruit)}
                      >
                        ✏️ Szerkeszt
                      </button>
                      <button 
                        className="btn btn-delete"
                        onClick={() => handleDelete(fruit.gyumolcsid, fruit.nev)}
                      >
                        🗑️ Töröl
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;