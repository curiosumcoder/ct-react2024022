import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Error from "./Error";

const router = createBrowserRouter([
    { path: "/", element: <App/>, errorElement: <Error/> },
    { path: "/about", element: (
        <>
            <h1>About</h1>
        </>
    )}
])

export default router;