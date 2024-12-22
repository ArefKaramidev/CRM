import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import TableAccounts from "../components/Sales_manager/TableAccounts";

const SalesManager = () => {
  return (
    <div>
      <Navbar />
      <div className="ml-72">
        <Header />
        <TableAccounts />
      </div>
    </div>
  );
};

export default SalesManager;
