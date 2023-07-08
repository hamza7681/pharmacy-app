"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import SideDrawer from "./SideDrawer";
import { BsChevronDown } from "react-icons/bs";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [open, setOpen] = useState(true);
  const [toggle, setToggle] = useState(false);
  const routes = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/product", name: "Products" },
    { path: "/contact", name: "Contact" },
  ];
  const pathname = usePathname();
  const isLoggedIn = true;

  return (
    <>
      <nav className="flex sticky bg-white top-0 justify-between items-center px-10 lg:px-14 py-4 shadow-xl">
        <Image
          src="/assets/logo.png"
          alt="logo"
          width={60}
          height={60}
          className="lg:block hidden"
        />
        <Image
          src="/assets/logo.png"
          alt="logo"
          width={40}
          height={40}
          className="block lg:hidden"
        />
        <div className="w-[550px] lg:flex hidden justify-between items-center">
          {routes.map((val, index) => {
            return (
              <Link
                href={val.path}
                key={index}
                className={`${
                  pathname === val.path ? "bg-sky-600 text-white" : "bg-white"
                } text-sky-600 font-semibold  hover:bg-sky-600 hover:text-white py-[6px] px-2 rounded-[4px]`}
                onClick={() => setOpen(false)}
              >
                {val.name}
              </Link>
            );
          })}
          {isLoggedIn ? (
            <div
              className="relative flex gap-2 items-center cursor-pointer border-[2px] border-sky-600 rounded-full pr-3"
              onMouseEnter={() => setToggle(true)}
              onMouseLeave={() => setToggle(false)}
            >
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

              <BsChevronDown
                color="#0284C7"
                className={`${
                  toggle ? "-rotate-180" : "rotate-0"
                } transition-all ease-linear duration-200`}
              />

              <div
                className={`absolute ${
                  toggle ? "max-h-[150px] border-[0.5px] py-[20px]" : "max-h-0"
                } w-[230px] gap-4 top-11 right-0 overflow-hidden rounded-[4px] bg-white  shadow-sm flex flex-col items-center justify-center transition-all ease-linear duration-200`}
              >
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/user.png"
                    alt="user"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <p className="text-sky-600 font-semibold">Hamza Siddque</p>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="w-[180px] border-[0.5px] border-sky-600 text-sky-600 rounded-full h-[25px] text-sm flex items-center justify-center hover:bg-sky-600 hover:text-white hover:transition-all transition-all">
                    Profile
                  </button>
                  <button className="w-[180px] border-[0.5px] border-sky-600 text-sky-600 rounded-full h-[25px] text-sm flex items-center justify-center hover:bg-sky-600 hover:text-white hover:transition-all transition-all">
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex gap-4 items-center">
              <Link
                href="/login"
                className="border-[2px] border-sky-600 rounded-full w-[100px] h-10 font-semibold text-sky-600 flex items-center justify-center"
              >
                Log in
              </Link>
              <Link
                href="/"
                className="border-[2px] bg-sky-600 border-sky-600 rounded-full w-[100px] h-10 font-semibold text-white flex items-center justify-center"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
        <div className="lg:hidden block">
          <FaBars
            color="#0284C7"
            className="cursor-pointer"
            fontSize={22}
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
      </nav>
      <SideDrawer open={open} setOpen={setOpen} />
    </>
  );
};

export default Nav;
