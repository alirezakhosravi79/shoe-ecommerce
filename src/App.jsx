import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes , Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/cart/Cart"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={< Cart/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App