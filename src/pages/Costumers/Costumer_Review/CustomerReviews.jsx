
// import React, { useState } from "react";
// import "./CustomerReview.css";

// const CustomerReviews = () => {
//   // Sample data array (you can replace this with your own data)
//   const products = [
//     {
//       id: 1,
//       name: "Women's long-sleeve lightweight french terry fleece quarter-zip top",
//       category: "Women's fashion",
//       brand: "i Bird",
//       shop: "6valley CMS",
//       image:
//         "https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-20-625fe69f72cce.png",
//     },
//     // Add more products as needed
//   ];

//   const customers = [
//     {
//       id: 1,
//       name: "Devid Jack",
//       link: "https://6valley.6amtech.com/admin/customer/view/9",
//     },
//     {
//       id: 2,
//       name: "fatema subarna",
//       link: "https://6valley.6amtech.com/admin/customer/view/2",
//     },
//     // Add more customers as needed
//   ];

//   const reviews = [
//     {
//       id: 1,
//       product: "Product not found",
//       customer: "Devid Jack",
//       customerLink: "https://6valley.6amtech.com/admin/customer/view/9",
//       rating: 4,
//       review: "Nice human.",
//       date: "20 Nov 2022",
//       status: true,
//       statusFormAction: "https://6valley.6amtech.com/admin/reviews/status/23/0",
//       toggleId: "reviews-status23",
//     },
//     {
//       id: 7,
//       product: "Quartz wrist watch waterp...",
//       productLink:
//         "https://6valley.6amtech.com/admin/products/view/in-house/36",
//       customer: "fatema subarna",
//       customerLink: "https://6valley.6amtech.com/admin/customer/view/2",
//       rating: 5,
//       review: "product quality is not good.",
//       images: [
//         "https://6valley.6amtech.com/storage/app/public/review/2022-04-24-6264c955e9a3f.png",
//         "https://6valley.6amtech.com/storage/app/public/review/2022-04-24-6264c95603bed.png",
//         "https://6valley.6amtech.com/storage/app/public/review/2022-04-24-6264c95603dc5.png",
//         "https://6valley.6amtech.com/storage/app/public/review/2022-04-24-6264c95603f26.png",
//         "https://6valley.6amtech.com/storage/app/public/review/2022-04-24-6264c95604195.png",
//       ],
//       date: "24 Apr 2022",
//       status: true,
//       statusFormAction: "https://6valley.6amtech.com/admin/reviews/status/17/0",
//       toggleId: "reviews-status17",
//     },
//   ];

//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [selectedCustomer, setSelectedCustomer] = useState(null);

//   const handleProductSelect = (product) => {
//     setSelectedProduct(product);
//   };

//   const handleCustomerSelect = (customer) => {
//     setSelectedCustomer(customer);
//   };

//   return (
//     <div className="content container-fluid snipcss-Ms29G">
//       <div className="mb-3">
//         <h2 className="h1 mb-0 text-capitalize d-flex gap-2 align-items-center">
//           <img
//             width="20"
//             src="https://6valley.6amtech.com/public/assets/back-end/img/customer_review.png"
//             alt=""
//           />
//           Customer reviews
//         </h2>
//       </div>
//       <div className="card card-body">
//         <div className="row border-bottom pb-3 align-items-center mb-20">
//           <div className="col-sm-4 col-md-6 col-lg-8 mb-2 mb-sm-0">
//             <h5 className="text-capitalize d-flex gap-2 align-items-center">
//               Review table
//               <span className="badge badge-soft-dark radius-50 fz-12">23</span>
//             </h5>
//           </div>
//           <div className="col-sm-8 col-md-6 col-lg-4">
//             <form action="#" method="GET" onSubmit={(e) => e.preventDefault()}>
//               <div className="input-group input-group-merge input-group-custom">
//                 <div className="input-group-prepend">
//                   <div className="input-group-text">
//                     <i className="tio-search"></i>
//                   </div>
//                 </div>
//                 <input
//                   id="datatableSearch_"
//                   type="search"
//                   name="searchValue"
//                   className="form-control"
//                   placeholder="Search by Product or Customer"
//                   aria-label="Search orders"
//                   required=""
//                 />
//                 <button
//                   type="submit"
//                   className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37]"
//                 >
//                   Search
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//         <form action="#" method="GET" onSubmit={(e) => e.preventDefault()}>
//           <div className="row gy-3 align-items-end">
//             <div className="col-md-4">
//               <label htmlFor="name" className="title-color">
//                 Products
//               </label>
//               <div className="dropdown select-product-search w-100">
//                 <input
//                   type="text"
//                   className="product_id"
//                   name="product_id"
//                   hidden
//                 />
//                 <button
//                   className="form-control text-start dropdown-toggle text-truncate select-product-button"
//                   data-toggle="dropdown"
//                   aria-haspopup="true"
//                   aria-expanded="false"
//                 >
//                   {selectedProduct ? (
//                     <span className="text-truncate">
//                       {selectedProduct.name}
//                     </span>
//                   ) : (
//                     "Select Product"
//                   )}
//                 </button>
//                 <div className="dropdown-menu w-100 px-2">
//                   <div className="search-form mb-3">
//                     <button type="button" className="btn">
//                       <i className="tio-search"></i>
//                     </button>
//                     <input
//                       type="text"
//                       className="js-form-search form-control search-bar-input search-product"
//                       placeholder="Search product..."
//                     />
//                   </div>
//                   <div className="d-flex flex-column gap-3 max-h-40vh overflow-y-auto overflow-x-hidden search-result-box">
//                     {products.map((product) => (
//                       <div
//                         key={product.id}
//                         className="select-product-item media gap-3 border-bottom py-2 cursor-pointer action-select-product"
//                         onClick={() => handleProductSelect(product)}
//                       >
//                         <img
//                           className="avatar avatar-xl border"
//                           width="75"
//                           src={product.image}
//                           alt=""
//                         />
//                         <div className="media-body d-flex flex-column gap-1">
//                           <h6 className="product-id" hidden="">
//                             {product.id}
//                           </h6>
//                           <h6 className="fz-13 mb-1 text-truncate custom-width product-name">
//                             {product.name}
//                           </h6>
//                           <div className="fz-10">
//                             Category: {product.category}
//                           </div>
//                           <div className="fz-10">Brand: {product.brand}</div>
//                           <div className="fz-10">Shop: {product.shop}</div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <label className="title-color" htmlFor="customer">
//                 Customer
//               </label>
//               <div className="dropdown select-customer w-100">
//                 <input
//                   type="text"
//                   className="customer_id"
//                   name="customer_id"
//                   hidden
//                 />
//                 <button
//                   className="form-control text-start dropdown-toggle text-truncate select-customer-button"
//                   data-toggle="dropdown"
//                   aria-haspopup="true"
//                   aria-expanded="false"
//                 >
//                   {selectedCustomer ? (
//                     <span className="text-truncate">
//                       {selectedCustomer.name}
//                     </span>
//                   ) : (
//                     "Select Customer"
//                   )}
//                 </button>
//                 <div className="dropdown-menu w-100 px-2">
//                   <div className="search-form mb-3">
//                     <button type="button" className="btn">
//                       <i className="tio-search"></i>
//                     </button>
//                     <input
//                       type="text"
//                       className="js-form-search form-control search-bar-input search-customer"
//                       placeholder="Search customer..."
//                     />
//                   </div>
//                   <div className="d-flex flex-column gap-3 max-h-40vh overflow-y-auto overflow-x-hidden search-result-box">
//                     {customers.map((customer) => (
//                       <div
//                         key={customer.id}
//                         className="select-customer-item media gap-3 border-bottom py-2 cursor-pointer action-select-customer"
//                         onClick={() => handleCustomerSelect(customer)}
//                       >
//                         <div className="media-body d-flex flex-column gap-1">
//                           <h6 className="customer-id" hidden="">
//                             {customer.id}
//                           </h6>
//                           <h6 className="fz-13 mb-1 text-truncate custom-width customer-name">
//                             {customer.name}
//                           </h6>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div>
//                 <label htmlFor="status" className="title-color d-flex">
//                   Choose Status
//                 </label>
//                 <select className="form-control" name="status">
//                   <option value="" selected="">
//                     ---Select status---
//                   </option>
//                   <option value="1">Active</option>
//                   <option value="0">Inactive</option>
//                 </select>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div>
//                 <label htmlFor="from" className="title-color d-flex">
//                   From
//                 </label>
//                 <input
//                   type="date"
//                   name="from"
//                   id="start-date-time"
//                   value=""
//                   className="form-control"
//                   title="From date"
//                 />
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div>
//                 <label htmlFor="to" className="title-color d-flex">
//                   To
//                 </label>
//                 <input
//                   type="date"
//                   name="to"
//                   id="end-date-time"
//                   value=""
//                   className="form-control"
//                   title="To date"
//                 />
//               </div>
//             </div>
//             <div className="col-md-2">
//               <div>
//                 <button
//                   type="submit"
//                   className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37] btn-block"
//                 >
//                   <i className="tio-filter-list nav-icon"></i> Filter
//                 </button>
//               </div>
//             </div>
//             <div className="col-md-2">
//               <div className="dropdown">
//                 <button
//                   type="button"
//                   className="btn btn-outline--primary text-nowrap btn-block dropdown-toggle"
//                   data-toggle="dropdown"
//                 >
//                   <i className="tio-download-to"></i> Export{" "}
//                   <i className="tio-chevron-down"></i>
//                 </button>
//                 <ul className="dropdown-menu dropdown-menu-right">
//                   <li>
//                     <a
//                       className="dropdown-item"
//                       href="https://6valley.6amtech.com/admin/reviews/export"
//                     >
//                       <img
//                         width="14"
//                         src="https://6valley.6amtech.com/public/assets/back-end/img/excel.png"
//                         alt=""
//                       />{" "}
//                       Excel
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//       <div className="card mt-20">
//         <div className="table-responsive">
//           <table className="table table-bordered mb-0">
//             <thead className="thead-light">
//               <tr>
//                 <th className="fw-normal border-top-0">SL</th>
//                 <th className="fw-normal border-top-0">Product</th>
//                 <th className="fw-normal border-top-0">Customer</th>
//                 <th className="fw-normal border-top-0">Rating</th>
//                 <th className="fw-normal border-top-0">Review</th>
//                 <th className="fw-normal border-top-0">Date</th>
//                 <th className="fw-normal border-top-0">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {reviews.map((review) => (
//                 <tr key={review.id}>
//                   <td>{review.id}</td>
//                   <td>
//                     <a
//                       href={review.productLink}
//                       className="title-color hover-c1"
//                     >
//                       {review.product}
//                     </a>
//                   </td>
//                   <td>
//                     <a
//                       href={review.customerLink}
//                       className="title-color hover-c1"
//                     >
//                       {review.customer}
//                     </a>
//                   </td>
//                   <td>
//                     <label className="badge badge-soft-info mb-0">
//                       <span className="fz-12 d-flex align-items-center gap-1">
//                         {review.rating} <i className="tio-star"></i>
//                       </span>
//                     </label>
//                   </td>
//                   <td>
//                     <div className="gap-1">
//                       <div>{review.review}</div>
//                       <br />
//                       <div className="d-flex flex-wrap">
//                         {review.images &&
//                           review.images.map((image, index) => (
//                             <a
//                               key={index}
//                               href={image}
//                               data-lightbox="mygallery"
//                             >
//                               <img
//                                 width="60"
//                                 height="60"
//                                 className="mx-1"
//                                 src={image}
//                                 alt="Review Image"
//                               />
//                             </a>
//                           ))}
//                       </div>
//                     </div>
//                   </td>
//                   <td>{review.date}</td>
//                   <td>
//                     <div className="custom-control custom-switch">
//                       <input
//                         type="checkbox"
//                         className="custom-control-input"
//                         id={review.toggleId}
//                         checked={review.status}
//                         onChange={() => {
//                           // Implement your toggle logic here
//                         }}
//                       />
//                       <label
//                         className="custom-control-label"
//                         htmlFor={review.toggleId}
//                       ></label>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomerReviews;



import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./CustomerReview.css";
import { FaEye } from "react-icons/fa";
import Swal from 'sweetalert2';

import { MdOutlineStarPurple500, MdStarBorder } from "react-icons/md";
// import { format } from 'date-fns';
const CustomerReviews = () => {
  const [products, setProducts] = useState([]);
  const [hasReviews, setHasReviews] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const id = '66a2231f79ae861206f8f8f9';
        const response = await axios.get(`http://localhost:3000/api/products/`);
        const fetchedProducts = response.data.docs;

        // Filter products that have reviews
        const productsWithReviews = fetchedProducts.filter(product => product.reviews && product.reviews.length > 0);

        setProducts(productsWithReviews);
        setHasReviews(productsWithReviews.length > 0);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleViewClick = (review) => {
    setSelectedReview(review);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedReview(null);
  };

  const handleStatusChange = async (reviewId, currentStatus) => {
    const newStatus = currentStatus === 'Active' ? 'Inactive' : 'Active';
    
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to ${newStatus === 'Active' ? 'activate' : 'deactivate'} this review?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it!'
    });

    if (result.isConfirmed) {
      try {
        await axios.patch(`http://localhost:3000/api/products/${reviewId}/status`, { status: newStatus });
        // Update the local state to reflect the status change
        setProducts(products.map(product => ({
          ...product,
          reviews: product.reviews.map(review =>
            review._id === reviewId ? { ...review, status: newStatus } : review
          ),
        })));
        
        Swal.fire(
          'Updated!',
          `The review has been ${newStatus === 'Active' ? 'activated' : 'deactivated'}.`,
          'success'
        );
      } catch (error) {
        console.error('Error updating review status:', error);
        Swal.fire(
          'Error!',
          'There was an error updating the review status.',
          'error'
        );
      }
    }
  };

  

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) throw new Error('Invalid Date');
      return format(date, 'd/MMM/yyyy').toLowerCase(); // 7/oct/2024
    } catch (error) {
      console.error('Date formatting error:', error);
      return 'Invalid Date';
    }
  };
  

  return (
    <div className="content container-fluid snipcss-Ms29G">
      <div className="mb-3">
        <h2 className="h1 mb-0 text-capitalize d-flex gap-2 align-items-center">
          <img
            width="20"
            src="https://6valley.6amtech.com/public/assets/back-end/img/product-review.png"
            alt=""
          />
          Product Reviews
        </h2>
      </div>
      <div className="card card-body">
        <div className="row border-bottom pb-3 align-items-center mb-10">
          <div className="col-sm-4 col-md-6 col-lg-8 mb-2 mb-sm-0">
            <h5 className="text-capitalize d-flex gap-2 align-items-center">
              Review table
              <span className="badge badge-soft-dark radius-50 fz-12">
                {hasReviews ? products.reduce((acc, product) => acc + product.reviews.length, 0) : 0}
              </span>
            </h5>
          </div>
          <div className="col-sm-8 col-md-6 col-lg-4">
            <form action="#" method="GET" onSubmit={(e) => e.preventDefault()}>
              <div className="input-group input-group-merge input-group-custom">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="tio-search"></i>
                  </div>
                </div>
                <input
                  id="datatableSearch_"
                  type="search"
                  name="searchValue"
                  className="form-control"
                  placeholder="Search by Product or Customer"
                  aria-label="Search orders"
                  required=""
                />
                <button
                  type="submit"
                  className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37]"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        <form action="#" method="GET" onSubmit={(e) => e.preventDefault()}>
          <div className="row gy-3 align-items-end">
            <div className="col-md-4">
              <label htmlFor="status" className="title-color d-flex">
                Choose Status
              </label>
              <select className="form-control" name="status">
                <option value="" selected="">
                  ---Select status---
                </option>
                <option value="1">Active</option>
                <option value="0">Inactive</option>
              </select>
            </div>
            <div className="col-md-4">
              <div>
                <label htmlFor="from" className="title-color d-flex">
                  From
                </label>
                <input
                  type="date"
                  name="from"
                  id="start-date-time"
                  value=""
                  className="form-control"
                  title="From date"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <label htmlFor="to" className="title-color d-flex">
                  To
                </label>
                <input
                  type="date"
                  name="to"
                  id="end-date-time"
                  value=""
                  className="form-control"
                  title="To date"
                />
              </div>
            </div>
            <div className="col-md-2">
              <div>
                <button
                  type="submit"
                  className="btn px-3 px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37]"
                >
                  Filter
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="table-responsive mt-3">
          <table className="table table-borderless table-thead-bordered table-align-middle table-nowrap table-hover">
            <thead className="thead-light">
              <tr>
                <th className="text-capitalize text-center">#</th>
                <th className="text-capitalize">Product</th>
                <th className="text-capitalize">Customer</th>
                <th className="text-capitalize">Rating</th>
                <th className="text-capitalize">Review</th>
                <th className="text-capitalize">Date</th>
                <th className="text-capitalize">Status</th>
                <th className="text-capitalize">Action</th>
              </tr>
            </thead>
            <tbody>
              {hasReviews ? (
                products.flatMap((product, index) =>
                  product.reviews.map((review, reviewIndex) => (
                    <tr key={`${product._id}-${reviewIndex}`}>
                      <td className="text-center">{index + 1}</td>
                      <td>
                    {product.name || "N/A"} 
                    {product.thumbnail && (
                      <img 
                        src={`http://localhost:3000/${product.thumbnail}`} 
                        alt={product.name} 
                        className="product-thumbnail" 
                        style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                      />
                    )}
                  </td>
                      <td>{review.customer?.name || "N/A"}</td>
                      <td className="flex justify-center mt-6 align-items-center">
                        <div className="d-flex align-items-center gap-1 text-green-400 justify-content-center fz-14 mt-6">
                          {[...Array(5)].map((_, i) => (
                            i < review.rating ? (
                              <MdOutlineStarPurple500 key={i} className="text-green-400" />
                            ) : (
                              <MdStarBorder key={i} className="text-gray-300" />
                            )
                          ))}
                        </div>
                      </td>
                      <td>{review.reviewText || "No review text"}</td>
                      <td>{new Date(review.createdAt).toLocaleDateString() || "No date"}</td>
                   
                      <td>
                        <label className="switcher mx-auto">
                          <input
                            type="checkbox"
                            className="switcher_input toggle-switch-message"
                            id={`reviews-status${review._id}`}
                            checked={review.status === 'Active'}
                            onChange={() => handleStatusChange(review._id, review.status)}
                          />
                          <span className="switcher_control"></span>
                        </label>
                      </td>
                      <td className="border-green-400 border-t-0 border-b-0 text-center">
                        <FaEye
                          size={18}
                          color="#A1CB46"
                          style={{ cursor: 'pointer' }}
                          onClick={() => handleViewClick(review)}
                        />
                      </td>
                    </tr>
                  ))
                )
              ) : (
                <tr>
                  <td colSpan="8" className="text-center">
                    No reviews found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && selectedReview && (
        <div className="modal fade show" id="reviewDetailsModal" tabIndex="-1" aria-labelledby="reviewDetailsModalLabel" aria-hidden="true" style={{ display: 'block' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header font-bold">
                <h5 className="modal-title" id="reviewDetailsModalLabel">Review Details</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body p-5 mb-2">
                <h5 className="text-capitalize ">Review Details</h5>
                <p><strong>Product:</strong> {selectedReview.product?.name || "N/A"}</p>
                <p><strong>Customer:</strong> {selectedReview.customer?.name || "N/A"}</p>
                <p className="flex "> <strong>Rating:</strong> {[...Array(5)].map((_, i) => (
                  i < selectedReview.rating ? (
                    <MdOutlineStarPurple500 key={i} className="text-green-400" />
                  ) : (
                    <MdStarBorder key={i} className="text-gray-300" />
                  )
                ))}</p>
                <p><strong>Review:</strong> {selectedReview.reviewText || "No review text"}</p>
                <p><strong>Date:</strong> {new Date(selectedReview.createdAt).toLocaleDateString() || "No date"}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn bg-green-400 text-white hover:bg-green-700"  onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerReviews;

