import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../NAvbar";

const MainLayouts = () => {
    return (
      <div>
        {/* Navbar */}
        <Navbar></Navbar>
        <div className="min-h-[calc(100vh-232px)] py-12"> {/* Dynamic section */}
          <Outlet></Outlet>
        </div>
        {/* footer */}
        <Footer></Footer>
      </div>
    );
};

export default MainLayouts;