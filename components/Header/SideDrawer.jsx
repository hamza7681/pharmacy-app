"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Sidebar } from "react-pro-sidebar";
import { BsChevronDown } from "react-icons/bs";

const SideDrawer = ({ open, setOpen }) => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);
  const routes = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/product", name: "Products" },
    { path: "/contact", name: "Contact" },
  ];
  return (
    <div className="lg:hidden block">
      <Sidebar
        rootStyles={{
          background: "white",
          position: "absolute",
          zIndex: 10,
          top: 0,
          height: "100vh",
          boxShadow: "4px 0px 16px -2px rgba(168, 168, 168, 0.75)",
        }}
        transitionDuration={300}
        collapsedWidth={0}
        toggled={setOpen}
        collapsed={open}
      >
        <div className="p-2 h-full flex flex-col">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/logo.png"
              alt="user"
              width={60}
              height={60}
              className="rounded-full"
            />
            <p className=" uppercase text-sky-600 font-bold text-[22px]">
              App Name
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-10 px-5">
            {routes.map((val, index) => {
              return (
                <Link
                  href={val.path}
                  key={index}
                  className={`${
                    pathname === val.path ? "bg-sky-600 text-white" : "bg-white"
                  } text-sky-600 font-bold text-[20px] hover:bg-sky-600 hover:text-white p-2 rounded-[4px]`}
                  onClick={() => setOpen(false)}
                >
                  {val.name}
                </Link>
              );
            })}
          </div>
          <div
            className="relative flex gap-2 items-center cursor-pointer mb-10 px-5 mt-auto"
            onClick={() => setToggle(!toggle)}
          >
            <Image
              src="/assets/user.png"
              alt="user"
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="text-sky-600 font-semibold ">Hamza Siddque</p>

            <BsChevronDown
              color="#0284C7"
              className={`${
                toggle ? "-rotate-180" : "rotate-0"
              } transition-all ease-linear duration-200`}
            />

            <div
              className={`absolute ${
                toggle ? "max-h-[150px] border-[0.5px] py-[20px]" : "max-h-0"
              } w-[230px] gap-4 bottom-11 right-0 overflow-hidden rounded-[4px] bg-white  shadow-sm flex flex-col items-center justify-center transition-all ease-linear duration-200`}
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
        </div>
      </Sidebar>
    </div>
  );
};

export default SideDrawer;
