import { analytics } from "../../analytics_data/analytics.ts";
import CardStructure from "./CardStructure.js";

interface CardProps {
  start: number;
  end?: number;
}

const Card = ({ start, end }: CardProps) => {
  const slicedAnalytics = analytics.slice(start, end);

  return (
    <div className="flex flex-wrap justify-center md:justify-start">
      {slicedAnalytics.map((item) => (
        <CardStructure
          key={item.id}
          id={item.id}
          title={item.title}
          total={item.total}
          profit={item.profit}
          time={item.time}
        />
      ))}
    </div>
  );
};

export default Card;
