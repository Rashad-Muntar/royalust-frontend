import Cookies from "js-cookie";
const fetchData = async (url: string) => {
    // const mg = Cookies.get('accessToken')
    const headers: HeadersInit = { 'Authorization': Cookies.get('accessToken') || '' }
  try {
    const response = await fetch(url, { headers });
    const responseData = await response.json();
    return responseData;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default fetchData;
