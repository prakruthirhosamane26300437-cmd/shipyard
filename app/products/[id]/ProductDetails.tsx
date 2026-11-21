
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Product } from "../../data/products";
import { useCart } from "../../context/CartContext";

type ProductDetailsProps = {
  product: Product;
};

export default function ProductDetails({
  product,
}: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  const { addToCart } = useCart();
  const router = useRouter();

  const total = product.price * quantity;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setMessage(`${quantity} item(s) added to cart!`);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    router.push("/cart");
  };

  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "auto",
        padding: "40px 20px",
        color: "#111827",
      }}
    >
      <a href="/" style={{ color: "#2563eb" }}>
        ← Back to ShipYard
      </a>

      <div
        style={{
          background: product.accent,
          padding: "90px",
          textAlign: "center",
          borderRadius: "20px",
          marginTop: "25px",
          fontSize: "90px",
        }}
      >
        {product.emoji}
      </div>

      <h1 style={{ marginTop: "25px" }}>
        {product.name}
      </h1>

      <p>{product.tagline}</p>

      <h2>${product.price}</h2>

      <p style={{ marginTop: "15px" }}>
        {product.description}
      </p>

      <h3 style={{ marginTop: "25px" }}>
        Specifications
      </h3>

      <ul>
        {product.specs.map((spec) => (
          <li key={spec}>{spec}</li>
        ))}
      </ul>

      <h3 style={{ marginTop: "20px" }}>
        Quantity
      </h3>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          marginTop: "10px",
        }}
      >
        <button
          onClick={() =>
            setQuantity(Math.max(1, quantity - 1))
          }
        >
          −
        </button>

        <strong>{quantity}</strong>

        <button
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>

      <h3 style={{ marginTop: "15px" }}>
        Total: ${total}
      </h3>

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        <button
          onClick={handleAddToCart}
          style={{
            background: "#111827",
            color: "white",
            padding: "14px 25px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Add to Cart
        </button>

        <button
          onClick={handleBuyNow}
          style={{
            background: "#2563eb",
            color: "white",
            padding: "14px 25px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Buy Now
        </button>
      </div>

      {message && (
        <p style={{ marginTop: "15px" }}>
          {message}
        </p>
      )}
    </main>
  );
}
