import Login from "@/app/components/auth/login";
import { useRouter } from 'next/navigation'

const Page = async () => {
  
  return (
    <div>
      {/* <h1>Login</h1> */}
      <Login />
    </div>
  );
};

export default Page;
