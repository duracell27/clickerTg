import React, { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AppContext } from "../App";
import { useLocation } from "react-router-dom";
import Welcome from "./Welcome";

const Nav = () => {
  const { userInfo } = useContext(AppContext);
  let location = useLocation();
  //  console.log(location.pathname)
  return (
    <div className="">
      <div className="flex mb-1  justify-around p-2 bg-slate-400 w-full">
        <p className="px-10 bg-slate-300 text-black">
          <strong>Gold:</strong> {userInfo.gold}{" "}
        </p>
        <p className="px-10 bg-slate-300 text-black">
          <strong>Exp:</strong> {userInfo.exp}{" "}
        </p>
      </div>
      <Outlet />
      <div className="mt ">
        {location.pathname === "/" ? <Welcome /> : ""}
        <div className=" flex justify-around p-2 bg-slate-400">
          <NavLink
            to={`animals/`}
            className={({ isActive }) =>
              isActive
                ? "active px-10 bg-slate-300 text-black"
                : " px-10 bg-slate-300 text-black"
            }
          >
            <button>Animals</button>
          </NavLink>
          <NavLink
            to={`werehouse/`}
            className={({ isActive }) =>
              isActive
                ? "active px-10 bg-slate-300 text-black"
                : " px-10 bg-slate-300 text-black"
            }
          >
            <button>Werehouse</button>
          </NavLink>
          <NavLink
            to={`shop/`}
            className={({ isActive }) =>
              isActive
                ? "active px-10 bg-slate-300 text-black"
                : " px-10 bg-slate-300 text-black"
            }
          >
            <button>Shop</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
