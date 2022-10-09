import React, { useEffect, useRef } from "react";
import "./Header.css";
import Topbar from "../Topbar/Topbar";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  const header__sticky = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        header__sticky.current.classList.add("header__shrink");
      } else {
        header__sticky.current.classList.remove("header__shrink");
      }

      return () => window.removeEventListener("scroll");
    });
  }, []);

  return (
    <div ref={header__sticky}>
      <Topbar />
      <Navbar />
    </div>
  );
}
