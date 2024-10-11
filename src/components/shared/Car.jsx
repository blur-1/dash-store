import React from "react";
import { RiCloseLine, RiDeleteBin6Line } from "react-icons/ri";

const Card = (props) => {
  const { showOrder, setShowOrder } = props;
  return (
    <div
      className={`lg:col-span-2 fixed top-0 bg-[#001633] w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${
        showOrder ? "right-0" : "-right-full"
      }`}
    >
      {/* Orders */}
      <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
        <RiCloseLine
          onClick={() => setShowOrder(false)}
          className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#0f243f] rounded-full text-xl"
        />
        <h1 className="text-2xl my-4">Orden #30807</h1>
        {/* Pills */}
        <div className="flex items-center gap-2 flex-wrap mb-8">
          <button className="bg-[#FF0613] text-white py-2 px-4 rounded-xl">
          En Curso
          </button>
          <button className="text-[#FF0613] py-2 px-4 rounded-xl border border-gray-500">
          En Espera
          </button>
          <button className="text-[#FF0613] py-2 px-4 rounded-xl border border-gray-500">
          Finalizado
          </button>
        </div>
        {/* Car */}
        <div>
        <div class="grid grid-cols-6 gap-4 mb-4 p-4">
          <h5 class="col-span-2 truncate">Item</h5>
          <h5 class="col-span-2 text-right">Cantidad</h5>
          <h5 class="col-span-2 text-right">Precio</h5>
        </div>

          {/* Products */}
          <div className="h-[400px] md:h-[700px] lg:h-[540px] overflow-scroll">
            {/* Product */}
            <div className="bg-[#0f243f] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-4">
                {/* Product description */}
                <div className="col-span-4 flex items-center gap-3">
                  <img src="3.webp" className="w-10 h-10 object-cover" />
                  <div>
                    <h5 className="text-sm">Figura coleccionable...</h5>
                    <p className="text-xs text-gray-500">S/. 50</p>
                  </div>
                </div>
                {/* Qty */}
                <div>
                  <span>2</span>
                </div>
                {/* Price */}
                <div>
                  <span>S/. 25</span>
                </div>
              </div>
              {/* Note */}
              <div className="grid grid-cols-6 items-center">
                <form className="col-span-5">
                  <input
                    type="text"
                    className="bg-[#001633] py-2 px-4 rounded-lg outline-none"
                    placeholder="Añadir nota..."
                  />
                </form>
                <div>
                  <button className="border border-red-500 p-2 rounded-lg">
                    <RiDeleteBin6Line className="text-red-500" />
                  </button>
                </div>
              </div>
            </div>
            {/* Product */}
            <div className="bg-[#0f243f] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-4">
                {/* Product description */}
                <div className="col-span-4 flex items-center gap-3">
                  <img src="3.webp" className="w-10 h-10 object-cover" />
                  <div>
                    <h5 className="text-sm">Figura coleccionable...</h5>
                    <p className="text-xs text-gray-500">S/. 50</p>
                  </div>
                </div>
                {/* Qty */}
                <div>
                  <span>2</span>
                </div>
                {/* Price */}
                <div>
                  <span>S/. 25</span>
                </div>
              </div>
              {/* Note */}
              <div className="grid grid-cols-6 items-center">
                <form className="col-span-5">
                  <input
                    type="text"
                    className="bg-[#001633] py-2 px-4 rounded-lg outline-none"
                    placeholder="Añadir nota..."
                  />
                </form>
                <div>
                  <button className="border border-red-500 p-2 rounded-lg">
                    <RiDeleteBin6Line className="text-red-500" />
                  </button>
                </div>
              </div>
            </div>
            {/* Product */}
            <div className="bg-[#0f243f] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-4">
                {/* Product description */}
                <div className="col-span-4 flex items-center gap-3">
                  <img src="3.webp" className="w-10 h-10 object-cover" />
                  <div>
                    <h5 className="text-sm">Figura coleccionable...</h5>
                    <p className="text-xs text-gray-500">S/. 50</p>
                  </div>
                </div>
                {/* Qty */}
                <div>
                  <span>2</span>
                </div>
                {/* Price */}
                <div>
                  <span>S/. 25</span>
                </div>
              </div>
              {/* Note */}
              <div className="grid grid-cols-6 items-center">
                <form className="col-span-5">
                  <input
                    type="text"
                    className="bg-[#001633] py-2 px-4 rounded-lg outline-none"
                    placeholder="Añadir nota..."
                  />
                </form>
                <div>
                  <button className="border border-red-500 p-2 rounded-lg">
                    <RiDeleteBin6Line className="text-red-500" />
                  </button>
                </div>
              </div>
            </div>
            {/* Product */}
            <div className="bg-[#0f243f] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-4">
                {/* Product description */}
                <div className="col-span-4 flex items-center gap-3">
                  <img src="3.webp" className="w-10 h-10 object-cover" />
                  <div>
                    <h5 className="text-sm">Figura coleccionable...</h5>
                    <p className="text-xs text-gray-500">S/. 50</p>
                  </div>
                </div>
                {/* Qty */}
                <div>
                  <span>2</span>
                </div>
                {/* Price */}
                <div>
                  <span>S/. 25</span>
                </div>
              </div>
              {/* Note */}
              <div className="grid grid-cols-6 items-center">
                <form className="col-span-5">
                  <input
                    type="text"
                    className="bg-[#001633] py-2 px-4 rounded-lg outline-none"
                    placeholder="Añadir nota..."
                  />
                </form>
                <div>
                  <button className="border border-red-500 p-2 rounded-lg">
                    <RiDeleteBin6Line className="text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Submit payment */}
        <div className="bg-[#0f243f] absolute w-full bottom-0 left-0 p-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400">Descuento</span>
            <span>S/. 0</span>
          </div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-gray-400">Subtotal</span>
            <span>S/. 250.00</span>
          </div>
          <div>
            <button className="bg-[#FF0613] w-full py-2 px-4 rounded-lg">
              Procesar orden
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
