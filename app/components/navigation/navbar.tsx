"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';
import { FaRegUserCircle } from 'react-icons/fa';
import Cookies from "js-cookie";

const Navbar = () => {
  const path = usePathname();
  const accessToken = Cookies.get("accessToken");
  const [islogin, setIslogin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (accessToken) {
      setIslogin(true);
    } else {
      setIslogin(false);
    }
  }, [path]);

  const logoutHandler = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    setIslogin(false);
    router.push("/auth/login");
  };
  return (
    <div className="bg-white lg:px-20 md:px15 sm:px-10 md- h-[50px] w-full text-black flex justify-between  items-center">
      <div>
        <Link href="/">Royalust</Link>
      </div>
      <div>
        {islogin ? (
          <div className="flex items-center">
            <div onClick={logoutHandler} className="ml-10 cursor-pointer">
              Log out
            </div>
            <FaRegUserCircle className="h-[30px] text-gray ml-5 w-[30px] color-gray"/>
          </div>
        ) : (
          <Link href="/auth/login">Log in</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
