import { useEffect, useState } from "react";
import { accounts } from "../../constants/accounts";
import { GoKebabHorizontal } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Input from "../Header/Input";
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

const TableAccounts = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    // Generate a random color for each account and store them in the state
    const initialColors = accounts.map(() => getRandomColorClasses());
    setColors(initialColors);
  }, []);

  const toggleDropDown = (id: number) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <div className="mt-10 w-[72rem]">
      <div className="flex items-center justify-between">
        <span className="font-bold text-2xl pl-10">Accounts</span>
        <NavLink
          to={"/create_account"}
          className="border-none bg-blue-500 font-normal text-sm text-white flex items-center gap-x-2 rounded-lg px-3 py-3"
        >
          <FaPlus className="text-lg" />
          Create Account
        </NavLink>
      </div>
      <div className="inline-block rounded-xl w-80 bg-white p-5 m-5 overflow-x-auto xl:w-[72rem] xl:block">
        <div>
          <Input
            icon={<IoSearchOutline className="text-gray-400 text-2xl" />}
            placeHolder="Search"
            type="text"
            inputStyle="outline-none px-2 py-2 w-72"
            parentStyle="border w-72"
          />
        </div>
        <table className="border outline outline-1 outline-slate-300 border-collapse w-full text-left rounded-xl mt-4 overflow-hidden">
          <thead className="bg-gray-100 text-gray-600 border border-slate-200">
            <tr>
              <th className="flex items-center gap-x-2 px-10 py-2">
                <input type="checkbox" disabled />#
              </th>
              <th className="px-10 py-2">Name</th>
              <th className="px-10 py-2">WebSite</th>
              <th className="px-10 py-2">Industry</th>
              <th className="px-10 py-2">Country</th>
              <th className="px-10 py-2">Type</th>
              <th className="px-10 py-2">Action</th>
            </tr>
          </thead>

          {accounts.map((item, index) => (
            <tbody key={item.id} className="border border-slate-200">
              <tr>
                <td className="flex items-center gap-x-2 px-10 py-4">
                  <input type="checkbox" />
                  {item.id}
                </td>
                <td className="px-10 py-4">{item.name}</td>
                <td className="px-10 py-4">{item.webSite}</td>
                <td className="px-10 py-4">{item.industry}</td>
                <td className="px-10 py-4">{item.country}</td>
                <td className="px-10 py-4">
                  <span
                    className={`rounded-md px-2 py-1 text-center text-white inline-block w-20 bg-opacity-75 ${colors[index]}`}
                  >
                    {item.type}
                  </span>
                </td>
                <td className="relative px-14 py-4">
                  <button
                    className="hover:bg-gray-100 rounded-xl p-1"
                    onClick={() => {
                      toggleDropDown(item.id);
                    }}
                  >
                    <GoKebabHorizontal className="text-gray-500" />
                  </button>

                  {openDropdown === item.id && (
                    <div className="absolute right-20 flex flex-col gap-y-2 p-2 top-12 w-32 bg-white rounded-lg shadow-lg border z-10">
                      <span className="flex items-center gap-x-1 cursor-pointer hover:text-slate-700">
                        <CiEdit />
                        Edit
                      </span>
                      <span className="flex items-center gap-x-1 cursor-pointer hover:text-slate-700">
                        <MdOutlineDelete className="text-red-500" />
                        Remove
                      </span>
                    </div>
                  )}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default TableAccounts;
