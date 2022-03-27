import React, { useEffect, useState } from "react";
import "./nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) handleShow(true);
      else handleShow(false);
    });
    return () => window.removeEventListener("scroll");
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png'
        alt='Netflix logo'
        className='nav__logo'
      />
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        alt='Avatar'
        className='nav__avatar'
      />
    </div>
  );
}

export default Nav;
