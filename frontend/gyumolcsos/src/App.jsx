import { useEffect, useState } from "react";
import { getFruits } from "./api";
import FruitList from "./components/FruitList";
import FruitForm from "./components/FruitForm";
import ArrivalList from "./components/ArrivalList";

function App() {
  const [fruits, setFruits] = useState([]);

  const loadFruits = async () => {
    const data = await getFruits();
    setFruits(data);
  };

  useEffect(() => {
    loadFruits();
  }, []);

  return (
    <div className="container">
      <h1>Gyümis alkalmazas</h1>

      <FruitForm onSuccess={loadFruits} />

      <FruitList fruits={fruits} onDelete={loadFruits} />

      <ArrivalList />
    </div>
  );
}

export default App;