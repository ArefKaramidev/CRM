import { useEffect } from "react";
import TableAccounts from "../components/sales_manager/TableAccounts";
const SalesManager = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return <TableAccounts />;
};

export default SalesManager;
