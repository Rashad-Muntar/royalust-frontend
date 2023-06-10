interface signupProps {
  username: string;
  email: string;
  password: string;
}
const signupService = async ({ username, email, password }: signupProps) => {
  const update = { username, email, password };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(update),
  };
  try {
    const newUser = await fetch("http://localhost:4000/api/register", options);
    const data = await newUser.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default signupService;
