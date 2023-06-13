import Login from "@/app/components/auth/login";
import { useRouter } from 'next/navigation'

const Page = async () => {
  
  return (
    <div className="overflow-hiden h-full">
      <Login />
    </div>
  );
};

export default Page;
