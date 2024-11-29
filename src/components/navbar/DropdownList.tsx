import { FaCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const DropdownList = () => {
  return (
    <ul className="flex flex-col">
      <li className="text-primary-0 font-medium flex items-center gap-x-2 hover:bg-gray-100 hover:text-blue-600 h-14 px-3">
        <FaCircle className="w-2 h-2" />
        <NavLink to={"/"}>Home page</NavLink>
      </li>
      <li className="text-primary-0 font-medium flex items-center gap-x-2  hover:bg-gray-100 hover:text-blue-600 h-14 px-3">
        <FaCircle className="w-2 h-2" />
        Sales analytics
      </li>
      <li className="text-primary-0 font-medium flex items-center gap-x-2 hover:bg-gray-100 hover:text-blue-600 h-14 px-3">
        <FaCircle className="w-2 h-2" />
        Sales manager
      </li>
    </ul>
  );
};

export default DropdownList;
