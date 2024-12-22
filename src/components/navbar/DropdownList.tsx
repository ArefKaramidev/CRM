import { FaCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const DropdownList = () => {
  return (
    <ul className="flex flex-col cursor-pointer">
      <NavLink
        to={"/"}
        className="text-primary-0 font-medium flex items-center gap-x-2 hover:bg-gray-100 hover:text-blue-600 h-14 px-3"
      >
        <FaCircle className="w-2 h-2" />
        Home page
      </NavLink>
      <NavLink
        to={"/sales_analyticks"}
        className="text-primary-0 font-medium flex items-center gap-x-2  hover:bg-gray-100 hover:text-blue-600 h-14 px-3"
      >
        <FaCircle className="w-2 h-2" />
        Sales Analyticks
      </NavLink>
      <NavLink
        to={"/sales_manager"}
        className="text-primary-0 font-medium flex items-center gap-x-2 hover:bg-gray-100 hover:text-blue-600 h-14 px-3"
      >
        <FaCircle className="w-2 h-2" />
        Sales manager
      </NavLink>
    </ul>
  );
};

export default DropdownList;
