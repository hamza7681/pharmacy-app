import Link from "next/link";
import React from "react";
import { Sidebar, MenuItem, Menu } from "react-pro-sidebar";

const SideDrawer = ({ open, setOpen }) => {
  return (
    <div className="md:hidden block">
      <Sidebar
        rootStyles={{
          background: "#0284C7",
          position: "absolute",
          zIndex: 10,
          top: 0,
          height: "100vh",
        }}
        transitionDuration={300}
        collapsedWidth={0}
        toggled={setOpen}
        collapsed={open}
      >
        <Menu>
          <MenuItem component={<Link href="/" />}> Home</MenuItem>
          <MenuItem component={<Link href="/" />}> About</MenuItem>
          <MenuItem component={<Link href="/" />}> Product</MenuItem>
          <MenuItem component={<Link href="/" />}>Contact</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SideDrawer;
