import { deleteFruit } from "../api";

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
    <div>
      <h2>Gyümölcsök</h2>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.gyumolcsid}>
            {fruit.nev} ({fruit.nev_eng})
            <button onClick={() => handleDelete(fruit.gyumolcsid)}>
              Törlés
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;