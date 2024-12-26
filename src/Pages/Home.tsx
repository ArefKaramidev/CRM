import Card from "../components/Card/Card";
import Cases from "../components/Cases/Cases";
import { Chart } from "../components/Chart/Chart";
import { DatePickerComponent } from "../components/DatePicker/DatePicker";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <>
      <Card start={0} end={4} />
      <div className="flex flex-col items-center sm:flex-row sm:items-start sm:gap-x-10">
        <Chart />
        <DatePickerComponent />
      </div>
      <div className="mt-96 xl:mt-24">
        <Cases />
      </div>
    </>
  );
};

export default Home;
