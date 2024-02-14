// rfce
import React, { useState } from "react";
import Compra from "./Compra";

function TipoCambio() {
  const [colones, setColones] = useState(515);

  return (
    <div>
      <h3>Tipo Cambio</h3>
      <p>Compra: {colones}</p>
      <input
        type="number"
        defaultValue={colones}
        // value={colones}
        onChange={(ev) => {
            const value = ev.target.valueAsNumber
            setColones(isNaN(value) ? 0 : value)
            // //console.log(isNaN(ev.target.valueAsNumber))            
            //setColones(ev.target.valueAsNumber)
        }}
      />

      <Compra cambioCompra={colones} />

    </div>
  );
}

export default TipoCambio;
