import React from "react";
import {
  RiHome6Line,
  RiPercentLine,
  RiPieChartLine,
  RiMailLine,
  RiNotification3Line,
  RiSettings4Line,
  RiLogoutCircleRLine,
} from "react-icons/ri";

const Sidebar = (props) => {
  const { showMenu } = props;

  return (
    <div
      className={`bg-[#001633] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${
        showMenu ? "left-0" : "-left-full"
      }`}
    >
      <div>
        <div className="text-center my-5">
          <img src="logo-hi.png" alt="Logo de Hikari Imports" className="mx-auto w-[80%]" />
        </div>
        <ul className="pl-4">
          
          <li className="bg-[#0f243f] p-4 rounded-tl-xl rounded-bl-xl">
            <a
              href="#"
              className="bg-[#FF0613] p-4 flex justify-center rounded-xl text-white"
            >
              <RiHome6Line className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#0f243f] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#FF0613] p-4 flex justify-center rounded-xl text-[#FF0613] group-hover:text-white transition-colors"
            >
              <RiPercentLine className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#0f243f] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#FF0613] p-4 flex justify-center rounded-xl text-[#FF0613] group-hover:text-white transition-colors"
            >
              <RiPieChartLine className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#0f243f] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#FF0613] p-4 flex justify-center rounded-xl text-[#FF0613] group-hover:text-white transition-colors"
            >
              <RiMailLine className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#0f243f] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#FF0613] p-4 flex justify-center rounded-xl text-[#FF0613] group-hover:text-white transition-colors"
            >
              <RiNotification3Line className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#0f243f] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#FF0613] p-4 flex justify-center rounded-xl text-[#FF0613] group-hover:text-white transition-colors"
            >
              <RiSettings4Line className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-4">
          <li className="hover:bg-[#0f243f] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#FF0613] p-4 flex justify-center rounded-xl text-[#FF0613] group-hover:text-white transition-colors"
            >
              <RiLogoutCircleRLine className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
