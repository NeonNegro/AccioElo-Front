import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ShoppingCart from "./pages/ShoppingCart";
import Payment from "./pages/Payment";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";



function App() {


  return (
    <CartProvider>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={< Products/>} />
          <Route path='/login' element={< Login/>} />
          <Route path='/sign-up' element={< SignUp/>} />
          <Route path='/shopping-cart' element={< ShoppingCart/>} />
          <Route path='/payment' element={< Payment/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    </CartProvider>
  )
}

export default App;