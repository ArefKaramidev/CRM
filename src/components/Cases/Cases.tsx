import { FaChevronDown } from "react-icons/fa6";
import { casesData } from "../../constants/Cases";
import { CiFilter } from "react-icons/ci";
import { BsPlusLg } from "react-icons/bs";

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
    <div className="inline-block rounded-2xl w-80 bg-white p-5 m-5 overflow-x-auto">
      <div className="items-center justify-between hidden md:flex">
        <span className="font-bold text-2xl pl-20">My Cases</span>
        <div className="flex items-center gap-x-2">
          <button className="border rounded-md text-gray-700 flex items-center gap-x-2 px-5 py-2">
            <CiFilter />
            Filter
          </button>
          <button className="border-none bg-blue-500 text-white flex items-center gap-x-2 rounded-md px-5 py-2 text-lg">
            <BsPlusLg />
            New Cases
          </button>
        </div>
      </div>
      <table className="border-separate border-spacing-x-20 text-left border-spacing-y-5 border rounded-xl mt-4 overflow-x-scroll">
        <thead>
          <tr className="text-sm font-normal text-gray-500">
            <th className="flex items-center gap-x-2">
              <input type="checkbox" disabled />#
            </th>
            <th>Name</th>
            <th>Type</th>
            <th>Status</th>
            <th>Priority</th>
            <th></th>
          </tr>
        </thead>
        {casesData.map((item) => (
          <tbody key={item.id}>
            <tr>
              <td className="flex items-center gap-x-2">
                <input type="checkbox" />
                {item.id}
              </td>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>
                <span
                  className={`rounded-md px-2 py-1 text-center text-white inline-block w-20 bg-opacity-75  ${getRandomColorClasses()}`}
                >
                  {item.status}
                </span>
              </td>
              <td>{item.priority}</td>
              <td>
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
