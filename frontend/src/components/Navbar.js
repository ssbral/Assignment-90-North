import { GoHome } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { GrOverview } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";

import JoshSimmons from "../assets/JoshSimmons.png";

const Navbar = () => {
  return (
    <div className="flex justify-between border-2 rounded-full p-1 bg-white">
        {/* Logo */}
        <div className="ml-2 flex items-center">
            <p className="text-xl font-extrabold ml-8">LOGO</p>
        </div>

        {/* Nav Menu */}
        <div className="flex my-2">
            <div className="flex justify-between items-center mx-2 rounded-full py-0 px-3 hover:bg-[#01F0D0] space-x-2">
                <GoHome />
                <h1>Home</h1>
            </div>
            <div className="flex justify-between items-center mx-2 rounded-full py-0 px-3 hover:bg-[#01F0D0] space-x-2">
                <GrOverview />
                <h1>Overview</h1>
            </div>
            <div className="flex justify-between items-center mx-2 rounded-full py-0 px-3 hover:bg-[#01F0D0] space-x-2">
                <CiCalendar />
                <h1>About</h1>
            </div>
            <div className="flex justify-between items-center mx-2 rounded-full py-0 px-3 hover:bg-[#01F0D0] space-x-2">
                <FaRegMessage />
                <h1>Contact</h1>
            </div>
        </div>

        {/* profile */}
        <div className="flex justify-between p-2 mr-5">
            <div>
                <img src={JoshSimmons} alt="doctor" className="h-10 w-10" />
            </div>
            <div className="border-r-2 px-2">
                <h1 className="text-sm font-semibold">Dr. Josh Simmons</h1>
                <p className="text-sm text-gray-500 font-normal">Doctor</p>
            </div>
            <div className="flex items-center text-xl p-1">
                <IoSettingsOutline />
            </div>
        </div>
    </div>
  )
}

export default Navbar;
