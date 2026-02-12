import { deleteFruit } from "../api";
import "../style.css";

function FruitList({ fruits, onDelete }) {
  const handleDelete = async (id) => {
    try {
      await deleteFruit(id);
      onDelete();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="fruit-list-container">
      <h2>Gyümölcsök</h2>
      <ul className="fruit-list">
        {fruits.map((fruit) => (
          <li key={fruit.gyumolcsid} className="fruit-item">
            <img
              src={`http://localhost:3000/kepek/${fruit.src}`}
              alt={fruit.alt_szoveg}
              className="fruit-image"
            />
            <span className="fruit-name">{fruit.nev} ({fruit.nev_eng})</span>
            <button
              className="delete-button"
              onClick={() => handleDelete(fruit.gyumolcsid)}
            >
            Törlés
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;