"use client"
import React, { useState } from 'react';

const DrawerMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle z-50" checked={isDrawerOpen} onChange={toggleDrawer} />
      <div className="drawer-side z-50">
      <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay bg-basic-green "></label>
    <ul className="menu  m-0 w-80 min-h-full bg-basic-green text-base-content z-50">
      <li>
        <h1 className="text-4xl font-bold text-accent-blue">Renja Ferry Schmakeit</h1>
        </li>
      <li>
        <h1 className="text-2xl font-bold text-accent-blue">GO TO:</h1>
        </li>
      <li><a href="#home" onClick={closeDrawer} className="text-3xl bg-accent-blue rounded-none m-1 mt-0 text-white hover:text-accent-blue">Welcome</a></li>
      <li><a href="#about" onClick={closeDrawer} className="text-3xl bg-accent-blue rounded-none m-1 text-white hover:text-accent-blue">About Me</a></li>
      <li><a href="#portfolio" onClick={closeDrawer} className="text-3xl bg-accent-blue rounded-none m-1 text-white hover:text-accent-blue">Portfolio</a></li>
      
    </ul>
      </div>
    </div>
  );
};

export default DrawerMenu;
