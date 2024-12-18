import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import { AreaChartComponent } from "../components/Sales-Analyticks/Charts/AreaChart";
import { LineChartComponent } from "../components/Sales-Analyticks/Charts/LineChart";

const SalesAnalyticks = () => {
  return (
    <div className="flex items-center text-center justify-center sm:m-0 xl:text-left">
      <Navbar />
      <div className="w-full sm:ml-72">
        <Header />
        <Card start={4} />
        <div className="flex flex-col items-center justify-evenly sm:flex-row sm:items-start sm:gap-x-10">
          <AreaChartComponent />
          <LineChartComponent />
        </div>
        <div className="mt-96 xl:mt-24"></div>
      </div>
    </div>
  );
};

export default SalesAnalyticks;
