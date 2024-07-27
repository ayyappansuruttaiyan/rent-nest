import { Link } from "react-router-dom";
import {  ChevronDownIcon } from "@heroicons/react/20/solid";

function Sidebar() {
  return (
    <ul className="p-4 flex flex-col h-dvh gap-9 bg-white border rounded-lg border-slate-200 ">
      <Link to="" className="flex justify-between">
        <span>Budget</span>
        <span className="text-sm">
          <ChevronDownIcon className="size-6 text-slate-500" />
        </span>
      </Link>
      <Link to="" className="flex justify-between">
        <span>No.of Bedrooms</span>
        <span className="text-sm">
          <ChevronDownIcon className="size-6 text-slate-500" />
        </span>
      </Link>
      <Link to="" className="flex justify-between">
        <span>Type of Property</span>
        <span className="text-sm">
          <ChevronDownIcon className="size-6 text-slate-500" />
        </span>
      </Link>
      <Link to="" className="flex justify-between">
        <span>Posted By</span>
        <span className="text-sm">
          <ChevronDownIcon className="size-6 text-slate-500" />
        </span>
      </Link>
      <Link to="" className="flex justify-between">
        <span>Area</span>
        <span className="text-sm">
          <ChevronDownIcon className="size-6 text-slate-500" />
        </span>
      </Link>
      <Link to="" className="flex justify-between">
        <span>Age of Property</span>
        <span className="text-sm">
          <ChevronDownIcon className="size-6 text-slate-500" />
        </span>
      </Link>
    </ul>
  );
}

export default Sidebar;
