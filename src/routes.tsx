import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import SalesAnalyticks from "./Pages/SalesAnalyticks";
import SalesManager from "./Pages/SalesManager";
import CreateAccount from "./Pages/CreateAccount";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
// Layout component to wrap Navbar, Header, and child routes
const Layout = () => (
  <div className="flex items-center text-center justify-center sm:m-0 xl:text-left">
    <Navbar />
    <div className="w-full sm:ml-80">
      <Header />
      <Outlet /> {/* Outlet renders the matched child route */}
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use the Layout component here
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "sales_analyticks",
        element: <SalesAnalyticks />,
      },
      {
        path: "sales_manager",
        element: <SalesManager />,
      },
      {
        path: "create_account",
        element: <CreateAccount />,
      },
    ],
  },
]);

export default router;
