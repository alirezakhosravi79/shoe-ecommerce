import { useContext, useState } from "react";
import { BiCart, BiSearch, BiUser } from "react-icons/bi";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { searchProducts, quantity } = useContext(ShopContext);

  // State to store the current search query
  const [query, setQuery] = useState("");

  // Function to handle changes in the search input
  const handleSearch = (e) => {
    setQuery(e.target.value); // Update the query state with the input value
    searchProducts(e.target.value); // Call the search function from ShopContext with the query
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchProducts(query); // فقط وقتی اینتر بزنه، سرچ اجرا میشه
    }
  };
  

  return (
    <div>
      <div className="navbar flex justify-between items-center px-14 py-6 w-full z-50 transition-all duration-500 bg-gradient-to-r from-[#0f0fd7] via-[#2c67f2] to-[#00d4ff]">
        <div className="logo">
          <h2 className="text-2xl font-semibold text-white">LOGO HERE</h2>
        </div>
        <div className="relative search flex items-center">
          <BiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)} // فقط مقدار رو ذخیره می‌کنیم
            onKeyDown={handleKeyDown} // اینجا با زدن Enter سرچ اجرا میشه
            placeholder="Search for products..."
            className="pl-12 pr-10 py-3 w-130 rounded-full border-2 border-white bg-white focus:outline-none"
          />
        </div>
        <div className="nav_icon_wrapper flex items-center space-x-8">
          <Link to="/cart" className="relative">
            <BiCart className="text-3xl text-white" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs h-5 w-5 flex items-center justify-center rounded-full">
              {quantity}
            </span>
          </Link>
          <BiUser className="text-3xl text-white" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
