import fetchData from "../utils/fetchData";
interface signupProps {
  username: string;
  email: string;
  password: string;
}

type loginProps = Omit<signupProps, "username">;





const signupService = async ({ username, email, password }: signupProps) => {
  const update = { username, email, password };
  const url = "http://localhost:4000/api/register";
  try {
    const data = await fetchData(url, update, "POST");
    return data;
  } catch (error: any) {
    return error.message;
  }
};

const loginService = async ({ email, password }: loginProps) => {
    const update = { email, password };
    const url = "http://localhost:4000/api/login";
    try {
      const data = await fetchData(url, update, "POST");
      return data;
    } catch (error: any) {
      return error.message;
    }
  };


export {signupService, loginService};
