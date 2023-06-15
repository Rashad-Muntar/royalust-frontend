"use client";
import { useSelector } from "react-redux";
import Tabs from "./setttingTabs";
import { settingsBtns } from "@/app/resource/data";

const UserProfile = () => {
  const user = useSelector((state: any) => state.user?.currentUser); 

  return (
    <div className="w-[90%] bg-primaryWhite text-primaryBlack p-5 rounded-lg">
      <div>
        <h1 className="text-2xl">Welcome {user?.username}</h1>
        <p>Set your account settings down below</p>
      </div>
      <div className="w-full">
        <Tabs btns={settingsBtns}/>
      </div>
    </div>
  );
};

export default UserProfile;
