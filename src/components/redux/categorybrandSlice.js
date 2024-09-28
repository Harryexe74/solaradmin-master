

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import ApiUrl from '../../ApiUrl';

// Fetch categories
export const fetchCategories = createAsyncThunk(
  'category/fetchCategories',
  async () => {
    const response = await axios.get(`${ApiUrl}/api/categories/`);
    return response.data.docs || []; // Assuming response.data.docs contains the array of categories
  }
);

// Fetch brands
export const fetchBrands = createAsyncThunk(
  'category/fetchBrands',
  async () => {
    const response = await axios.get(`${ApiUrl}/api/brands/`);
    return response.data.doc || []; // Handle cases where response.data.docs might not be an array
  }
);

// Fetch colors
export const fetchColors = createAsyncThunk(
  'category/fetchColors',
  async () => {
    const response = await axios.get(`${ApiUrl}/api/colors/`);
    return response.data || []; // Assuming response.data.docs contains the array of colors
  }
);

export const fetchAttributes = createAsyncThunk('attributes/fetchAttributes', async () => {
  const response = await axios.get(`${ApiUrl}/api/attributes/`);
  return response.data;
});
// Fetch sub-categories by main category slug
export const fetchSubCategories = createAsyncThunk(
  'category/fetchSubCategories',
  async (mainCategorySlug) => {
    const response = await axios.get(`${ApiUrl}/api/sub-categories/main-category/${mainCategorySlug}`);
    return response.data.doc || [];  // Handle cases where response.data.docs.subCategories might not be an array
  }
);

// Fetch sub-sub-categories by sub-category slug
export const fetchSubSubCategories = createAsyncThunk(
  'category/fetchSubSubCategories',
  async (subCategorySlug) => {
    const response = await axios.get(`${ApiUrl}/api/sub-sub-categories/subcategory/${subCategorySlug}`);
    return response.data.doc || [];  // Handle cases where response.data.docs.subSubCategories might not be an array
  }
);

const initialState = {
  categories: [],
  brands: [],
  colors: [],
  attributes: [],
  subCategories: [],
  subSubCategories: [],
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch categories
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload; // Assuming payload is an array
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Fetch brands
      .addCase(fetchBrands.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload; // Assuming payload is an array
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Fetch colors
      .addCase(fetchColors.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchColors.fulfilled, (state, action) => {
        state.loading = false;
        state.colors = action.payload; // Assuming payload is an array
      })
      .addCase(fetchColors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchAttributes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAttributes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.attributes = action.payload;
      })
      .addCase(fetchAttributes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Fetch sub-categories
      .addCase(fetchSubCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSubCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.subCategories = action.payload; // Assuming payload is an array
      })
      .addCase(fetchSubCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Fetch sub-sub-categories
      .addCase(fetchSubSubCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSubSubCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.subSubCategories = action.payload; // Assuming payload is an array
      })
      .addCase(fetchSubSubCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;
