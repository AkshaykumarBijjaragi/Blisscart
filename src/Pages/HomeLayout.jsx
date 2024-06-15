import { Outlet } from "react-router-dom";
const HomeLayout = () => {
  return (
    <div>
      <h1 className="text-4xl">Home Layout</h1>
      {/* This is where child routes will be rendered */}
      <Outlet />
    </div>
  );
};

export default HomeLayout;
