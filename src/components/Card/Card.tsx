import { FaArrowTrendUp } from "react-icons/fa6";
import { HiOutlineUsers } from "react-icons/hi2";
import { analytics } from "../../analytics data/analytics.js";

const Card = () => {
  return (
    <div className="flex flex-wrap">
      {analytics.map((item: any) => (
        <div
          key={item.id}
          className="flex flex-col w-80 gap-y-8 bg-white rounded-xl p-5 flex-wrap m-5 duration-200 hover:shadow-xl hover:border-b-blue-500 hover:border-b-4 cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-y-2">
              <span className="text-primary-0 ">{item.title}</span>
              <span className="text-black font-bold text-2xl">21.978</span>
            </div>
            <div className="p-3 rounded-xl bg-orange-500 bg-opacity-10">
              <HiOutlineUsers className="w-5 h-5 text-orange-500" />
            </div>
          </div>
          <div>
            <hr />
            <div className="flex items-center justify-between mt-2">
              <span className="px-2 py-1 rounded-md bg-green-100 text-green-500">
                <FaArrowTrendUp className="inline-block text-sm" /> +15%
              </span>
              <span className="text-primary-0 text-sm">
                From The Last Month
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
