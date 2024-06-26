import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import { useState } from "react";
import "./Navbar.css";

const Data = [
  {
    title: "Home",
    path: "/",
    cName: "nav-text",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Products",
    path: "/products",
    cName: "nav-text",
    icon: <IoIcons.IoIosPaper />,
  },
  {
    title: "Reports",
    path: "/reports",
    cName: "nav-text",
    icon: <FaIcons.FaCartPlus />,
  },
];

export function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      <IconContext.Provider value={{ color: "#FFF" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {Data.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}
