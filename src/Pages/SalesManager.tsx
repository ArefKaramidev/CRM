import TableAccounts from "@/components/sales_manager/TableAccounts";
import { useEffect } from "react";

const SalesManager = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return <TableAccounts />;
};

export default SalesManager;
