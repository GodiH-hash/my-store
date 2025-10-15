import { useState } from "react";
import useFetch from "./hooks/useFetch";
import { useCart } from "./contexts/CartContext";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

export default function App() {
  const { data: products, loading, error } = useFetch<Product[]>("/products");
  const { cartItems, addToCart, removeFromCart, clearCart } = useCart();

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  if (loading) {
    return <h3 className="text-center mt-10 text-lg">Loading...</h3>;
  }

  if (error) {
    return <h3 className="text-center text-red-600 mt-10">Error: {error}</h3>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <h1 className="text-3xl font-bold text-center mb-8">🛍 My Store</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {products?.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg p-16 transition text-center flex flex-col justify-between h-full w-60 sm:w-64"
          >
            {/* Image container */}
            <div className="h-20 flex justify-center items-center overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="max-h-20 object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>

            <h3 className="font-semibold text-sm mt-4 mb-2 line-clamp-2 h-10 overflow-hidden">
              {p.title}
            </h3>
            <p className="text-gray-600 mb-2">${p.price}</p>

            <div className="flex justify-center gap-2 mt-auto">
              <button
                onClick={() => setSelectedProduct(p)}
                className="bg-gray-200 hover:bg-gray-300 text-sm px-3 py-1 rounded"
              >
                View Details
              </button>
              <button
                onClick={() => addToCart(p)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="mt-10 bg-white rounded-xl p-6 shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">🛒 Cart Items</h2>
          <button
            onClick={clearCart}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
          >
            Clear Cart
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="space-y-2">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b py-2"
              >
                <span>{item.title}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-xs bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-11/12 sm:w-2/3 lg:w-1/2 relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
            >
              ✖
            </button>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="h-40 object-contain mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">
              {selectedProduct.title}
            </h2>
            <p className="text-gray-600 mb-3">${selectedProduct.price}</p>
            <p className="text-gray-700">{selectedProduct.description}</p>

            <button
              onClick={() => {
                addToCart(selectedProduct);
                setSelectedProduct(null);
              }}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg w-full"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
