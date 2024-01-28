import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
   
      <div className=" d-flex flex-column ms-0 h-full">
        <div className="d-flex flex-row mt-4 ms-5">
          <img
            className=" img-style"
            src="https://th.bing.com/th/id/OIP.gyKDFdIHDLAtPkuCY3yIdwHaJJ?rs=1&pid=ImgDetMain"
          />
          <div>
            <h4 className="text-primary-emphasis ms-3 mb-2">John Doe</h4>
            <p className="ms-3  text-primary-emphasis">johndoe@gmail.com</p>
          </div>
        </div>
        
        <div className="" >
          <ul className="navbar-nav d-flex flex-column">
            <li>
              <NavLink
                to="/Home"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "nav-link"
                    : isActive
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <i className="bx bx-home-alt me-3"></i>
                <p className="mt-3">Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Search"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "nav-link"
                    : isActive
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <i className="bx bx-search-alt-2 me-3"></i>
                <p className="mt-3">Search</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Notes"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "nav-link"
                    : isActive
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <i className="bx bx-notepad me-3"></i>
                <p className="mt-3">Notes</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Tasks"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "nav-link"
                    : isActive
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <i className="bx bx-task  me-3"></i>
                <p className="mt-3">Tasks</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
  );
}
