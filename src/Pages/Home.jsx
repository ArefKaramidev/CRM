import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Card from "../components/card/Card";
import Cases from "../components/Cases/Cases";
import { Chart } from "../components/Chart/Chart";
import { DatePickerComponent } from "../components/DatePicker/DatePicker";
const Home = () => {
  return (
    <div className="flex items-center text-center justify-center sm:m-0 ">
      <Navbar />
      <div className="w-full sm:ml-72">
        <Header />
        <Card />
        <div className="flex flex-col items-center sm:flex-row sm:items-start sm:gap-x-10">
          <Chart />
          <DatePickerComponent />
        </div>
        <div className="mt-96">
          <Cases />
        </div>
      </div>
    </div>
  );
};

export default Home;
