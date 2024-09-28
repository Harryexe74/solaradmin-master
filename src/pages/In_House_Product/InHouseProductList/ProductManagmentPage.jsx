import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, updateProductStatus, deleteProduct } 
from '../../../components/redux/product/productSlice';
import { fetchCategories, fetchBrands } from '../../../components/redux/categorybrandSlice';
import Swal from 'sweetalert2';
import FilterForm from './FilterForm';
import '../InHouseProductList/Product.css';
import LoadingSpinner from '../../../components/LoodingSpinner/LoadingSpinner';

const ProductTable = lazy(() => import('./ProductTable'));

const InHouseProductList = ({ initialTitle = 'Admin Product List', initialFilters = {} }) => {
  const dispatch = useDispatch();
  
  const {
    products,
    loading,
    error,
    totalDocs,
    limit,
    totalPages,
    currentPage,
    hasPrevPage,
    hasNextPage,
  } = useSelector((state) => state.product);
  
  const { categories, brands } = useSelector((state) => state.category);

  const [filters, setFilters] = useState({
    brand: initialFilters.brand || '',
    category: initialFilters.category || '',
    searchValue: initialFilters.searchValue || '',
    userType: initialFilters.userType || '', 
    status: initialFilters.status || '',  
    vendorNew4Days: initialFilters.vendorNew4Days || false
  });

  useEffect(() => {
    dispatch(fetchProducts(filters));
    dispatch(fetchCategories());
    dispatch(fetchBrands());
  }, [filters, dispatch]);

  const handleInputChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateStatus = async (product) => {
    const newStatus = product.status === 'approved' ? 'pending' : 'approved';

    const result = await Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to ${newStatus === 'approved' ? 'approve' : 'set as pending'} this product?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    });
  
    if (result.isConfirmed) {
      try {
        await dispatch(updateProductStatus({ productId: product._id, status: newStatus })).unwrap();
        Swal.fire('Success', `Product status updated to ${newStatus}!`, 'success');
      } catch (error) {
        Swal.fire('Error', 'Failed to update product status. Please try again.', 'error');
      }
    }
  };

  const handleDeleteProduct = async (productId) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    });

    if (result.isConfirmed) {
      try {
        await dispatch(deleteProduct(productId)).unwrap();
        Swal.fire('Deleted!', 'Your product has been deleted.', 'success');
      } catch (error) {
        Swal.fire('Error', 'Failed to delete product. Please try again.', 'error');
      }
    }
  };

  const handlePageChange = (pageNumber) => {
    setFilters((prevFilters) => ({ ...prevFilters, page: pageNumber }));
  };

  return (
    <>
      <div className="content container-fluid px-12">
        <div className="mb-3">
          <h2 className="h1 mb-0 text-capitalize d-flex gap-2">
            <img src="/inhouse-product-list.png" alt="Admin Product List" />
            {initialTitle}
            <span className="badge badge-soft-dark radius-50 fz-14 ml-1">{products.length}</span>
          </h2>
        </div>

        {categories.length > 0 && brands.length > 0 && (
      
         <FilterForm
        categories={categories}
        brands={brands}
        filters={filters}
        onInputChange={handleInputChange}
      />
        )}

        {loading && <LoadingSpinner />}

        {/* Lazy load ProductTable component */}
        <div className="product-table-container">
          {error ? (
            <div>{typeof error === 'object' && error !== null ? JSON.stringify(error) : error}</div>
          ) : (
            <Suspense fallback={<LoadingSpinner />}>
              <ProductTable
                products={products}
                onUpdateStatus={handleUpdateStatus}
                onDeleteProduct={handleDeleteProduct}
                totalDocs={totalDocs}
                limit={limit}
                totalPages={totalPages}
                currentPage={currentPage}
                hasPrevPage={hasPrevPage}
                hasNextPage={hasNextPage}
                onPageChange={handlePageChange}
              />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};

export default InHouseProductList;




// import React, { useState, useEffect, Suspense, lazy } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProducts, updateProductStatus, deleteProduct } 
// from '../../../components/redux/product/productSlice';
// import { fetchCategories, fetchBrands } from '../../../components/redux/categorybrandSlice';
// import Swal from 'sweetalert2';
// import FilterForm from './FilterForm';
// import '../InHouseProductList/Product.css';
// import LoadingSpinner from '../../../components/LoodingSpinner/LoadingSpinner';

// const ProductTable = lazy(() => import('./ProductTable'));

// const InHouseProductList = ({ initialTitle = 'In House Product List', initialFilters = {} }) => {
//   const dispatch = useDispatch();
  
//   const {
//     products,
//     loading,
//     error,
//     totalDocs,
//     limit,
//     totalPages,
//     currentPage,
//     hasPrevPage,
//     hasNextPage,
//   } = useSelector((state) => state.product);
  
//   const { categories, brands } = useSelector((state) => state.category);

//   const [filters, setFilters] = useState({
//     brand: initialFilters.brand || '',
//     category: initialFilters.category || '',
//     searchValue: initialFilters.searchValue || '',
//     userType: initialFilters.userType || '', 
//     status: initialFilters.status || '',  
//     vendorNew4Days: initialFilters.vendorNew4Days || false
//   });

//   useEffect(() => {
//     dispatch(fetchProducts(filters));
//     dispatch(fetchCategories());
//     dispatch(fetchBrands());
//   }, [filters, dispatch]);

//   const handleInputChange = (e) => {
//     setFilters({
//       ...filters,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleUpdateStatus = async (product) => {
//     const newStatus = product.status === 'approved' ? 'pending' : 'approved';

//     const result = await Swal.fire({
//       title: 'Are you sure?',
//       text: `Do you want to ${newStatus === 'approved' ? 'approve' : 'set as pending'} this product?`,
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes',
//       cancelButtonText: 'No',
//     });
  
//     if (result.isConfirmed) {
//       try {
//         await dispatch(updateProductStatus({ productId: product._id, status: newStatus })).unwrap();
//         Swal.fire('Success', `Product status updated to ${newStatus}!`, 'success');
//       } catch (error) {
//         Swal.fire('Error', 'Failed to update product status. Please try again.', 'error');
//       }
//     }
//   };

//   const handleDeleteProduct = async (productId) => {
//     const result = await Swal.fire({
//       title: 'Are you sure?',
//       text: "You won't be able to revert this!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, delete it!',
//       cancelButtonText: 'No, cancel!',
//     });

//     if (result.isConfirmed) {
//       try {
//         await dispatch(deleteProduct(productId)).unwrap();
//         Swal.fire('Deleted!', 'Your product has been deleted.', 'success');
//       } catch (error) {
//         Swal.fire('Error', 'Failed to delete product. Please try again.', 'error');
//       }
//     }
//   };

//   const handlePageChange = (pageNumber) => {
//     setFilters((prevFilters) => ({ ...prevFilters, page: pageNumber }));
//   };

//   return (
//     <>
//       <FilterForm
//         categories={categories}
//         brands={brands}
//         filters={filters}
//         onInputChange={handleInputChange}
//       />
//       <Suspense fallback={<LoadingSpinner />}>
//         <ProductTable
//           products={products}
//           onUpdateStatus={handleUpdateStatus}
//           onDeleteProduct={handleDeleteProduct}
//           totalDocs={totalDocs}
//           limit={limit}
//           totalPages={totalPages}
//           currentPage={currentPage}
//           hasPrevPage={hasPrevPage}
//           hasNextPage={hasNextPage}
//           onPageChange={handlePageChange}
//         />
//       </Suspense>
//     </>
//   );
// };

// export default InHouseProductList;
