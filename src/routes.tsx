import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import SalesAnalyticks from "./Pages/SalesAnalyticks";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sales_analyticks",
    element: <SalesAnalyticks />,
  },
]);

export default router;
