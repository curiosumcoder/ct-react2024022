// ctrl + x
import { useState } from "react";
import "./App.css";
import ProductSearch from "./ProductSearch";
import IProduct from "./model/IProduct";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";

function App() {
  const [resultado, setResultado] = useState(Array<IProduct>());
  const [seleccionado, setSelecionado] = useState<IProduct | undefined>();

  return (
    <>
      {/* <div class="parrafo" style="margin-top: 1em"></div> */}
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Demo 6
          </a>
        </div>
      </nav>
      <div className="container" style={{ marginTop: "1em" }}>
        <p>{resultado.length}</p>
        <ProductSearch onResults={(r: Array<IProduct>) => setResultado(r)} />

        <div className="row">
          <div className="col-8">
            <ProductList
              products={resultado}
              onSelect={(p: IProduct) => setSelecionado(p)}
            />
          </div>
          <div className="col-4">
            <ProductDetail p={seleccionado} />
          </div>
        </div>
      </div>
      {/* "quantityPerUnit": "24 - 200 g pkgs.",
      "companyName": "Formaggi Fortini s.r.l.", */}
    </>
  );
}

export default App;
