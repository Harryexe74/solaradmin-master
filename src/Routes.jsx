// with login page
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import Categories from "./pages/Categoreis/Categories";
import CustomerList from "./pages/Costumers/Costumer_Review/CustomerList/CustomerList";
import SubscriberList from "./pages/Subscriber/SubscriberList";
import OrderList from "./pages/Order/OrderList";
import OrderDeatiels from "./pages/Order/OrderDeatiels";
import CategoryUpdate from "./pages/Categoreis/CategoryEdit/CategoryEdit";
import ProductDetails from "./pages/In_House_Product/InHouseProductList/InhouseProductbutton/ProductDetail.jsx";
import AddInHouseNewProduct from "./pages/In_House_Product/AddProduct/AddProduct";


import {  
   PendingOrders,
  ConfirmedOrders,
 
  CanceledOrders } 
from './pages/Order/OrderManagementPages.jsx';

import {
  InHouseProductPage,
  VendorPendingProductPage,
 
} from "./pages/In_House_Product/InHouseProductList/ProductManagmentComponent.jsx";// Adjust the import path as needed
import InhouseProductUpdate from "./pages/In_House_Product/AddProduct/InhouseProductUpdate.jsx";
function AllRoutes() {

  return (
   <>
                <Routes>
                  <Route path="/" element={<Navigate to="/dashboard" />} />
                  <Route path="/dashboard" element={<WelcomePage />} />
                  <Route path="/allorders" element={<OrderList />} />
                  <Route path="/orderdetail/:id" element={<OrderDeatiels />} />
                  <Route path="/pendingorders" element={<PendingOrders />} />
                  
                  {/* <Route
                    path="/profileinformation"
                    element={<ProfileInformation />}
                  />  */}

                  <Route path="/inhouseproductlist" element={<InHouseProductPage />} />
                  <Route path="/products/:productId" element={<ProductDetails />} />
                  <Route path="//product/:id" element={<InhouseProductUpdate />} />
                  <Route path="/inhouseaddproduct" element={<AddInHouseNewProduct />} />
                  <Route path="/categories" element={<Categories />} />
                  <Route path="/categoryedit/:id" element={<CategoryUpdate />} />
  
                  {/* <Route path="/customerreviews" element={<CustomerReviews />} /> */}
                  <Route path="/customerlist" element={<CustomerList />} />
                 
                  <Route path="/subscriberlist" element={<SubscriberList />} />
                  {/* <Route path="/inhouselimitedproduct" element={<LimitedStockProductsList />} /> */}

                  <Route path="/orderlist" element={<OrderList />} />
                  <Route path="/pendingorder" element={<PendingOrders />} />
                  <Route path="/confirmedorder" element={<ConfirmedOrders />} />
                  <Route path="/cancelledorder" element={<CanceledOrders />} />

                 
                  </Routes>
                </>
  );
}

export default AllRoutes;



