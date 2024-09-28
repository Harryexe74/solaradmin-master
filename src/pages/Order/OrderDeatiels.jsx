


import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { IoPersonSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { updateOrderStatus } from '../../components/redux/orderSlice';
import ApiUrl from "../../ApiUrl";

const OrderDetails = () => {
  const { id } = useParams(); // Get the order ID from URL parameters
  const dispatch = useDispatch();
  const [order, setOrder] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(true);
  const fallbackImage = '/E-bazar.png'; // Fallback image path

  useEffect(() => {
    // Fetch order details from backend
    axios.get(`${ApiUrl}/api/orders/${id}`)
      .then(response => {
        setOrder(response.data); // Adjust based on how data is structured
      })
      .catch(error => {
        console.error("Error fetching order details", error);
      });
  }, [id]);

  const handleUpdateStatus = (orderId, status) => {
    dispatch(updateOrderStatus({ orderId, status }));
    setOrder(prevOrder => ({ ...prevOrder, status }));
    toast.success("Order status updated successfully!");
  };

  if (!order) {
    return <div>Loading...</div>;
  }

  const {
    shippingAddress,
    user,
    products,
    status,
    totalPrice,
    paymentMethod,
    createdAt
  } = order;

  return (
    <div className="bg-[#F9F9FB] w-full px-4 md:px-12 py-8">
      <div className="flex items-center gap-2">
        <img
          src="https://6valley.6amtech.com/public/assets/back-end/img/all-orders.png"
          alt="Order Icon"
          className="w-5 h-5"
        />
        <h1 className="text-xl font-bold">Order Details</h1>
      </div>

      <br />

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
        <div className="col-span-1 lg:col-span-4 bg-white rounded h-full border-gray-400 hover:shadow-md p-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-[1rem] font-bold pb-5">Order ID #{order._id}</h2>
              <p>{new Date(createdAt).toLocaleString()}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="primary">
                Show Products
              </Button>
            </div>
          </div>

          <div className="text-end pt-2">
            <h1>
              Status: 
              <span className="bg-green-100 font-bold p-1 rounded border text-green-500">
                {status}
              </span>
            </h1>
            <h1 className="pt-3 text-md">
              Payment Method: 
              <span className="font-bold text-md">{paymentMethod}</span>
            </h1>
            <h1 className="pt-3 text-md">
              Payment Status: 
              <span className={`font-bold text-${paymentStatus ? "green" : "red"}-500`}>
                {paymentStatus ? "Paid" : "Unpaid"}
              </span>
            </h1>
          </div>

          {/* Product Table */}
          <div className="container p-4">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-[#F7FAFF] text-gray-700">
                    <th className="px-4 py-2 text-center font-semibold">SL</th>
                    <th className="px-4 py-2 text-center font-semibold">Item Details</th>
                    <th className="px-4 py-2 text-center font-semibold">Price</th>
                    <th className="px-4 py-2 text-center font-bold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item, index) => (
                    <tr className="hover:bg-gray-100" key={item.product._id}>
                      <td className="px-4 py-2 text-center">{index + 1}</td>
                      <td className="px-4 py-2">
                        <div className="flex items-center">
                          <img
                            src={item.product.thumbnail ? `${ApiUrl}/${item.product.thumbnail}` : fallbackImage}
                            alt={item.product.name}
                            className="w-10 h-10 object-cover rounded mr-3"
                            onError={(e) => e.target.src = fallbackImage}
                          />
                          <div>
                            <div>{item.product.name}</div>
                            <div>Qty: {item.quantity}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-2 text-center">${item.product.price}</td>
                      <td className="px-4 py-2 text-center">${(item.product.price * item.quantity).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4">
              <div className="flex justify-between border-t pt-2">
                <span>Item Price</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold border-t pt-2">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Customer Info */}
        <div className="col-span-1 lg:col-span-2">
          <div className="px-4 py-3 bg-white rounded-xl shadow-md space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-center">Order & Shipping Info</h2>
              <div>
                <label className="block">
                  <span className="text-gray-700 font-semibold">Change Order Status</span>
                  <select
                    className="form-select mt-1 bg-white border border-gray-400 px-3 py-2 rounded block w-full"
                    value={status}
                    onChange={(e) => handleUpdateStatus(order._id, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </label>
              </div>
            </div>
          </div>

          {/* Customer Information */}
          <div className="px-4 py-3 bg-white rounded-xl shadow-md space-y-4 mt-5">
            <h2 className="text-md flex items-center gap-2 font-semibold">
              <IoPersonSharp /> Customer Information
            </h2>
            <div className="space-y-1">
              <p className="font-medium">{user.name}</p>
              <p className="text-gray-500">Phone: {user.phoneNumber}</p>
              <p className="text-gray-500">Email: {user.email}</p>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="px-4 py-3 bg-white rounded-xl shadow-md space-y-4 mt-5">
            <div className="flex justify-between items-center">
              <h2 className="text-md font-semibold flex gap-2">
                <IoPersonSharp /> Shipping Address
              </h2>
              <MdEdit className="text-[2rem] p-1 border hover:bg-green-700 hover:text-white rounded border-green-600 text-green-300" />
            </div>
            <div className="space-y-1">
              <p>{shippingAddress.name}</p>
              <p>Country: {shippingAddress.country}</p>
              <p>City: {shippingAddress.city}</p>
              <p>Zip Code: {shippingAddress.zipCode}</p>
              <p>Address: {shippingAddress.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
