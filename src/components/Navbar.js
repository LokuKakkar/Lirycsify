// import React from "react";
import {Link} from "react-router-dom"

// export default function Navbar() {
//   return (
    // <div className="yummy">
    //   <div>
    //     <nav className="navbar navbar-expand-lg bg-body-tertiary text-white">
    //       <div className="container-fluid d-flex ">
    //         <div className="hehe">
    //           <Link className="navbar-brand" to="/">
    //             <i className="fa-sharp fa-solid fa-music fa-beat-fade ok"></i>
    //             <span>Shawtify</span>
    //           </Link>
    //           <button
    //             className="navbar-toggler"
    //             type="button"
    //             data-bs-toggle="collapse"
    //             data-bs-target="#navbarTogglerDemo02"
    //             aria-controls="navbarTogglerDemo02"
    //             aria-expanded="false"
    //             aria-label="Toggle navigation"
    //           >
    //             <span className="navbar-toggler-icon"></span>
    //           </button>
    //         </div>
    //         <div>
    //           <div
    //             className="collapse navbar-collapse "
    //             id="navbarTogglerDemo02"
    //           >
    //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //               <li className="nav-item">
    //                 <Link className="nav-link active" aria-current="page" to="/">
    //                   Home
    //                 </Link>
    //               </li>
    //               <li className="nav-item">
    //                 <a
    //                   className="nav-link active"
    //                   href="https://open.spotify.com/?"
    //                 >
    //                   Link
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </nav>
    //   </div>
    //   {/* <div className="form">
    //     <form className="d-flex" role="search">
    //       <input
    //         className="form-control me-2"
    //         type="search"
    //         placeholder="Search"
    //         aria-label="Search"
    //       />
    //       <button
    //         className="btn btn-outline-dark text-white bg-success"
    //         type="submit"
    //       >
    //         Search
    //       </button>
    //     </form>
    //   </div> */}
    // </div>
//   );
// }








// src/components/Navbar.js

import React, { useState, useEffect } from 'react';
import { debounce } from '../utilities/helpers.js';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    position: 'fixed',
    height: '60px',
    width: '100%',
    backgroundColor: 'grey',
    textAlign: 'center',
    transition: 'top 0.6s'
  }

  return (
    <div style={{ ...navbarStyles, top: visible ? '0' : '-60px' }}>
      
      <div className="yummy">
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary text-white">
          <div className="container-fluid d-flex ">
            <div className="hehe">
              <Link className="navbar-brand" to="/">
                <i className="fa-sharp fa-solid fa-music fa-beat-fade ok"></i>
                <span>Shawtify</span>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div>
              <div
                className="collapse navbar-collapse "
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="https://open.spotify.com/?"
                    >
                      Link
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* <div className="form">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-dark text-white bg-success"
            type="submit"
          >
            Search
          </button>
        </form>
      </div> */}
    </div>

    </div>
  );
};

export default Navbar;

