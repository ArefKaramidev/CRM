import { IoSearchOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { LuBell } from "react-icons/lu";

import Input from "./Input";
const Header = () => {
  return (
    <div
      className="w-full hidden px-10 h-20 border sm:flex justify-between items-center 
     z-30 bg-white"
    >
      <div>
        <Input
          icon={<IoSearchOutline className="text-gray-400 text-xl" />}
          placeHolder="Search"
          type="text"
          inputStyle=" bg-gray-100 border-none outline-none px-2 py-2 w-96"
          parentStyle="bg-gray-100"
        />
      </div>
      <div className="flex items-center justify-evenly gap-x-10">
        <div className="flex items-center gap-x-5">
          <FaPlus className="text-gray-500 text-xl" />
          <LuBell className="text-gray-500 text-xl" />
        </div>
        <div className="flex items-center relative">
          <img
            src="/src/img/3052.png_300.png"
            alt=""
            className="rounded-full w-10 h-10 bg-gray-100 absolute -left-8"
          />
          <span className="bg-gray-100 px-3 py-2 rounded-r-xl">
            Aref karami
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
