import React, { useState } from "react";
import Home from "../components/home/Home";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";
import Service from "../components/Service";
import "bootstrap/dist/css/bootstrap.min.css";
import Price from "../components/Price";
import Contact from "../components/Contact";
import About from "../components/About";
import { contactData } from "../data/data";
import { secondcontactdata } from "../data/data";
import Galery from "../components/Galery";
// import PriceList from "../components/pricelist/PriceList";
import Footer from "../components/Footer";
const Main = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Sidebar open={open} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Home />
      <Service />
      <Price />
      <Contact {...contactData} />
      <About />
      <Galery />
      {/* <PriceList /> */}
      <Contact {...secondcontactdata} />
      <Footer />
    </div>
  );
};

export default Main;
