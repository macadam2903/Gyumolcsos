import { useEffect, useState } from "react";
import { getArrivals } from "../api";

function ArrivalList() {
  const [arrivals, setArrivals] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await getArrivals();
      setArrivals(data);
    };
    load();
  }, []);

  return (
    <div>
      <h2>Érkezések</h2>
      <ul>
        {arrivals.map((a) => (
          <li key={a.erkezesid}>
            {a.gyumolcs_nev} - {a.mennyiseg} kg - {a.erkezett}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArrivalList;