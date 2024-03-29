import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Error from "./Error";
import ProductMain from "./components/product/ProductMain";
import ProductIndex from "./components/product/ProductIndex";
import ProductCreate from "./components/product/ProductCreate";
import ProductDetail from "./components/product/ProductDetail";
import { productLoader } from "./loaders/productLoader";
import ProductEdit from "./components/product/ProductEdit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "product",
        element: <ProductMain />,
        children: [
          { index: true, element: <ProductIndex /> },
          { path: "create", element: <ProductCreate /> },
          {
            path: "detail/:id",
            element: <ProductDetail />,
            loader: productLoader,
          },
          {
            path: "edit/:id",
            element: <ProductEdit />,
            loader: productLoader,
          },
        ],
      },
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
