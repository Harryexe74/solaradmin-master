

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import ApiUrl from '../../ApiUrl';


// Fetch orders with optional filters
export const fetchOrder = createAsyncThunk(
  'vendorOrder/fetchOrdersForVendor',
  async (searchParams, { rejectWithValue }) => {
    try {
      const url = `${ApiUrl}/api/orders/`;
      const response = await axios.get(url, { params: searchParams });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Fetch orders with optional filters
export const fetchOrdersWithFilters = createAsyncThunk(
  'vendorOrder/fetchOrdersForVendor',
  async (searchParams, { rejectWithValue }) => {
    try {
      const url = `${ApiUrl}/api/orders/`;
      const response = await axios.get(url, { params: searchParams });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// Fetch order by ID
export const fetchOrderById = createAsyncThunk(
  'vendorOrder/fetchOrderById',
  async (orderId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${ApiUrl}/api/orders/${orderId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Update order status
export const updateOrderStatus = createAsyncThunk(
  'orders/updateOrderStatus',
  async ({ orderId, status }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${ApiUrl}/api/orders/${orderId}/status`, { status });
      return { orderId, status: response.data.status };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// Delete order
export const deleteOrder = createAsyncThunk(
  'vendorOrder/deleteOrder',
  async (orderId) => {
    await axios.delete(`${ApiUrl}/api/orders/${orderId}`);
    return orderId;
  }
);

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

const vendorOrderSlice = createSlice({
  name: 'vendorOrder',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch orders
      .addCase(fetchOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Update order status
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        const { orderId, status } = action.payload;
        state.orders = state.orders.map((order) =>
          order._id === orderId ? { ...order, orderStatus: status } : order
        );
      })
      // Delete order
      .addCase(deleteOrder.fulfilled, (state, action) => {
        const orderId = action.payload;
        state.orders = state.orders.filter((order) => order._id !== orderId);
      })
      // Fetch order by ID
      .addCase(fetchOrderById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOrderById.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = state.orders.map((order) =>
          order._id === action.payload._id ? action.payload : order
        );
      })
      .addCase(fetchOrderById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default vendorOrderSlice.reducer;



