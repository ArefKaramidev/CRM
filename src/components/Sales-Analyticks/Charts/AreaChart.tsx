import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
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
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#1B4DFF",
    },
  } satisfies ChartConfig;

  return (
    <div className="bg-white p-5 rounded-lg m-5">
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
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <defs>
            <linearGradient id="price" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1B4DFF" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#1B4DFF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} />

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
            dataKey="desktop"
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
