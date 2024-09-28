

import ApiUrl from './ApiUrl';

// Category API endpoints
export const addCategory = `${ApiUrl}categories/`; // POST endpoint to add a new category
export const getCategory = `${ApiUrl}categories/`; // GET endpoint to fetch all categories
export const delCategory = `${ApiUrl}categories/`; // DELETE endpoint to delete a category
export const editCategory = `${ApiUrl}categories/`; // PUT endpoint to edit/update a category

// Sub Category API endpoints
export const addsubCategory = `${ApiUrl}sub-categories`; // POST endpoint to add a new sub-category
export const getsubCategory = `${ApiUrl}sub-categories`; // GET endpoint to fetch all sub-categories
export const delsubCategory = `${ApiUrl}sub-categories`; // DELETE endpoint to delete a sub-category
export const editsubCategory = `${ApiUrl}sub-categories`; // PUT endpoint to edit/update a sub-category

// Sub Sub Category API endpoints
export const addsubsubCategory = `${ApiUrl}sub-sub-categories`; // POST endpoint to add a new sub-sub-category
export const getsubsubCategory = `${ApiUrl}sub-sub-categories`; // GET endpoint to fetch all sub-sub-categories
export const editsubsubCategory = `${ApiUrl}sub-sub-categories`; // PUT endpoint to edit/update a sub-sub-category
export const delsubsubCategory = `${ApiUrl}sub-sub-categories`; // DELETE endpoint to delete a sub-sub-category

// Product API endpoints
export const addProduct = `${ApiUrl}products/`; // POST endpoint to add a new product
export const editProduct = `${ApiUrl}products/`; // PUT endpoint to edit/update a product
export const delProduct = `${ApiUrl}products/`; // DELETE endpoint to delete a product
export const getProduct = `${ApiUrl}products`; // GET endpoint to fetch all products
