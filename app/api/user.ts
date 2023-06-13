import fetchData from "../utils/fetchData";
import postData from "../utils/postData";

interface UserProps {
  id: number;
  username: string;
  email: string;
}


const getUserInfo = async (id: number) => {
  const url = `http://localhost:4000/api/user/${id}`;
  try {
    const data = await fetchData(url);
    return data;
  } catch (error: any) {
    return error.message;
  }
};

const updateProfile = async ({id, username, email}:UserProps) => {
  const userId = { id, username, email };
  const url = "http://localhost:4000/api/updateUser";
  try {
    const data = await postData(url, userId, "PUT");
    return data;
  } catch (error: any) {
    return error.message;
  }
};



export { getUserInfo, updateProfile };
