"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import SideDrawer from "./SideDrawer";
import { BsChevronDown } from "react-icons/bs";

const Nav = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="flex justify-between items-center px-14 py-4 shadow-xl">
        <Image
          src="/assets/logo.png"
          alt="logo"
          width={60}
          height={60}
          className="md:block hidden"
        />
        <Image
          src="/assets/logo.png"
          alt="logo"
          width={40}
          height={40}
          className="block md:hidden"
        />
        <div className="w-[550px] md:flex hidden justify-between items-center">
          <Link href="/" className="text-sky-600 font-semibold">
            Home
          </Link>
          <Link href="/" className="text-sky-600 font-semibold">
            About
          </Link>
          <Link href="/product" className="text-sky-600 font-semibold">
            Products
          </Link>
          <Link href="/" className="text-sky-600 font-semibold">
            Contact
          </Link>
          <div className="flex gap-2 items-center border-[2px] border-sky-600 rounded-full pr-3">
            <Image
              src="/assets/user.png"
              alt="user"
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="text-sky-600 font-semibold max-w-[70px] truncate ...">
              Hamza Siddque
            </p>
            <BsChevronDown color="#0284C7" />
          </div>
        </div>
        <div className="md:hidden block">
          <FaBars color="#000000" onClick={() => setOpen((prev) => !prev)} />
        </div>
      </div>
      <SideDrawer open={open} setOpen={setOpen} />
    </>
  );
};

export default Nav;
