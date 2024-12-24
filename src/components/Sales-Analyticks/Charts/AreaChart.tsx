import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "keep-react";
import Button from "../../button/Button";
import { FaChevronDown } from "react-icons/fa6";

export const AreaChartComponent = () => {
  const chartData = [
    { month: "January", activity: 5, hour: 4 },
    { month: "February", activity: 9, hour: 6 },
    { month: "March", activity: 8, hour: 8 },
    { month: "April", activity: 4, hour: 10 },
    { month: "May", activity: 11, hour: 12 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#1B4DFF",
    },
  } satisfies ChartConfig;

  return (
    <div className="bg-white p-5 rounded-lg mt-5">
      <div className="flex items-center justify-between">
        <h3 className="text-left text-lg font-semibold mb-4">
          Learning Activity
        </h3>
        <Button
          style={
            "border border-2 rounded-md text-gray-500 flex items-center gap-x-2 px-4 py-2"
          }
          icon={<FaChevronDown />}
        >
          Yearly
        </Button>
      </div>

      <ChartContainer config={chartConfig} className="w-[35rem] h-72">
        <AreaChart accessibilityLayer data={chartData}>
          <defs>
            <linearGradient id="price" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1B4DFF" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#1B4DFF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} />

          <YAxis
            dataKey="hour"
            tickLine={false}
            tickMargin={10}
            axisLine={true}
            tickFormatter={(value) => `${value}h`}
            domain={[4, 12]}
          />

          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <Area
            dataKey="activity"
            type="natural"
            stroke="#1B4DFF"
            fillOpacity={1}
            fill="url(#price)"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
};
