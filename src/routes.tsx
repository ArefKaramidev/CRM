import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import SalesAnalyticks from "./Pages/SalesAnalyticks";
import SalesManager from "./Pages/SalesManager";
import CreateAccount from "./Pages/CreateAccount";
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
  {
    path: "create_account",
    element: <CreateAccount />,
  },
]);

export default router;
