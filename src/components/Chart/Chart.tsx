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
  ChartLegendContent,
  ChartTooltip,
} from "keep-react";

export const Chart = () => {
  const chartData = [
    { month: "Jan", Sales: 27, color: "#1B4DFF" },
    { month: "Feb", Sales: 15, color: "#48d3ff" },
    { month: "Mar", Sales: 20, color: "#1B4DFF" },
    { month: "Apr", Sales: 28, color: "#48d3ff" },
    { month: "May", Sales: 25, color: "#1B4DFF" },
    { month: "Jun", Sales: 31, color: "#48d3ff" },
    { month: "July", Sales: 17, color: "#1B4DFF" },
    { month: "Aug", Sales: 13, color: "#48d3ff" },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#1B4DFF",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-[200px] w-[40rem] h-80 bg-white"
    >
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
          //* for diffrent color
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
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
  );
};
