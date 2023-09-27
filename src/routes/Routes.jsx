import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/frontEnd/layout/Layout";
import Home from "../pages/frontEnd/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        }
    ]
  },
]);
export default router;
