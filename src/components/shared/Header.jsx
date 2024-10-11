import React from "react";
import { RiSearch2Line } from "react-icons/ri";

const Header = () => {
  return (
    <header>
      {/* Title and search */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl text-gray-300">Hikari Imports</h1>
          <p className="text-gray-500">Gestiona productos, pedidos y más </p>
        </div>
        <form>
          <div className="w-full relative">
            <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
            <input
              type="text"
              className="bg-[#001633] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
              placeholder="Buscar"
            />
          </div>
        </form>
      </div>
      {/* Tabs */}
      <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
        <a
          href="#"
          className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#FF0613] before:left-0 before:rounded-full before:-bottom-[1px] text-[#FF0613]"
        >
          Todo
        </a>
        <a href="#" className="py-2 pr-4">
        Productos Activos
        </a>
        <a href="#" className="py-2 pr-4">
        Pedidos pendientes
        </a>
        <a href="#" className="py-2">
        Últimos pedidos
        </a>
      </nav>
    </header>
  );
};

export default Header;
