const Product = ({ product, handleCartItems }) => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "0.5rem", // Equivalent to Tailwind's rounded-lg
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // Equivalent to Tailwind's shadow-md
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        width: "300px", // Fixed width for simplicity as responsive inline styles are more complex
      }}
    >
      {/* Product Image */}
      <div
        style={{
          width: "100%",
          height: "12rem", // Equivalent to Tailwind's h-48 (12 * 16px = 192px)
          backgroundColor: "#e5e7eb", // Equivalent to Tailwind's bg-gray-200
          overflow: "hidden",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Product Details */}
      <div
        style={{
          padding: "1rem", // Equivalent to Tailwind's p-4
          display: "flex",
          flexDirection: "column",
          flexGrow: 1, // Equivalent to Tailwind's flex-grow
        }}
      >
        <h3
          style={{
            fontSize: "1.25rem", // Equivalent to Tailwind's text-xl
            fontWeight: "600", // Equivalent to Tailwind's font-semibold
            color: "#374151", // Equivalent to Tailwind's text-gray-800
            marginBottom: "0.5rem", // Equivalent to Tailwind's mb-2
            whiteSpace: "nowrap", // For truncate effect
            overflow: "hidden", // For truncate effect
            textOverflow: "ellipsis", // For truncate effect
          }}
        >
          {product.name}
        </h3>
        <p
          style={{
            fontSize: "0.875rem", // Equivalent to Tailwind's text-sm
            color: "#4b5563", // Equivalent to Tailwind's text-gray-600
            marginBottom: "1rem", // Equivalent to Tailwind's mb-4
            flexGrow: 1,
            display: "-webkit-box", // For line-clamp effect
            WebkitLineClamp: 2, // For line-clamp effect
            WebkitBoxOrient: "vertical", // For line-clamp effect
            overflow: "hidden", // For line-clamp effect
            textOverflow: "ellipsis", // For line-clamp effect
          }}
        >
          {product.description}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "auto", // Equivalent to Tailwind's mt-auto
          }}
        >
          <span
            style={{
              fontSize: "1.5rem", // Equivalent to Tailwind's text-2xl
              fontWeight: "bold",
              color: "#111827", // Equivalent to Tailwind's text-gray-900
            }}
          >
            ${product.price.toFixed(2)}
          </span>
          <button
            style={{
              backgroundColor: "#2563eb", // Equivalent to Tailwind's bg-blue-600
              color: "#ffffff", // Equivalent to Tailwind's text-white
              padding: "0.5rem 1rem", // Equivalent to Tailwind's px-4 py-2
              borderRadius: "0.375rem", // Equivalent to Tailwind's rounded-md
              fontSize: "0.875rem", // Equivalent to Tailwind's text-sm
              fontWeight: "500", // Equivalent to Tailwind's font-medium
              border: "none", // Remove default button border
              cursor: "pointer",
              // No hover styles as requested
            }}
            onClick={() => handleCartItems(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
