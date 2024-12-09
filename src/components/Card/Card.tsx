import { analytics } from "../../analytics data/analytics.js";
import { analyticksItem } from "../../types/analyticksItem.js";
import CardStructure from "./CardStructure.js";

const Card = () => {
  return (
    <div className="flex flex-wrap">
      {analytics.map((item: analyticksItem) => (
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
