"use client";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserInfo } from "../api/user";
import Cookies from "js-cookie";

const   UserProfile = () => {
    const userId = useSelector((state:any) => state.userId.id);
    const [userInfo, setUserInfo] = useState<any>(null);
    const mg = Cookies.get('accessToken')
    
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userInfo = await getUserInfo(userId)
                setUserInfo(userInfo)
            } catch (error) {
                
            }
            
        }
        fetchUser()
    },[])
    return (
    <div>
        <h1>{userInfo?.data?.user.username}</h1>
    </div>);
 }

 export default UserProfile;