import { FaArrowTrendUp } from "react-icons/fa6";
import { HiOutlineUsers } from "react-icons/hi2";
import { analyticksItem } from "../../types/analyticksItem";

const CardStructure = ({ title, total, profit, time }: analyticksItem) => {
  return (
    <div className="flex flex-col w-80 gap-y-8 bg-white rounded-xl p-5 flex-wrap m-5 duration-200 hover:shadow-xl hover:border-b-blue-500 hover:border-b-4 cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <span className="text-primary-0 ">{title}</span>
          <span className="text-black font-bold text-2xl">{total}</span>
        </div>
        <div className="p-3 rounded-xl bg-orange-500 bg-opacity-10">
          <HiOutlineUsers className="w-5 h-5 text-orange-500" />
        </div>
      </div>
      <div>
        <hr />
        <div className="flex items-center justify-between mt-2">
          <span className="px-2 py-1 rounded-md bg-green-100 text-green-500">
            <FaArrowTrendUp className="inline-block text-sm" />
            {profit}
          </span>
          <span className="text-primary-0 text-sm">{time}</span>
        </div>
      </div>
    </div>
  );
};

export default CardStructure;
