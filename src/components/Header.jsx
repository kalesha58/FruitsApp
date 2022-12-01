import React from "react";
import Logo from "../img/logo.png";
import avatar from "../img/avatar.png";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "../Context/StateProvider";
import { actionType } from "../Context/reducer";
import { useState } from "react";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();
  const [isMenu, setMenu] = useState(false);
  // const [alertStatus, setAlertStatus] = useState("danger");
  // const [msg, setMsg] = useState(null);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      console.log(user)
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
      // setMsg("Image uploaded successfully 😊");
      // setAlertStatus("success");
      alert("User login Success")
      // console.log(user.photoURL)
    } else {
      setMenu(!isMenu);
    }
  };

  //   ======================LOGOUT==================
  const logOut = () => {
    setMenu(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
    alert(`User logout Success`)
  };

  const showcart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  return (
    <header className=" fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
      {/* FOR DESKTOP AND TABLET VIWE */}
      <div className="hidden md:flex w-full h-full items-center justify-between ">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-9 object-cover" alt="" />
          <p className="text-headingColor text-xl font-bold ">Moon</p>
        </Link>
        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-24 "
          >
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Service
            </li>
          </motion.ul>
          <div className=" relative flex items-center justify-center">
            <MdShoppingBasket
              className="text-textcolor text-2xl  cursor-pointer"
              onClick={showcart}
            />
            {cartItems && cartItems.length > 0 && (
              <div className="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center ">
                <p className="text-xs text-white font-semibold">
                  {cartItems.length}
                </p>
              </div>
            )}
          </div>
          {/* USER  IMAGES*/}
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : avatar}
              alt="user_profile"
              className="w-10  min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl cursor-pointer rounded-full "
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className=" flex  flex-col w-40 bg-gray-50  shadow-xl rouded-lg absolute top-12 right-0 px-4 py-2 "
              >
                {user && user.email === "kalesha786kareem@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p className=" flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base ">
                      New Item
                      <MdAdd />{" "}
                    </p>
                  </Link>
                )}
                <p
                  className=" flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base "
                  onClick={logOut}
                >
                  Logout
                  <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* MOBILE VIEW */}
      <div className="flex items-center justify-between md:hidden w-full  h-full">
        <div className=" relative flex items-center justify-center">
          <MdShoppingBasket
            className="text-textcolor text-2xl  cursor-pointer"
            onClick={showcart}
          />
          {cartItems && cartItems.length > 0 && (
            <div className="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center ">
              <p className="text-xs text-white font-semibold">
                {cartItems.length}
              </p>
            </div>
          )}
        </div>
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-9 object-cover" alt="" />
          <p className="text-headingColor text-xl font-bold ">Moon</p>
        </Link>
        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : avatar}
            alt="user_profile"
            className="w-10  min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl cursor-pointer rounded-full "
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className=" flex  flex-col w-40 bg-gray-50  shadow-xl rouded-lg absolute top-12 right-0 px-4 py-2 "
            >
              {user && user.email === "kalesha786kareem@gmail.com" && (
                <Link to={"/createItem"}>
                  <p
                    className=" px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base "
                    onClick={() => setMenu(false)}
                  >
                    New Item
                    <MdAdd />{" "}
                  </p>
                </Link>
              )}
              <ul className="flex flex-col ">
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setMenu(false)}
                >
                  Home
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setMenu(false)}
                >
                  Menu
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setMenu(false)}
                >
                  About Us
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setMenu(false)}
                >
                  Service
                </li>
              </ul>
              <p
                className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-slate-200  gap-3 cursor-pointer hover:bg-slate-400 transition-all duration-100 ease-in-out text-textColor text-base  "
                onClick={logOut}
              >
                Logout
                <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
