"use client";
import { useSelector } from "react-redux";
import { useState } from "react";
import Tabs from "./setttingTabs";
import { settingsBtns } from "@/app/resource/data";
import Cookies from "js-cookie";

const UserProfile = () => {
  const user = useSelector((state: any) => state.user?.currentUser); 
  const [userInfo, setUserInfo] = useState<any>(null);
  const accessToken = Cookies.get("accessToken");
  return (
    <div className="w-[60%] bg-primaryWhite text-primaryBlack p-10 rounded-lg">
      <div>
        <h1 className="text-2xl">Welcome {user?.username}</h1>
        <p>Set your account settings down below</p>
      </div>
      <div>
        <Tabs btns={settingsBtns}/>
      </div>
    </div>
  );
};

export default UserProfile;
