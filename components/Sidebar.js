import React from "react";
import { BsTwitter } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { HiHashtag } from "react-icons/hi";
import { MdOutlinePeople } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";

const truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;

const truncateEthAddress = (addr) => {
  const match = addr.match(truncateRegex);
  if (!match) return addr;
  return `${match[1]}…${match[2]}`;
};

const Sidebar = () => {
  return (
    <div className="h-screen w-full sticky top-0">
      <div className="flex w-full flex-col gap-1 items-center justify-evenly h-screen">
        <BsTwitter className="text-sky-500 w-10 h-10 mt-2" />

        <div className="flex flex-col gap-2 font-body">
          <div className="flex items-left justify-left gap-3">
            <AiFillHome className="text-teal-50 w-8 h-8 mt-2 text" />
            <span className="md:hidden self-center">Home</span>
          </div>

          <div className="flex items-left justify-left gap-3">
            <HiHashtag className="text-teal-50 w-10 h-10 mt-2" />
            <span className="md:hidden self-center">Explore</span>
          </div>

          <div className="flex items-left justify-left gap-3">
            <MdOutlinePeople className="text-teal-50 w-10 h-10 mt-2" />
            <span className="md:hidden self-center">Community</span>
          </div>

          <div className="flex items-left justify-left gap-3">
            <IoIosNotificationsOutline className="text-teal-50 w-10 h-10 mt-2" />
            <span className="md:hidden self-center">Notifications</span>
          </div>

          <div className="flex items-left justify-left gap-3">
            <AiOutlineUser className="text-teal-50 w-10 h-10 mt-2" />
            <span className="md:hidden self-center">Profile</span>
          </div>

          <div className="flex items-left justify-left gap-3">
            <FiMoreHorizontal className="text-teal-50 w-10 h-10 mt-2" />
            <span className="md:hidden self-center">More</span>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col">
          <BiUserCircle className="text-sky-500 w-10 h-10 mt-2" />
          <span className="font-body">
            {truncateEthAddress(localStorage.getItem("walletAddress"))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
