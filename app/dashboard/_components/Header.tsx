import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="p-5 shadow-sm border-b-2 bg-white flex justify-center  items-center ">
      <div className="flex gap-5 items-center">
        <Link
          href={"https://github.com/shreyzeous21"}
          target="_blank"
          className="bg-primary p-2 hover:bg-gray-600 hover:text-black rounded-sm text-sm text-white px-4"
        >
          Follow Me On Github
        </Link>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
