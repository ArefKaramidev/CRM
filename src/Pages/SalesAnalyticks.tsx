import { useEffect } from "react";
import { AreaChartComponent } from "@/components/sales-analytics/Charts/AreaChart";
import { BarChartComponent } from "@/components/sales-analytics/Charts/BarChart";
import { LineChartComponent } from "@/components/sales-analytics/Charts/LineChart";
import { PieChartComponent } from "@/components/sales-analytics/Charts/PieChart";
import Card from "@/components/card/Card";

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
