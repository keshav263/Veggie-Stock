import { url } from "../../constants/url";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";

export const getAllProducts = (token) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${url}/admin/products-review`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      });
      if (response.status != 200) {
        throw new Error();
      }
      const responseJson = await response.json();
      dispatch({ type: GET_ALL_PRODUCTS, data: responseJson });
    } catch (error) {
      console.log(error);
    }
  };
};

export const editProductPic = (token, file, _id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${url}/admin/edit-product-pic`, {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
          "x-auth-token": token,
          "product-id": _id,
        },
        body: file,
      });
      if (response.status != 200) {
        throw new Error();
      }
      const responseJson = await response.json();
      console.log(responseJson);
      // dispatch({ type: GET_ALL_PRODUCTS, data: responseJson });
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };
};

export const editProduct = (product, token) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${url}/admin/edit-product`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify({
          _id: product._id,
          name: product.name,
          indianName: product.indianName,
          category: product.category,
          subCategory: product.subCategory,
          priceKg: product.priceKg,
          priceQty: product.priceQty,
          weightOnly: product.weightOnly,
          quantity: product.quantity,
        }),
      });
      const responseJson = await response.json();
      if (response.status != 200) {
        throw new Error();
      }
      dispatch({ type: EDIT_PRODUCT, data: responseJson });
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };
};

export const deleteProduct = (_id, token) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${url}/admin/delete-product`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify({
          _id: _id,
        }),
      });
      if (response.status != 200) {
        throw new Error();
      }
      const responseJson = await response.json();
      console.log(responseJson);
      dispatch({ type: EDIT_PRODUCT, data: _id });
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };
};

export const addProduct = (product, token) => {
  return async (dispatch) => {
    console.log(product);
    try {
      const response = await fetch(`${url}/admin/add-product`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify({
          name: product.name,
          indianName: product.indianName,
          Category: product.category,
          subCategory: product.subCategory,
          priceKg: product.priceKg,
          priceQty: product.priceQty,
          weightOnly: product.weightOnly,
          quantity: product.quantity,
        }),
      });
      const responseJson = await response.json();
      // console.log(responseJson);
      if (response.status != 200) {
        throw new Error();
      }
      // dispatch({ type: ADD_PRODUCT, data: responseJson });
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };
};

export const addProductPic = (token, file, name, Category) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${url}/admin/add-product-pic`, {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
          "x-auth-token": token,
          "product-name": name,
          "product-category": Category,
        },
        body: file,
      });
      if (response.status != 200) {
        throw new Error();
      }
      const responseJson = await response.json();
      console.log(responseJson);
      // dispatch({ type: GET_ALL_PRODUCTS, data: responseJson });
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };
};
