import { TbCategory } from "react-icons/tb";
import { TbReportAnalytics } from "react-icons/tb";
import { LuTicket } from "react-icons/lu";
import { TiDocumentText } from "react-icons/ti";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { useState } from "react";

const Menu = () => {
    const [activeLink, setActiveLink] = useState("/");
    console.log(activeLink);
    return (
        <div>
            <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 h-full text-white transition-all duration-300 border-none z-10 sidebar">
                <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow mt-5">
                    <ul className="flex flex-col py-4 space-y-2">
                        <li>
                            <a href="/" onClick={() => setActiveLink("/")} className={`relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-[#605BFF] dark:hover:border-blue-800 pr-6 group ${activeLink === "/" ? "text-blue-600" : ""}`}>
                                <TbCategory className={`ml-2 w-6 h-6 text-sm text-gray-400 font-nunito font-medium group-hover:text-[#605BFF] ${activeLink === "/" ? "text-[#605BFF]" : ""}`} />
                                <span className={`ml-2 text-sm tracking-wide truncate md:block hidden text-gray-400 font-nunito font-medium group-hover:text-[#605BFF] ${activeLink === "/" ? "text-[#605BFF]" : ""}`}>Dashboard</span>
                            </a>
                        </li>
                        <li>
                        <a href="/upload" onClick={() => setActiveLink("/upload")} className={`relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-[#605BFF] dark:hover:border-blue-800 pr-6 group ${activeLink === "/upload" ? "text-[#605BFF]" : ""}`}>
                                <TbReportAnalytics className={`ml-2 w-6 h-6 text-sm text-gray-400 font-nunito font-medium group-hover:text-[#605BFF] ${activeLink === "/upload" ? "text-[#605BFF]" : ""}`} />
                                <span className={`ml-2 text-sm tracking-wide truncate md:block hidden text-gray-400 font-nunito font-medium group-hover:text-[#605BFF] ${activeLink === "/upload" ? "text-[#605BFF]" : ""}`}>Upload</span>
                            </a>
                        </li>
                        <li>
                            <a href="/invoice" className="relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-[#605BFF] dark:hover:border-blue-800 pr-6 group">
                                <LuTicket className="ml-2 w-6 h-6 text-sm tracking-wide truncate text-gray-400 font-nunito font-medium group-hover:text-[#605BFF]" />
                                <span className="ml-2 text-sm tracking-wide truncate md:block hidden text-gray-400 font-nunito font-medium group-hover:text-[#605BFF]">Invoice</span>
                            </a>
                        </li>
                        <li>
                            <a href="/schedule" className="relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-[#605BFF] dark:hover:border-blue-800 pr-6 group">
                                <TiDocumentText className="ml-2 w-6 h-6 text-sm tracking-wide truncate text-gray-400 font-nunito font-medium group-hover:text-[#605BFF]" />
                                <span className="ml-2 text-sm tracking-wide truncate md:block hidden text-gray-400 font-nunito font-medium group-hover:text-[#605BFF]">Schedule</span>
                            </a>
                        </li>
                        <li>
                            <a href="/calendar" className="relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-[#605BFF] dark:hover:border-blue-800 pr-6 group">
                                <FaRegCalendarAlt className="ml-2 w-6 h-6 text-sm tracking-wide truncate text-gray-400 font-nunito font-medium group-hover:text-[#605BFF]" />
                                <span className="ml-2 text-sm tracking-wide truncate md:block hidden text-gray-400 font-nunito font-medium group-hover:text-[#605BFF]">Calendar</span>
                            </a>
                        </li>
                        <li>
                            <a href="/notification" className="relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-[#605BFF] dark:hover:border-blue-800 pr-6 group">
                                <IoIosNotifications className="ml-2 w-6 h-6 text-sm tracking-wide truncate text-gray-400 font-nunito font-medium group-hover:text-[#605BFF]" />
                                <span className="ml-2 text-sm tracking-wide truncate md:block hidden text-gray-400 font-nunito font-medium group-hover:text-[#605BFF]">Notification</span>
                            </a>
                        </li>
                        <li>
                            <a href="/settings" className="relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-[#605BFF] dark:hover:border-blue-800 pr-6 group">
                                <IoIosSettings className="ml-2 w-6 h-6 text-sm tracking-wide truncate text-gray-400 font-nunito font-medium group-hover:text-[#605BFF]" />
                                <span className="ml-2 text-sm tracking-wide truncate md:block hidden text-gray-400 font-nunito font-medium group-hover:text-[#605BFF]">Settings</span>

                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Menu