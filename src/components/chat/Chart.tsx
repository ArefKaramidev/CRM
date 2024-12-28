import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartTooltip,
} from "keep-react";

export const Chart = () => {
  const chartData = [
    { month: "Jan", Sales: 27 },
    { month: "Feb", Sales: 15 },
    { month: "Mar", Sales: 20 },
    { month: "Apr", Sales: 28 },
    { month: "May", Sales: 25 },
    { month: "Jun", Sales: 31 },
    { month: "July", Sales: 17 },
    { month: "Aug", Sales: 13 },
  ];

  const getBarColor = (index: number) => {
    const colors = ["#1B4DFF", "#48d3ff"];
    return colors[index % colors.length];
  };

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#1B4DFF",
    },
  } satisfies ChartConfig;

  return (
    <div className="w-[21rem] h-80 overflow-x-scroll bg-white m-5 rounded-lg sm:w-[40rem] sm:overflow-auto">
      <ChartContainer config={chartConfig} className=" h-80 ">
        <BarChart data={chartData} width={500} height={300}>
          <CartesianGrid strokeDasharray="5 5" vertical={false} />
          <CartesianGrid vertical={false} />
          <YAxis
            dataKey="sales"
            tickLine={false}
            tickMargin={24}
            axisLine={false}
            ticks={[10, 20, 30, 40, 50, 60]}
          />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <XAxis
            axisLine={{
              stroke: "#1B4DFF",
              strokeWidth: 1,
              strokeDasharray: "5 5",
            }}
          />

          <ChartTooltip wrapperClassName="style-tooltip" />
          <ChartLegend
            verticalAlign="top"
            wrapperStyle={{
              fontWeight: 600,
              fontSize: "20px",
              display: "flex",
              justifyContent: "start",
              marginLeft: "30px",
              paddingBottom: "20px",
            }}
          />
          <Bar dataKey="Sales" radius={[8, 8, 0, 0]} barSize={50}>
            {chartData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={getBarColor(index)} />
            ))}
            <LabelList
              position="top"
              offset={12}
              className="fill-metal-600 dark:fill-metal-300"
              fontSize={12}
            />
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  );
};
