"use client";
import Button from "../share/Button";
import { useState } from "react";

import UpdateProfile from "./updateProfile";

interface Props {
  btns: string[];
}
const Tabs = ({ btns }: Props) => {
  const [activeButton, setActiveButton] = useState(btns[0]);

  const handleClick = (btn: any) => {
    setActiveButton(btn);
  };

  return (
    <>
      <div className="flex mt-10 w-full flex-col rounded-lg md:flex-row bg-gray-100 w-full items-center justify-center">
        {btns.map((btn, index) => {
          return (
            <Button
              key={index}
              style={`md:w-60 sm:[100%] ${
                activeButton === btn ? "bg-primaryWhite shadow-md" : ""
              }`}
              type="button"
              text={btn}
              onClick={() => handleClick(btn)}
            />
          );
        })}
      </div>
      {activeButton === "Profile" ? (
        <UpdateProfile />
      ) : (
        <div>
          <p>We are working on it</p>
        </div>
      )}
    </>
  );
};

export default Tabs;
