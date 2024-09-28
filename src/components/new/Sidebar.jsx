// // end
import React, { useState } from "react";
import { IoHome} from "react-icons/io5";
import { IoCartSharp } from "react-icons/io5";

import {
  MdOutlineFolderZip,
  
} from "react-icons/md";
import { FaAngleDown, FaAngleUp, FaKey, FaWarehouse } from "react-icons/fa";
import { TbCategory2 } from "react-icons/tb";
import { FiChevronDown } from "react-icons/fi"; // Importing icons
import { AiFillDatabase, AiOutlineHdd } from "react-icons/ai";
import { AiOutlineSpotify } from "react-icons/ai";



import {
  IoMdPerson,
} from "react-icons/io";
import { Link } from "react-router-dom";

const Sidebar = ({ setComponent }) => {
  const [showOrderList, setShowOrderList] = useState(false);
  const [showProductList, setShowProductList] = useState(false);
  const [showInHouseProductList, setShowInHouseProductList] = useState(false);
  const [showVenderProductList, setShowVenderProductList] = useState(false);
  const [showRefoundList, setShowRefoundList] = useState(false);

  const [showCustomerList, setShowCustomerList] = useState(false);
  const [showHealthList, setShowHealthList] = useState(false);

  const [showPageList, setShowPageList] = useState(false);

  // for bussness set showing dropdown

  const [showBussnessList, SetShowBussnessList] = useState(false); // write this for each drop down list like for setting order category extra
  // now copy the the above state

  const toggleOrderList = () => {
    setShowOrderList(!showOrderList);
    setShowProductList(false); // Close Product list when Orders list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Orders list is toggled
    setShowRefoundList(false); // Close Refound List when Orders list is toggled
  };

  const toggleProductList = () => {
    setShowProductList(!showProductList);
    setShowOrderList(false); // Close Orders list when Product list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Product list is toggled
    setShowRefoundList(false); // Close Refound List when Product list is toggled
  };

  const toggleInHouseProductList = () => {
    setShowInHouseProductList(!showInHouseProductList);
    setShowOrderList(false); // Close Orders list when In House Product list is toggled
    setShowProductList(false); // Close Product list when In House Product list is toggled
    setShowRefoundList(false); // Close Refound List when In House Product list is toggled
  };

  const toggleVenderProductList = () => {
    setShowVenderProductList(!showVenderProductList);
    setShowInHouseProductList(false);
    setShowOrderList(false); // Close Orders list when In House Product list is toggled
    setShowProductList(false); // Close Product list when In House Product list is toggled
    setShowRefoundList(false); // Close Refound List when In House Product list is toggled
  };


  const toggleCustomerList = () => {
    setShowCustomerList(!showCustomerList);
    setShowOfferList(false);
    setShowBrandList(false);
    setShowRefoundList(false);
    setShowOrderList(false); // Close Orders list when Refound list is toggled
    setShowProductList(false); // Close Product list when Refound list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
  };

  const toggleHealthList = () => {
    setShowHealthList(!showHealthList);
    setShowCustomerList(false);
    setShowOfferList(false);
    setShowBrandList(false);
    setShowRefoundList(false);
    setShowOrderList(false); // Close Orders list when Refound list is toggled
    setShowProductList(false); // Close Product list when Refound list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
  };


  const togglePageList = () => {
    setShowPageList(!showPageList);
    setShowSystemList(false);
    // setShowEmployeeList(false);
    setShowHealthList(false);
    setShowCustomerList(false);
    setShowOfferList(false);
    setShowBrandList(false);
    setShowRefoundList(false);
    setShowOrderList(false); // Close Orders list when Refound list is toggled
    setShowProductList(false); // Close Product list when Refound list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
  };


  return (
    // <aside className="bg-[#077422] text-white  min-h-screen p-4 flex flex-col fixed left-0  overflow-y-auto">

    <aside className="bg-[#1EBEB6] text-white w-64 min-h-screen p-4 flex flex-col fixed left-0  h-full overflow-y-scroll">
      <div className="pb-3 pt-4">
        <div className="flex items-center">
     

          <input
            type="text"
            className="ml-2 p-2 bg-[#FFFFFF] border rounded-md focus:outline-none w-full"
            placeholder="Search menu..."
          />
        </div>
      </div>


{/* Dashboard and POS buttons */}
<Link
  to="/dashboard"
  className="block w-full flex align-items-center text-left p-2 rounded hover:bg-[#4da0c7] text-white hover:text-white mb-3 text-white"
  style={{ color: 'white' }}
>
  <IoHome className="inline-block mr-2" /> Dashboard
</Link>



{/* order management */}
<div className="mt-4">
  <small className="block text-white uppercase font-serif">
    Order Management
  </small>
  <button
    className="w-full text-left p-2 rounded hover:bg-[#4da0c7] text-white hover:text-white flex justify-between relative text-white"
    onClick={togglePageList}
    style={{ color: 'white' }}
  >
    <div className="flex gap-1 justify-between align-items-center">
      <IoCartSharp /> Orders
    </div>
    <span className="float-right">
      {showPageList ? <FaAngleUp /> : <FaAngleDown />}
    </span>
  </button>
  {showPageList && (
    <ul className="ml-4 mt-2 space-y-1">
      <li>
        <Link
          to="/allorders"
          className="block w-full text-left flex gap-2 p-1 pl-4 rounded hover:bg-[#4da0c7] text-white-700"
          style={{ color: 'white' }}
        >
          <span className="text-white">•</span> ALL
        </Link>
      </li>
   
    </ul>
  )}
</div>



      {/* Category Management Section */}
      <div className="mt-4">
        <small className="block text-white uppercase">
          product management
        </small>
        <button
          className="block w-full text-left p-2  rounded hover:bg-[#4da0c7] text-white  flex justify-between hover:text-white mb-2 relative"
          onClick={toggleProductList}
          style={{ color: "white" }}
        >
        
     

          <div className="flex gap-1 justify-between align-items-center">
            <TbCategory2 /> Category Setup
          </div>
          <span className="float-right">
            {showRefoundList ? <FaAngleUp /> : <FaAngleDown />}
          </span>
        </button>
        {showProductList && (
          <ul className="ml-4 mt-2 space-y-1">
            <li>
            <Link
          to="/categories"
          className="block w-full text-left p-1 pl-4 rounded hover:bg-[#4da0c7] text-white"
          style={{ color: 'white' }}
        >
                • Category
            </Link>
            </li>
          </ul>
        )}
      </div>

 
   

      <div className="mt-2">
        <button
          className="block w-full text-left p-2  rounded hover:bg-[#4da0c7] text-white hover:text-white flex justify-between text-white hover:text-[#7EC283]  relative"
          onClick={toggleInHouseProductList}
          style={{ color: "white" }}
        >
      

          <div className="flex gap-1 justify-between align-items-center">
            <FaWarehouse /> Products
          </div>
          <span className="float-right">
            {showRefoundList ? <FaAngleUp /> : <FaAngleDown />}
          </span>
        </button>
        {showInHouseProductList && (
          <ul className="ml-4 mt-2 space-y-1">
            <li>
              <Link to='/inhouseproductlist'
                className="block w-full text-left p-1 pl-4 rounded hover:bg-[#4da0c7]"
               
                style={{ color: "white" }}
              >
                • Product List
              </Link>
            </li>
            <li>
              <Link to='/inhouseaddproduct'
                className="block  w-full text-left p-1 pl-4 rounded hover:bg-[#4da0c7]"
               
                style={{ color: "white" }}
              >
                • Add New Product
              </Link>
            </li>
          </ul>
        )}
      </div>

   
   
    

      {/* ********************** */}
      {/* user management Section */}

      <div className="mt-4">
        <small className="block text-white uppercase">User management</small>
        <button
          className="block w-full text-left p-2  rounded hover:bg-[#4da0c7] flex items-ceter gap-2 text-white hover:text-white text-white hover:text-[#7EC283] mb-2 relative"
          style={{ color: "white" }}
          onClick={toggleCustomerList}
        >
          <MdOutlineFolderZip />
          Customers
          <span className="float-right">
            {/* <i className={`tio-chevron-${showRefoundList ? 'up' : 'down'}`}></i> */}
            <FiChevronDown />
          </span>
        </button>
 
    
    
      </div>

  

   
    </aside>
  );
};

export default Sidebar;
