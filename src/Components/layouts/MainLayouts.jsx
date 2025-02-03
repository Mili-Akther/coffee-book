import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../NAvbar";
import { Toaster } from "react-hot-toast";
const MainLayouts = () => {
    return (
      <div>
        <Toaster></Toaster>
        {/* Navbar */}
        <div className="h-16">
          <Navbar></Navbar>
        </div>
        <div className="min-h-[calc(100vh-232px)] py-12 container mx-auto px-12">
          {" "}
          {/* Dynamic section */}
          <Outlet></Outlet>
        </div>
        {/* footer */}
        <Footer></Footer>
      </div>
    );
};

export default MainLayouts;