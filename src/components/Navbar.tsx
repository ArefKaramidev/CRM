import { useState } from "react";

import { TbLayoutDashboardFilled } from "react-icons/tb";
import { IoChevronDownSharp } from "react-icons/io5";
import { IoChevronUpSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
import { GrGroup } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { BsActivity } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi2";
import { FcPieChart } from "react-icons/fc";

import Sections from "./Sections";
import DropdownList from "./DropdownList";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col w-72 border space-x-4 fixed top-0 h-full justify-evenly">
      <span className="font-medium text-3xl flex items-center px-10">
        <FcPieChart className="w-10 h-10" />
        CRMHUB
      </span>
      <div className="pb-5">
        <span className="text-gray-400 font-medium px-2">MENU</span>
        <span
          className="text-primary-0 hover:bg-blue-200 hover:bg-opacity-10 hover:text-blue-600 flex items-center gap-x-2 font-medium h-16"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <TbLayoutDashboardFilled className="w-5 h-5" /> Dashboard
          {isOpen ? (
            <IoChevronUpSharp className="ml-24" />
          ) : (
            <IoChevronDownSharp className="ml-24" />
          )}
        </span>

        {isOpen && <DropdownList />}

        <Sections>
          <FaRegUser className="w-5 h-5" /> Accounts
        </Sections>
      </div>

      <section>
        <span className="text-gray-400 font-medium px-2">LEADS</span>
        <div>
          <Sections>
            <RiContactsLine className="w-5 h-5" /> Contacts
          </Sections>

          <Sections>
            <GrGroup className="w-5 h-5" /> Leads
          </Sections>

          <Sections>
            <SlCalender className="w-5 h-5" /> Calender
          </Sections>
        </div>
      </section>

      <section>
        <span className="text-gray-400 font-medium px-2">CASES</span>
        <div>
          <Sections>
            <PiSuitcaseSimpleLight className="w-5 h-5" /> Cases
          </Sections>

          <Sections>
            <BsActivity className="w-5 h-5" /> Acrivity
          </Sections>

          <Sections>
            <HiOutlineUsers className="w-5 h-5" /> Users
          </Sections>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
