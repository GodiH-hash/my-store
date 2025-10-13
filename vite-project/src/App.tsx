import useFetch from "./hooks/useFetch";

interface Product {
  id: number;
  title: string;
  price: number;
}

export default function App() {
  const { data: products, loading, error } = useFetch<Product[]>("/products");

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error: {error}</h3>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products (via useFetch)</h1>
      <ul>
        {products?.map((p) => (
          <li key={p.id}>
            {p.title} – ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
