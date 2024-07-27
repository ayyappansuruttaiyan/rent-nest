import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Header() {
  return (
    <div className=" flex  justify-between bg-blue-700 p-8 items-center text-slate-200">
      <Logo />
      <div className="w-[50%] ml-4 mr-4">
        <input
          className="p-3 w-[100%] rounded-md  "
          type="search"
          placeholder="Enter locality / Project / Society / Landmark"
        />
      </div>
      <div>
        <p>Sell / Rent Property</p>
      </div>

      <Link to="login" className="flex gap-2 content-center items-center">
        <span className="text-sm">
          <UserCircleIcon className="size-6 text-slate-200" />
        </span>
        <span>Login</span>
      </Link>
    </div>
  );
}

export default Header;
