import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { BiCartAdd } from "react-icons/bi";
import { FaEye } from "react-icons/fa";

import { Link } from "react-router-dom";

function Product() {
  //import products az shopcontext bray namayesh products
  const { filteredProducts, addToCart } = useContext(ShopContext);

  return (
    <>
      <div className="mt-10">
        <h1 className="text-center text-4xl font-bold">Our Collection</h1>
      </div>
      <div className="grid grid-cols-1 mt-6 md:grid-cols-3 lg:grid-cols-4 gap-5 p-12">
        {filteredProducts.map((product) => {
          const { id, image, title, price } = product;
          return (
            <div key={id} className="relative overflow-hidden border border-gray-300 p-4
            text-center transition-shadow  hover:shadow-xl rounded-xl hover:bg-gray-500
             hover:text-white bg-gray-200">
              <div className="relative">
                <img src={image} alt="" className="w-full h-64 transform scale-90 transition-transform 
                duration-300 hover:scale-95"/>
                <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-3
                 opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <button onClick={() => addToCart(product, id)} 
                   className="bg-blue-500 text-white p-4 rounded-full transition-colors 
                  duration-300 hover:bg-blue-600 flex items-center justify-center">
                    <BiCartAdd className="text-2xl"/>
                  </button>
                  <Link to={`/product/${product.id}`}>
                    <button className="bg-blue-500 text-white p-4 rounded-full transition-colors duration-300 
                    hover:bg-blue-600 flex items-center justify-center">
                      <FaEye className="text-2xl" />
                    </button>
                  </Link>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-blue-700 hover:text-blue-200 text-2xl mblue my-3.5">$ {price} </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Product;
