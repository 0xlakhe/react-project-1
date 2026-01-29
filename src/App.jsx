import React, { useState } from "react";
import Products from "./Products";

function App() {
  let [a, b] = useState(0);
  return (
    <div className="text-white w-full h-screen bg-zinc-900">
      <h1>{a}</h1>
      <button
        onClick={() => a < 67 && b(a + 1)}
        className="rounded-md bg-green-500 p-2 text-white "
      >
        Click me
      </button>
      <Products name="value" count={a} />
    </div>
  );
}

export default App;
