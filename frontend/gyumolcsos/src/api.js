const BASE_URL = "http://localhost:3000";

export const getFruits = async () => {
  const res = await fetch(`${BASE_URL}/fruits`);
  return res.json();
};

export const createFruit = async (data) => {
  const res = await fetch(`${BASE_URL}/fruits`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteFruit = async (id) => {
  const res = await fetch(`${BASE_URL}/fruits/${id}`, { method: "DELETE" });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Szerver hiba törléskor");
  return data;
};

export const getArrivals = async () => {
    const res = await fetch("http://localhost:3000/arrivals");
    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || "Szerver hiba");
    }
    return res.json();
  };