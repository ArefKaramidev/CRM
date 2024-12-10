import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Card from "../components/card/Card";
import { Chart } from "../components/Chart/Chart";
import { DatePickerComponent } from "../components/DatePicker/DatePicker";
const Home = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="w-full ml-72">
        <Header />
        <Card />
        <div className="flex items-start gap-x-10">
          <Chart />
          <DatePickerComponent />
        </div>
      </div>
    </div>
  );
};

export default Home;
