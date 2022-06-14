import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import { useSelector } from "react-redux";
import AddProducts from "./Components/AddProducts";

function App() {
  const selector = (state: any) => state.UserData.user;
  const user = useSelector(selector);
  const isUser = localStorage.length ? true : false;
  console.log(isUser);
  console.log("In App--", user);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {isUser && <Route path="/addproducts" element={<AddProducts />} />}
        </Routes>
      </BrowserRouter>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
