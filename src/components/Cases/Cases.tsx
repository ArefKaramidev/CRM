import { FaChevronDown } from "react-icons/fa6";
import { casesData } from "../../constants/Cases";
import { CiFilter } from "react-icons/ci";
import { BsPlusLg } from "react-icons/bs";
import Button from "../button/Button";

// Function to get random color classes for background
const getRandomColorClasses = () => {
  const bgColors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
  ];
  return bgColors[Math.floor(Math.random() * bgColors.length)];
};

const Cases = () => {
  return (
    <div className="inline-block rounded-2xl w-80 bg-white p-5 m-5 overflow-x-auto xl:w-[65rem] xl:block">
      <div className="items-center justify-between hidden md:flex">
        <span className="font-bold text-2xl pl-20">My Cases</span>
        <div className="flex items-center gap-x-2">
          <Button
            style="border rounded-md text-gray-700 flex items-center gap-x-2 px-5 py-2"
            icon={<CiFilter />}
          >
            Filter
          </Button>
          <Button
            style="border-none bg-blue-500 text-white flex items-center gap-x-2 rounded-md px-5 py-2 text-lg"
            icon={<BsPlusLg />}
          >
            New Cases
          </Button>
        </div>
      </div>
      <table className="border outline outline-1 outline-slate-300 border-collapse w-full text-left rounded-xl mt-4 overflow-hidden">
        <thead className="bg-gray-100 text-gray-600 border border-slate-200">
          <tr className="text-sm font-normal text-gray-500">
            <th className="flex items-center gap-x-2 px-10 py-2 bg">
              <input type="checkbox" disabled />#
            </th>
            <th className="px-10 py-2">Name</th>
            <th className="px-10 py-2">Type</th>
            <th className="px-10 py-2">Status</th>
            <th className="px-10 py-2">Priority</th>
            <th className="px-10 py-2"></th>
          </tr>
        </thead>
        {casesData.map((item) => (
          <tbody key={item.id} className="border border-slate-200">
            <tr>
              <td className="flex items-center gap-x-2 px-10 py-4">
                <input type="checkbox" />
                {item.id}
              </td>
              <td className="px-10 py-4">{item.name}</td>
              <td className="px-10 py-4">{item.type}</td>
              <td className="px-10 py-4">
                <span
                  className={`rounded-md px-2 py-1 text-center text-white inline-block w-20 bg-opacity-75  ${getRandomColorClasses()}`}
                >
                  {item.status}
                </span>
              </td>
              <td className="px-10 py-4">{item.priority}</td>
              <td className="px-10 py-4">
                <FaChevronDown className="text-gray-500" />
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Cases;
