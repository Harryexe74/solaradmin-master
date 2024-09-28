// ////////////////////// correct 
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCategories } from
//     '../../../components/redux/categorybrandSlice';

//     import 'react-quill/dist/quill.snow.css';
// import { createProduct } from 
// '../../../components/redux/product/productSlice';
// import ReactQuill from 'react-quill';
// import './form.css'
// const AddNewProduct = () => {
//   const dispatch = useDispatch();
//   const { user } = useSelector(state => state.auth);
//    const userId = user._id
//   const { categories } = useSelector((state) => state.category);

//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     category: '',
//     sku: '',
//     price: '',
//     discountAmount: '',    
//     stock: '',
//   });

//   const [thumbnail, setThumbnail] = useState(null);
//   const [images, setImages] = useState([]);
//   const [imagePreview, setImagePreview] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [imagePreviews, setImagePreviews] = useState([]);


//   useEffect(() => {
//     dispatch(fetchCategories());
//   }, [dispatch]);

//   useEffect(() => {
//     if (formData.category) {
//       dispatch(fetchSubCategories(formData.category));
//     }
//   }, [dispatch, formData.category]);




//   const handleDescriptionChange = (value) => {
//     setFormData({
//       ...formData,
//       description: value,
//     });
//   };

//   const handleThumbnailChange = (e) => {
//     const file = e.target.files[0];
//     setThumbnail(file);
//     const reader = new FileReader();
//     reader.onloadend = () => setImagePreview(reader.result);
//     reader.readAsDataURL(file);
//   };

//   // const handleImageChange = (e) => {
//   //   const files = Array.from(e.target.files);
//   //   setImages(files);
//   // };


//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     const newPreviews = files.map(file => URL.createObjectURL(file));
    
//     setImages(prevImages => [...prevImages, ...files]);
//     setImagePreviews(prevPreviews => [...prevPreviews, ...newPreviews]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const productFormData = new FormData();

//     for (const key in formData) {
//       let value = formData[key];

    
//         switch (key) {
//           case 'price':
//           case 'discountAmount':
   
//           case 'stock':
//             value = parseFloat(value) || 0;
//             break;

//           default:
//             value = String(value);
//             break;
//         }

//         productFormData.append(key, value);
//       }
//     }

//     if (thumbnail) {
//       productFormData.append('thumbnail', thumbnail);
//     }

//     images.forEach((image) => {
//       productFormData.append('images', image);
//     });



//     productFormData.append('userId', userId);
//       productFormData.append('userType', 'admin');

//           // Log form data to console
//     for (let [key, value] of productFormData.entries()) {
//       console.log(key, value);
//     }
//     try {
//       console.log("form data====", productFormData)
//       await dispatch(createProduct(productFormData));
//       alert('Product added successfully!');
//     } catch (error) {
//       setErrorMessage(`Error adding product: ${error.message}`);
//       console.log(error);
//     }
//   };

//   const removeImage = (index) => {
//     setImages(prevImages => prevImages.filter((_, i) => i !== index));
//   };

//   const removeThumbnail = () => {
//     setThumbnail(null);
//     setImagePreview('');
//   };

//   return (
//         <div>
//             <main id="content" role="main" className="main pointer-event">

//                 <div className="content container-fluid">
//                     <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
//                         <h2 className="h1 mb-0 d-flex gap-2">
//                             <img src="https://6valley.6amtech.com/public/assets/back-end/img/inhouse-product-list.png" alt="" />
//                             Add New Product
//                         </h2>
//                     </div>
//     <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg space-y-4 p-10">
//       {/* Form inputs for each field */}
//       <div className="col-12 lightshadow p-5  shadow-md  rounded-md">
//       <div className="flex flex-col gap-2">
//         <label className="font-semibold">Product Name</label>
//         <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" className="p-2 border rounded" required />
//       </div>
   

// <div className="flex flex-col gap-2">
//                 <label className="font-semibold">Product Description</label>
//                 <ReactQuill
//                   name="description"
//                   value={formData.description}
//                   onChange={handleDescriptionChange}
//                   className="quill-editor p-2 border rounded"
//                   theme="snow"
//                   placeholder="Write the product description here..."
//                 />
//               </div>
//       </div>

// <div className="col-12  p-5 flex flex-wrap  shadow-md  rounded-md">
//   <div className="flex flex-col w-full lg:w-1/3 gap-1">
//     <label className="font-semibold">Category</label>
//     <select name="category" value={formData.category} 
//     onChange={handleChange} className="p-2 border rounded bg-white" required>
//       <option value="">Select Category</option>
//       {categories.map(category => (
//         <option key={category._id} value={category.slug}>{category.name}</option>
//       ))}
//     </select>
//   </div>


//   <div className="flex flex-col w-full lg:w-1/3 gap-1 mt-3">
//     <label className="font-semibold">SKU</label>
//     <input type="text" name="sku" value={formData.sku} onChange={handleChange} placeholder="SKU" className="p-2 border rounded" required />
//   </div>


// <div className="col-12  p-5 flex flex-wrap  shadow-md  rounded-md" 
// >

// <div className="flex flex-col w-full lg:w-1/4 gap-1 mb-4">
//         <label className="font-semibold">Price</label>
//         <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" className="p-2 border rounded" required />
//       </div>



//       <div className="flex flex-col w-full lg:w-1/4 gap-1 mb-4">
//         <label className="font-semibold">Discount Amount</label>
//         <input type="number" name="discountAmount" value={formData.discountAmount} onChange={handleChange} placeholder="Discount Amount" className="p-2 border rounded" />
//       </div>

    
//  </div>
 
//  <div className="col-12  p-8 flex flex-wrap  shadow-md  rounded-md " 
//  >


//       <div className="flex flex-col w-full lg:w-1/3 gap-2">
//       <label className="font-semibold">Stock</label>
//         <input type="number" name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" className="p-2 border rounded" />
//       </div>

//       </div>




   


// <div className="p-5">
//       <div className="col-12 p-5 flex flex-col gap-3 shadow-md rounded-md">
//         <div className="flex flex-col gap-2">
//           <label className="font-semibold">Product Images</label>
//           <input
//             type="file"
//             accept="image/*"
//             multiple
//             onChange={handleImageChange}
//             className="p-2 border rounded"
//           />
//         </div>
//         {images.length > 0 && (
//           <div className="flex gap-2 flex-wrap">
//             {images.map((image, index) => (
//               <div key={index} className="relative">
//                 <img
//                   src={URL.createObjectURL(image)}
//                   alt="Preview"
//                   className="w-20 h-20 object-cover border rounded"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => removeImage(index)}
//                   className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs"
//                 >
//                   X
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       <div className="col-12 p-5 flex flex-col gap-3 shadow-md rounded-md">
//         <div className="flex flex-col gap-2">
//           <label className="font-semibold">Product Thumbnail</label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleThumbnailChange}
//             className="p-2 border rounded"
//           />
//           {imagePreview && (
//             <div className="relative">
//               <img
//                 src={imagePreview}
//                 alt="Thumbnail Preview"
//                 className="w-20 h-20 object-cover border rounded mt-2"
//               />
//               <button
//                 type="button"
//                 onClick={removeThumbnail}
//                 className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs"
//               >
//                 X
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>


//       <div className="mt-5">
//         <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
//           Add Product
//         </button>
//       </div>
//       {console.log("error msge==============",errorMessage)}
//       {errorMessage && <p className="text-red-500">{errorMessage}</p>}
//       {/* <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button> */}
//     </form> </div> </main> </div>
//   );
// };

// export default AddNewProduct;





import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../../components/redux/categorybrandSlice';
import 'react-quill/dist/quill.snow.css';
import { createProduct } from '../../../components/redux/product/productSlice';
import ReactQuill from 'react-quill';
import './form.css';

const AddNewProduct = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const userId = user._id;
  const { categories } = useSelector((state) => state.category);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    sku: '',
    price: '',
    discountAmount: '',
    stock: '',
  });

  const [thumbnail, setThumbnail] = useState(null);
  const [images, setImages] = useState([]);
  const [imagePreview, setImagePreview] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [imagePreviews, setImagePreviews] = useState([]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDescriptionChange = (value) => {
    setFormData({
      ...formData,
      description: value,
    });
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    setThumbnail(file);
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newPreviews = files.map(file => URL.createObjectURL(file));

    setImages(prevImages => [...prevImages, ...files]);
    setImagePreviews(prevPreviews => [...prevPreviews, ...newPreviews]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productFormData = new FormData();

    for (const key in formData) {
      let value = formData[key];

      switch (key) {
        case 'price':
        case 'discountAmount':
        case 'stock':
          value = parseFloat(value) || 0;
          break;
        default:
          value = String(value);
          break;
      }

      productFormData.append(key, value);
    }

    if (thumbnail) {
      productFormData.append('thumbnail', thumbnail);
    }

    images.forEach((image) => {
      productFormData.append('images', image);
    });

    productFormData.append('userId', userId);
    productFormData.append('userType', 'admin');

    // Log form data to console
    for (let [key, value] of productFormData.entries()) {
      console.log(key, value);
    }

    try {
      await dispatch(createProduct(productFormData));
      alert('Product added successfully!');
    } catch (error) {
      setErrorMessage(`Error adding product: ${error.message}`);
      console.log(error);
    }
  };

  const removeImage = (index) => {
    setImages(prevImages => prevImages.filter((_, i) => i !== index));
    setImagePreviews(prevPreviews => prevPreviews.filter((_, i) => i !== index));
  };

  const removeThumbnail = () => {
    setThumbnail(null);
    setImagePreview('');
  };

  return (
    <div>
      <main id="content" role="main" className="main pointer-event">
        <div className="content container-fluid">
          <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
            <h2 className="h1 mb-0 d-flex gap-2">
              <img src="https://6valley.6amtech.com/public/assets/back-end/img/inhouse-product-list.png" alt="" />
              Add New Product
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg space-y-4 p-10">
            {/* Form inputs for each field */}
            <div className="col-12 lightshadow p-5 shadow-md rounded-md">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Product Name"
                  className="p-2 border rounded"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold">Product Description</label>
                <ReactQuill
                  name="description"
                  value={formData.description}
                  onChange={handleDescriptionChange}
                  className="quill-editor p-2 border rounded"
                  theme="snow"
                  placeholder="Write the product description here..."
                />
              </div>
            </div>

            <div className="col-12 p-5 flex flex-wrap shadow-md rounded-md">
              <div className="flex flex-col w-full lg:w-1/3 gap-1">
                <label className="font-semibold">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="p-2 border rounded bg-white"
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map(category => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col w-full lg:w-1/3 gap-1 mt-3">
                <label className="font-semibold">SKU</label>
                <input
                  type="text"
                  name="sku"
                  value={formData.sku}
                  onChange={handleChange}
                  placeholder="SKU"
                  className="p-2 border rounded"
                  required
                />
              </div>
            </div>

            <div className="col-12 p-5 flex flex-wrap shadow-md rounded-md">
              <div className="flex flex-col w-full lg:w-1/4 gap-1 mb-4">
                <label className="font-semibold">Price</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Price"
                  className="p-2 border rounded"
                  required
                />
              </div>

              <div className="flex flex-col w-full lg:w-1/4 gap-1 mb-4">
                <label className="font-semibold">Discount Amount</label>
                <input
                  type="number"
                  name="discountAmount"
                  value={formData.discountAmount}
                  onChange={handleChange}
                  placeholder="Discount Amount"
                  className="p-2 border rounded"
                />
              </div>
            </div>

            <div className="col-12 p-8 flex flex-wrap shadow-md rounded-md">
              <div className="flex flex-col w-full lg:w-1/3 gap-2">
                <label className="font-semibold">Stock</label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  placeholder="Stock"
                  className="p-2 border rounded"
                />
              </div>
            </div>

            <div className="p-5">
              <div className="col-12 p-5 flex flex-col gap-3 shadow-md rounded-md">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold">Product Images</label>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                    className="p-2 border rounded"
                  />
                </div>
                {images.length > 0 && (
                  <div className="flex gap-2 flex-wrap">
                    {imagePreviews.map((preview, index) => (
                      <div key={index} className="relative">
                        <img
                          src={preview}
                          alt="Preview"
                          className="w-20 h-20 object-cover border rounded"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs"
                        >
                          X
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="col-12 p-5 flex flex-col gap-3 shadow-md rounded-md">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold">Product Thumbnail</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleThumbnailChange}
                    className="p-2 border rounded"
                  />
                </div>
                {thumbnail && (
                  <div className="relative w-40 h-40">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-full object-cover border rounded"
                    />
                    <button
                      type="button"
                      onClick={removeThumbnail}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs"
                    >
                      X
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="col-12 p-5 flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
              >
                Submit
              </button>
            </div>

            {errorMessage && (
              <div className="text-red-600 text-center mt-4">
                {errorMessage}
              </div>
            )}
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddNewProduct;
