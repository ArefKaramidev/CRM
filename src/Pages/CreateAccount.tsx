import AccountInformation from "../components/Create_Account/AccountInformation";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

const CreateAccount = () => {
  return (
    <div>
      <Navbar />
      <div className="ml-72">
        <Header />
        <AccountInformation />
      </div>
    </div>
  );
};

export default CreateAccount;
