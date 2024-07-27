import { UserCircleIcon, HomeIcon } from "@heroicons/react/24/solid";

import { Link } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  return (
    <div className=" bg-black bg-opacity-30 flex  justify-between  p-8 items-center text-slate-200">
      <Logo />
      <div className="flex justify-between gap-4 inset-0">
        <Link to="login" className="flex gap-2 content-center items-center">
          <span className="text-sm">
            <HomeIcon className="size-6 text-slate-200" />
          </span>
          <span>Home</span>
        </Link>
        <Link to="login" className="flex gap-2 content-center items-center">
          <span className="text-sm">
            <UserCircleIcon className="size-6 text-slate-200" />
          </span>
          <span>About us</span>
        </Link>
        <Link to="login" className="flex gap-2 content-center items-center">
          <span className="text-sm">
            <UserCircleIcon className="size-6 text-slate-200" />
          </span>
          <span>Careers</span>
        </Link>
        <Link to="login" className="flex gap-2 content-center items-center">
          <span className="text-sm">
            <UserCircleIcon className="size-6 text-slate-200" />
          </span>
          <span>Login</span>
        </Link>
        <Link to="login" className="flex gap-2 content-center items-center">
          <span className="text-sm">
            <UserCircleIcon className="size-6 text-slate-200" />
          </span>
          <span>Login</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
