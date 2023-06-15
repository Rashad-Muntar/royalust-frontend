import Button from "../share/Button";
import { useState } from "react";
import { settingsBtns } from "@/app/resource/data";
import UpdateProfile from "./updateProfile";

interface Props {
  btns: string[];
}
const Tabs = ({ btns }: Props) => {
  const [activeButton, setActiveButton] = useState(settingsBtns[0]);

  const handleClick = (btn: any) => {
    setActiveButton(btn);
  };

  return (
    <>
      <div className="flex mt-10 flex-col rounded-lg md:flex-row bg-gray-100 w-full items-center justify-center">
        {btns.map((btn, index) => (
          <Button
          key={index}
            style={`w-60 ${activeButton === btn ? 'active' : ''}`}
            type="button"
            text={btn}
            onClick={() => handleClick(btn)}
          />
        ))}
      </div>
       <UpdateProfile />
    </>
   
  );
};

export default Tabs;
