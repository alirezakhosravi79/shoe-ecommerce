import { useContext, useState, useEffect, createContext } from "react";

import { productsData } from "../data";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  //1-
  const [products, setProducts] = useState(productsData);
    const [filteredProducts, setFilteredProducts] = useState(productsData);
  
  //2-
  const [cart, setCart] = useState([]);
  //3-
  const [quantity, setQuantity] = useState(0);
  //4
  const [total, setTotal] = useState(0);



  const searchProducts = (query) => {
    if (query === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };
  
  //5
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      // اگر نبود، به سبد اضافه‌اش می‌کنیم
      setCart([...cart, newItem]);
    }
  };

  //6- محاسبه قیمت کل
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      const priceAsNumber = parseFloat(currentItem.price);
      if (isNaN(priceAsNumber)) {
        return accumulator;
      }
      return accumulator + priceAsNumber * currentItem.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

  // محاسبه تعداد کل اقلام 6
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setQuantity(amount);
    }
  }, [cart]);

  //7 حذف محصول از سبد خرید ==========================
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]); //8 خالی کردن سبد خرید
  };

  //9 افزایش تعداد یک محصول
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };



  //10 کاهش تعداد
  const decreaseAmount = (id) => {
    // پیدا کردن محصول توی سبد با استفاده از id
    const cartItem = cart.find((item) => item.id === id);
  
    // اگه محصول وجود داشت
    if (cartItem) {
      // اگه تعدادش کمتر از 2 بود، حذفش کن (یعنی به 0 رسید)
      if (cartItem.amount < 2) {
        removeFromCart(id);
      } else {
        // در غیر این صورت، یکی از تعداد کم کن
        const newCart = cart.map((item) => {
          if (item.id === id) {
            return { ...item, amount: cartItem.amount - 1 };
          } else {
            return item;
          }
        });
  
        setCart(newCart);
      }
    }
  };
  
  return (
    <ShopContext.Provider
      value={{
        products,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        quantity,
        cart,
        filteredProducts,
        searchProducts
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
