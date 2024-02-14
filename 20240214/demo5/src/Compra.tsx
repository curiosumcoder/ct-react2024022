// rfce
import React, { useReducer, useState } from "react";

// rfce
function Compra({ cambioCompra }: { cambioCompra: number }) {
  const [dolares, setDolares] = useState(1);

  return (
    <div>
      <h6>Compra</h6>

      <input
        type="number"
        value={dolares}
        onChange={(ev) => setDolares(ev.target.valueAsNumber)}
      />

      <br />
      <strong>Monto en colones: {dolares * cambioCompra}</strong>
    </div>
  );
}

export default Compra;
