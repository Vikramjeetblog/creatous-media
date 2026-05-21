import { Outlet } from "react-router-dom";
import Navbar from "../components/spotlight/Navbar";
import Footer from "../components/spotlight/Footer"
const SpotlightLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    <Footer/>
    </>
  );
};

export default SpotlightLayout;