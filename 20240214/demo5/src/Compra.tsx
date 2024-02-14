// rfce
import React, { useState } from "react";

// rfce
function Compra({cambioCompra}:{cambioCompra: number}) {
  const [dolares, setDolares] = useState(1);

  return (
    <div>
      <h6>Compra</h6>

      <input
        type="number"
        value={dolares}
        onChange={(ev) => setDolares(ev.target.valueAsNumber)}
      />

    </div>
  );
}

export default Compra;
