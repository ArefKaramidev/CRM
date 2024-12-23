"use client";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "keep-react";
import { GoKebabHorizontal } from "react-icons/go";

export const LineChartComponent = () => {
  const chartData = [
    { month: "January", view: 186 },
    { month: "February", view: 305 },
    { month: "March", view: 237 },
    { month: "April", view: 73 },
    { month: "May", view: 209 },
    { month: "June", view: 214 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#1B4DFF",
    },
  } satisfies ChartConfig;

  return (
    <div className=" bg-white p-5 rounded-lg mt-5">
      <div className="flex items-start justify-between">
        <h3 className="text-left text-lg font-semibold mb-4">Lead Soursse</h3>
        <GoKebabHorizontal className="rotate-90 w-5 h-5 cursor-pointer" />
      </div>
      <ChartContainer config={chartConfig} className="w-96 h-72">
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
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
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="view"
            type="linear"
            stroke="#1B4DFF"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
};
