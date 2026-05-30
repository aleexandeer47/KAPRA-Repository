import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Profile from './Page/Profile'
import Login from './Page/LoginPage'
import ForgotPassword from './Page/ForgotPasswordPage'
import NewPassword from './Page/NewPasswordPage'
import VerificationCode from "./Page/VerificationCodePage"
import BaseProduct from "./Page/Baseproduct"
import OrderTracking from "./Page/OrderTracking"
import Order from "./Page/Orders"
//import Pagina from "./Page/Pagina"


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/newpassword" element={<NewPassword />} />
          <Route path="/verificationcode" element={<VerificationCode />} />
          <Route path="/BaseProduct" element={<BaseProduct />} />
          <Route path="/OrderTracking" element={<OrderTracking />} />
          <Route path="/Order" element={<Order />} />
          {/*<Route path="/Pagina" element={<Pagina/>} />*/}
        </Routes>
      </Router>
    </>
  )
}

export default App
