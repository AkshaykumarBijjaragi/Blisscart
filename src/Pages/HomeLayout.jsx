import { Outlet } from "react-router-dom";
import { Header,Navbar } from "../components";
const HomeLayout = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      {/* This is where child routes will be rendered */}
      <section className="align-element py-20">
        <Outlet />
      </section>
    </div>
  );
};

export default HomeLayout;
