import React from "react";
import Image from "next/image";
import rfsLogo from "../../public/rfs_logo.png";
import { DrawerMenuIcon, ReactIcon } from "./Icons";

const NavBar = () => {
  return (
    <>
      <div className="flex flex-row items-center w-full bg-basic-green mt-0">
        <div>
          <Image
            src={rfsLogo}
            width={60}
            height={60}
            alt="Logo"
            className="rounded-md ml-8 hidden lg:block"
          />
          <label
            htmlFor="my-drawer"
            className="drawer-button block lg:hidden  ml-5 m-2"
          >
            <DrawerMenuIcon
              width={50}
              height={50}
              color="black"
              className="ml-8"
            />{" "}
          </label>
        </div>
        <div>
          <ul className="flex flex-row p-2">
            <a href="#home" className="text-xl hidden lg:block">
              <li className="p-4 hover:scale-110 transition-all font-semibold text-accent-blue">Welcome</li>
            </a>
            <a href="#about" className="text-xl hidden lg:block">
              <li className="p-4 hover:scale-110 transition-all font-semibold text-accent-blue">About Me</li>
            </a>
            <a href="#portfolio" className="text-xl hidden lg:block">
              <li className="p-4 hover:scale-110 transition-all font-semibold text-accent-blue">Portfolio</li>
            </a>
          </ul>
        </div>
        <div className="block lg:hidden text-xl text-accent-blue">
          Renja Ferry Schmakeit - Portfolio
        </div>
      </div>
    </>
  );
};

export default NavBar;
