"use client";
import { useMemo } from "react";
import { Label, Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "keep-react";
import { GoKebabHorizontal } from "react-icons/go";

export const PieChartComponent = () => {
  const chartData = [
    { browser: "Total Paid", visitors: 234, fill: "#3CAAFA" },
    { browser: "Total Unpiad", visitors: 234, fill: "#9631F5" },
    { browser: "Total Overdue", visitors: 234, fill: "#38D6EF" },
  ];
  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Chrome",
      color: "#3CAAFA",
    },
    safari: {
      label: "Safari",
      color: "#9631F5",
    },
  } satisfies ChartConfig;

  const totalVisitors = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <div className="bg-white p-5 rounded-lg m-5">
      <div className="flex items-start justify-between">
        <h3 className="font-bold text-xl">Opportunities by Stage</h3>
        <GoKebabHorizontal className="rotate-90 w-5 h-5 cursor-pointer" />
      </div>

      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square w-96 h-80 "
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="visitors"
            nameKey="browser"
            innerRadius={60}
            strokeWidth={5}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-metal-900 text-3xl font-bold dark:fill-white"
                      >
                        {totalVisitors.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy ?? 0) + 24}
                        className="fill-metal-900 dark:fill-white"
                      >
                        Invoices
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>

      <div className="flex items-center gap-x-10">
        <div className="flex justify-items-center gap-x-2">
          <div className="w-5 h-5 bg-[#3CAAFA] rounded-md "></div>
          <span className="text-sm text-gray-500 font-medium">Total Piad</span>
        </div>
        <div className="flex justify-items-center gap-x-2">
          <div className="w-5 h-5 bg-[#38D6EF] rounded-md "></div>
          <span className="text-sm text-gray-500 font-medium">
            Total Overdue
          </span>
        </div>
        <div className="flex justify-items-center gap-x-2">
          <div className="w-5 h-5 bg-[#9631F5] rounded-md "></div>
          <span className="text-sm text-gray-500 font-medium">
            Total Unpaid
          </span>
        </div>
      </div>
    </div>
  );
};
