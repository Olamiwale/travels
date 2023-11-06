"use client";

import React, { useState,useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import { FaBars, FaTimes } from "react-icons/fa"
export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow,setShadow] = useState(false)

  const toggle: () => void = () => {
    setNav(!nav);
  };

 

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 80) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <nav 
    className= {
    shadow ? "shadow-lg flex justify-between items-center bg-white m-auto w-full padding-container fixed z-50 py-5": 'flex justify-between items-center bg-white m-auto w-full padding-container fixed z-30 py-5'}>

      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <div>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      </div>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <div>
        <ul
          className={
            nav
              ? "absolute right-0 px-6 p-4 bg-green-300 w-[200px] top-[60px] flex flex-col gap-10 text-[15px] lg:hidden"
              : "hidden"
          }
        >
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="flex justify-center hover:font-bold border-gray-600 p-4 rounded-full bg-green-200 shadow-md "
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>

      <div onClick={toggle}>
        {!nav ? (
          <FaBars
           size={30}
            className="inline-block cursor-pointer lg:hidden"
          />
        ) : (
          <FaTimes
            size={30}
            className="inline-block cursor-pointer lg:hidden"
          />
        )}
      </div>
    </nav>
  );
}
