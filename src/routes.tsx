import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import SalesAnalyticks from "./Pages/SalesAnalyticks";
import SalesManager from "./Pages/SalesManager";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sales_analyticks",
    element: <SalesAnalyticks />,
  },
  {
    path: "/sales_manager",
    element: <SalesManager />,
  },
]);

export default router;
