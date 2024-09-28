
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import {
//   fetchCategories,
// } from '../../../components/redux/categorybrandSlice';
// import './form.css';

// const InhouseProductUpdate = () => {
//   const dispatch = useDispatch();
//   const { id } = useParams(); // Get product ID from URL params
// //    const id = "66c85fe218cc2ff2c002e421";
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


//   useEffect(() => {
//     if (id) {
//       axios
//         .get(`http://localhost:3000/api/products/${id}`)
//         .then((response) => {
//           const product = response.data.docs;
  
//           // Find the corresponding slugs for category, subcategory, and subsubcategory using their _ids
//           const selectedCategory = categories.find(category => category._id === product.category._id);
  
//           setFormData({
//             name: product.name || '',
//             description: product.description || '',
//             category: selectedCategory ? selectedCategory._id : '', // Set the slug for category
//             sku: product.sku || '',
//             price: product.price || '',
//             discountAmount: product.discountAmount || '',
//             stock: product.stock || '',
//           });
 

//           // Handle images and thumbnail if needed
//           setThumbnail(product.thumbnail);
//           setImagePreview(product.thumbnail ? `http://localhost:3000/${product.thumbnail}` : null);
//           setImages(product.images || []);
//           setImagePreviews(product.images ? product.images.map(img => `http://localhost:3000/${img}`) : []);
//         })
//         .catch((error) => {
//           console.error("There was an error fetching the product data!", error);
//         });
//     }
//   }, [id, categories ]);
  


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

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     const newPreviews = files.map((file) => URL.createObjectURL(file));
//     setImages((prevImages) => [...prevImages, ...files]);
//     setImagePreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
//   };



//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const productFormData = new FormData();

//     for (const key in formData) {
//       let value = formData[key];

//       // if (key === 'tags') {
//       //   const tagsArray = value.split(',').map((tag) => tag.trim()).filter((tag) => tag);
//       //   tagsArray.forEach((tag) => productFormData.append('tags[]', tag));


//    {
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

//            // Log form data to console
//            for (let [key, value] of productFormData.entries()) {
//             console.log(key, value);
//           }

//     try {

//       await axios.put(`http://localhost:3000/api/products/${id}`, productFormData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       alert('Product updated successfully!');
//     } catch (error) {
//       setErrorMessage(`Error updating product: ${error.message}`);
//       console.error(error);
//     }
//   };

//   const removeImage = (index) => {
//     setImages((prevImages) => prevImages.filter((_, i) => i !== index));
//   };

//   const removeThumbnail = () => {
//     setThumbnail(null);
//     setImagePreview('');
//   };


//   return (
//     <div>
//       <main id="content" role="main" className="main pointer-event">
//         <div className="content container-fluid">
//           <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
//             <h2 className="h1 mb-0 d-flex gap-2">
//               <img src="/inhouse-product-list.png" alt="" />
//               Update Product
//             </h2>
//           </div>
//           <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg space-y-4 p-10">
       

// <div className="col-12 lightshadow p-5  shadow-md  rounded-md">
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
//     {console.log("form ==========", formData.category)}
//     <select name="category" value={formData.category} 
//     onChange={handleChange} className="p-2 border rounded bg-white" required>
//       <option value="">Select Category</option>
//       {categories.map(category => (
//         <option key={category._id} value={category._id}>{category.name}</option>
//       ))}
//     </select>
//   </div>


//   <div className="flex flex-col w-full lg:w-1/3 gap-1 mt-3">
//     <label className="font-semibold">SKU</label>
//     <input type="text" name="sku" value={formData.sku} onChange={handleChange} placeholder="SKU" className="p-2 border rounded" required />
//   </div>


// <div className="col-12  p-5 flex flex-wrap  shadow-md  rounded-md">

// <div className="flex flex-col w-full lg:w-1/4 gap-1 mb-4">
//         <label className="font-semibold">Price</label>
//         <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" className="p-2 border rounded" required />
//       </div>


//       <div className="flex flex-col w-full lg:w-1/4 gap-1 mb-4">
//         <label className="font-semibold">Discount Amount</label>
//         <input type="number" name="discountAmount" value={formData.discountAmount} onChange={handleChange} placeholder="Discount Amount" className="p-2 border rounded" />
//       </div>

  

 
//  <div className="col-12  p-8 flex flex-wrap  shadow-md  rounded-md " 
//  >

//       <div className="flex flex-col w-full lg:w-1/3 gap-2">
//       <label className="font-semibold">Stock</label>
//         <input type="number" name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" className="p-2 border rounded" />
//       </div>

//       </div>



// <div className="col-12  p-5 flex flex-wrap  shadow-md  rounded-md">




// </div>
   

//     <div className="col-12 p-5 flex flex-col gap-3 shadow-md rounded-md">
//         <div className="flex flex-col gap-2">
//           <label className="font-semibold">Product Thumbnail</label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleThumbnailChange}
//             className="p-2 border rounded"
//           />
//         </div>
//         {imagePreview && (
//           <div className="flex gap-2 flex-wrap">
//             <div className="relative w-24 h-24">
//               <img
//                 src={imagePreview}
//                 alt="Thumbnail Preview"
//                 className="object-cover w-full h-full rounded-md"
//               />
//               <button
//                 type="button"
//                 onClick={removeThumbnail}
//                 className="absolute top-0 right-0 p-1 text-white bg-red-600 rounded-full"
//               >
//                 X
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Images Input and Previews */}
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
//         {imagePreviews.length > 0 && (
//           <div className="flex gap-2 flex-wrap">
//             {imagePreviews.map((preview, index) => (
//               <div key={index} className="relative w-24 h-24">
//                 <img src={preview} alt={`Preview ${index}`} className="object-cover w-full h-full rounded-md" />
//                 <button
//                   type="button"
//                   onClick={() => removeImage(index)}
//                   className="absolute top-0 right-0 p-1 text-white bg-red-600 rounded-full"
//                 >
//                   X
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//             {/* Add other fields similar to the above */}
//             <button type="submit" className="btn btn-primary">Update Product</button>
//           </form>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default InhouseProductUpdate;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { fetchCategories } from '../../../components/redux/categorybrandSlice';
import './form.css';

const InhouseProductUpdate = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); // Get product ID from URL params
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


  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3000/api/products/${id}`)
        .then((response) => {
          const product = response.data.docs;
          const selectedCategory = categories.find(category => category._id === product.category._id);
       
            
          setFormData({
            name: product.name || '',
            description: product.description || '',
            category: selectedCategory ? selectedCategory._id : '',
            sku: product.sku || '',
            price: product.price || '',
            discountAmount: product.discountAmount || '',
            stock: product.stock || '',
          });

          setThumbnail(product.thumbnail);
          setImagePreview(product.thumbnail ? `http://localhost:3000/${product.thumbnail}` : '');
          setImages(product.images || []);
          setImagePreviews(product.images ? product.images.map(img => `http://localhost:3000/${img}`) : []);
        })
        .catch((error) => {
          console.error("There was an error fetching the product data!", error);
        });
    }
  }, [id, categories]);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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

    images.forEach(image => {
      productFormData.append('images', image);
    });

    productFormData.append('userId', userId);
    productFormData.append('userType', 'admin');

    // Log form data to console
    for (let [key, value] of productFormData.entries()) {
     console.log(key, value);
   }
    try {
  
      await axios.put(`http://localhost:3000/api/products/${id}`, productFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Product updated successfully!');
    } catch (error) {
      setErrorMessage(`Error updating product: ${error.message}`);
      console.error(error);
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
              <img src="/inhouse-product-list.png" alt="Product List" />
              Update Product
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg space-y-4 p-10">
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
              {imagePreview && (
                <div className="flex gap-2 flex-wrap">
                  <div className="relative w-24 h-24">
                    <img
                      src={imagePreview}
                      alt="Thumbnail Preview"
                      className="object-cover w-full h-full rounded-md"
                    />
                    <button
                      type="button"
                      onClick={removeThumbnail}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs"
                    >
                      X
                    </button>
                  </div>
                </div>
              )}
            </div>

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
              <div className="flex gap-2 flex-wrap">
                {imagePreviews.map((preview, index) => (
                  <div key={index} className="relative w-24 h-24">
                    <img
                      src={preview}
                      alt={`Image Preview ${index}`}
                      className="object-cover w-full h-full rounded-md"
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
            </div>

            {errorMessage && (
              <div className="col-12 p-5 bg-red-100 text-red-600 rounded-md">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-2 bg-green-400 text-white rounded-md hover:bg-green-500 transition"
            >
              Update Product
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default InhouseProductUpdate;
