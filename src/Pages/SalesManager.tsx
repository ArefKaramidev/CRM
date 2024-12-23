import { useEffect } from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import TableAccounts from "../components/Sales_manager/TableAccounts";

const SalesManager = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="ml-80">
        <Header />
        <TableAccounts />
      </div>
    </div>
  );
};

export default SalesManager;
