import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
function AppLayout() {
  return (
    <div className="grid grid-cols-4 grid-rows-1 gap-8 bg-slate-50">
      <div className="col-span-4 row-span-1">
        <Header />
      </div>
      <div className="col-span-1 row-span-2 ml-8">
        <Sidebar />
      </div>
      <Outlet />
      <div className="col-span-4 row-span-1">
        <Footer />
      </div>
    </div>
  );
}

export default AppLayout;
