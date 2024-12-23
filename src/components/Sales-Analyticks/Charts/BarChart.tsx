"use client";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "keep-react";

export const BarChartComponent = () => {
  const chartData = [
    { month: "January", proposal: 186, prospecting: 80 },
    { month: "February", proposal: 305, prospecting: 200 },
    { month: "March", proposal: 237, prospecting: 120 },
    { month: "April", proposal: 73, prospecting: 190 },
    { month: "May", proposal: 209, prospecting: 130 },
    { month: "June", proposal: 214, prospecting: 140 },
  ];

  const chartConfig = {
    proposal: {
      label: "proposal",
      color: "#1B4DFF",
    },
    prospecting: {
      label: "prospecting",
      color: "#60a5fa",
    },
  } satisfies ChartConfig;

  return (
    <div className="inline-block rounded-lg mt-5 bg-white p-5">
      <h3 className="font-bold text-black text-xl m-5">Sales Pipeline</h3>

      <ChartContainer config={chartConfig} className="w-[40rem] h-80">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis
            dataKey="proposal"
            tickLine={false}
            tickMargin={24}
            axisLine={false}
          />
          <ChartTooltip content={<ChartTooltipContent />} />

          <Bar dataKey="prospecting" radius={[8, 8, 0, 0]} fill="#48d3ff" />
          <Bar dataKey="proposal" radius={[8, 8, 0, 0]} fill="#4a58ec" />
        </BarChart>
      </ChartContainer>
    </div>
  );
};
