
"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const {
    cartItems,
    cartCount,
    cartTotal,
    removeFromCart,
    updateQuantity,
  } = useCart();

  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
        padding: "20px",
        color: "#111827",
      }}
    >
      <Link href="/">← Continue Shopping</Link>

      <h1 style={{ fontSize: "32px", marginTop: "25px" }}>
        Shopping Cart 🛒
      </h1>

      <p>You have {cartCount} items in your cart.</p>

      {cartItems.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px" }}>
          <h2>Your cart is empty!</h2>
          <p>Looks like you haven't added anything yet.</p>
          <Link href="/">Explore Products</Link>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.product.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
                padding: "20px",
                marginTop: "15px",
                background: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
              }}
            >
              <div style={{ fontSize: "45px" }}>
                {item.product.emoji}
              </div>

              <div style={{ flex: 1 }}>
                <h3>{item.product.name}</h3>
                <p>{item.product.price}</p>

                <div>
                  <button
                    onClick={() =>
                      updateQuantity(
                        item.product.id,
                        item.quantity - 1
                      )
                    }
                  >
                    -
                  </button>

                  <strong style={{ margin: "0 15px" }}>
                    {item.quantity}
                  </strong>

                  <button
                    onClick={() =>
                      updateQuantity(
                        item.product.id,
                        item.quantity + 1
                      )
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <strong>
                  ${item.product.price * item.quantity}
                </strong>

                <br />

                <button
                  onClick={() =>
                    removeFromCart(item.product.id)
                  }
                  style={{
                    marginTop: "10px",
                    color: "red",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div
            style={{
              marginTop: "30px",
              padding: "25px",
              background: "white",
              borderRadius: "12px",
              textAlign: "right",
            }}
          >
            <h2>Grand Total: ${cartTotal}</h2>

            <button
              onClick={() =>
                alert("Checkout coming soon!")
              }
              style={{
                background: "#2563eb",
                color: "white",
                padding: "14px 30px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </main>
  );
}
