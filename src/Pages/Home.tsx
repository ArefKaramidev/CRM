import Card from "../components/card/Card";
import Cases from "../components/cases/Cases";
import { Chart } from "../components/chat/Chart";
import { DatePickerComponent } from "../components/date_picker/DatePicker";
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
