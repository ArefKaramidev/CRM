import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Card from "../components/card/Card";
import Cases from "../components/Cases/Cases";
import { Chart } from "../components/Chart/Chart";
import { DatePickerComponent } from "../components/DatePicker/DatePicker";
const Home = () => {
  return (
    <div className="flex items-center text-center justify-center sm:m-0 xl:text-left">
      <Navbar />
      <div className="w-full sm:ml-72">
        <Header />
        <Card start={0} end={4} />
        <div className="flex flex-col items-center sm:flex-row sm:items-start sm:gap-x-10">
          <Chart />
          <DatePickerComponent />
        </div>
        <div className="mt-96 xl:mt-24">
          <Cases />
        </div>
      </div>
    </div>
  );
};

export default Home;
