import fetchData from "../utils/fetchData";

const getUserInfo = async (id: number) => {
  const userId = { id };
  const url = `http://localhost:4000/api/user/${id}`;
  try {
    const data = await fetchData(url);
    return data;
  } catch (error: any) {
    return error.message;
  }
};

export { getUserInfo };
