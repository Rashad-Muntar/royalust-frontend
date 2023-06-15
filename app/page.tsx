import UserProfile from "./components/user/user";

const Home = async () => {
  return (
    <main className="flex min-h-screenvoverflow-x-hidden  flex-col items-center justify-between py-20">
      <div className="md:w-[70%] flex items-center justify-center lg:w-[60%] sm:w-[90]">
        <UserProfile />
      </div>
    </main>
  );
};

export default Home;
