import React from "react";

function Products({ name, count }) {
  return (
    <div className="text-white">
      <div className="w-full h-60 bg-zinc-500">
        <h1>
          67 {name} {count}
        </h1>
      </div>
    </div>
  );
}

export default Products;
