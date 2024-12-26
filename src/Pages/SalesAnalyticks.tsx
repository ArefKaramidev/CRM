import { useEffect } from "react";
import Card from "../components/Card/Card";
import { AreaChartComponent } from "../components/Sales-Analyticks/Charts/AreaChart";
import { BarChartComponent } from "../components/Sales-Analyticks/Charts/BarChart";
import { LineChartComponent } from "../components/Sales-Analyticks/Charts/LineChart";
import { PieChartComponent } from "../components/Sales-Analyticks/Charts/PieChart";

const SalesAnalyticks = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <>
      <Card start={4} />
      <div className="flex m-5 items-center gap-x-10 sm:flex-row sm:items-start sm:gap-x-10">
        <AreaChartComponent />
        <LineChartComponent />
      </div>
      <div className="mt-96 ml-5 flex items-start gap-x-10 xl:mt-24">
        <BarChartComponent />
        <PieChartComponent />
      </div>
    </>
  );
};

export default SalesAnalyticks;
