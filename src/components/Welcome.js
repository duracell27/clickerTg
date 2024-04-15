import React from "react";
import farm from "../assets/img/farm.png";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <div className="flex flex-col justify-center w-full items-center">
        <img className="w-[200px] h-[200px]" src={farm} alt="logo" />
        <Link className="p-2 m-2 bg-green-400 " to={"/animals"}>
          Play
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
