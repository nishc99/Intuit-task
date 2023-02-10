import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AiOutlineHome } from 'react-icons/ai';
import { BsGraphUp } from 'react-icons/bs';
import { AiOutlineBank} from 'react-icons/ai';
import { MdOutlinePayments } from 'react-icons/md';
import { FaLuggageCart } from 'react-icons/fa';
import { MdPeopleAlt } from 'react-icons/md';
import {RiContactsBookFill}from "react-icons/ri";
import {BsCalculator}from "react-icons/bs";
import {FaDesktop}from "react-icons/fa";
import {AiOutlineAppstore}from "react-icons/ai";
import {BsPencil}from "react-icons/bs";
import {IoIosArrowForward}from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import "./sidebar.css";
const routes = [
            {
            path:"menu",
            name:"MENU",
        },
  {
    path: "/",
    name: "Get things done",
    icon: <AiOutlineHome />,
  },
  {
    path: "/dashboard",
    name: "Business overview",
    icon: <BsGraphUp />,

  },
  {
    path: "/analytics",
    name: "Banking",
    icon: <AiOutlineBank />,
  },
  {
    path: "/architecture",
    name: "Get paid & pay",
    icon: <MdOutlinePayments />,
  },
  {
    path: "/digital",
    name: "Customers & leads",
    icon: <RiContactsBookFill />,
    
  },
  {
    path: "/documentation",
    name: "Commerce",
    icon: <FaLuggageCart />,
  },
  {
    path: "/team",
    name: "Payroll",
    icon: <MdPeopleAlt />,
  },
  {
    path: "/search",
    name: "Bookkeeping",
    icon: <BsCalculator />,
  },
  {
    path: "/taxes",
    name: "Taxes",
    icon: <FaDesktop />,
  },
  {
    path: "/apps",
    name: "Apps",
    icon: <AiOutlineAppstore />,
  },
  {
    path: "/more",
    name: "More(0)",
    icon: <IoIosArrowForward />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main_container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className="sidebar"
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                >
                  <img className="logo" src="/images/logo.png" alt="Image"/>
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
            <img src="/images/logo2.png" alt="Image" onClick={toggle}/>
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
            </div>
            <AnimatePresence>
              {isOpen && (
                <button style={{display: isOpen ? "block" : "none"}} className="but">+ New</button>
              )}
            </AnimatePresence>
            <BsPencil style={{display: isOpen ? "block" : "none"}} className="logo2"/>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
