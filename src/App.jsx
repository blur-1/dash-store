import { useState } from "react";
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiArrowDownSLine,
} from "react-icons/ri";
// Components
import Sidebar from "./components/shared/Sidebar";
import Car from "./components/shared/Car";
import Header from "./components/shared/Header";
import Card from "./components/shared/Card";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  return (
    <div className="bg-[#0f243f] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <Car showOrder={showOrder} setShowOrder={setShowOrder} />
      {/* Menu movil */}
      <nav className="bg-[#001633] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button onClick={toggleOrders} className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
          {/* Header */}
          <Header />
          {/* Title content */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Visualiza todo el inventario</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#001633] py-2 px-4 rounded-lg">
              <RiArrowDownSLine /> Menor precio
            </button>
          </div>
          {/* Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16">
            {/* Card */}
            <Card
              img="0.webp"
              description="Producto Coleccionable"
              price="25"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="1.webp"
              description="Producto Coleccionable"
              price="25"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="2.webp"
              description="Producto Coleccionable"
              price="25"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="3.webp"
              description="Producto Coleccionable"
              price="25"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="4.webp"
              description="Producto Coleccionable"
              price="25"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="5.webp"
              description="Producto Coleccionable"
              price="25"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="6.webp"
              description="Producto Coleccionable"
              price="25"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="7.webp"
              description="Producto Coleccionable"
              price="25"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="8.webp"
              description="Producto Coleccionable"
              price="25"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="9.webp"
              description="Producto Coleccionable"
              price="25"
              inventory="20"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
