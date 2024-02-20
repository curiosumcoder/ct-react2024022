import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Error from "./Error";
import ProductMain from "./components/product/ProductMain";
import ProductIndex from "./components/product/ProductIndex";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
        { path: "product", 
        element: <ProductMain />,
        children: [
            { index: true, element: <ProductIndex />},
        ]
     }
    ],
  },
  {
    path: "/about",
    element: (
      <>
        <h1>About</h1>
      </>
    ),
  },
]);

export default router;
