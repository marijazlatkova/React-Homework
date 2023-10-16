import {
  UPDATE_CAKES,
  SET_QUANTITY,
  SET_MESSAGE,
  CLEAR_MESSAGE,
} from "../constants/CakeConstants";

export const updateCakes = (numOfCakes, isRestock) => {
  return {
    type: UPDATE_CAKES,
    payload: { numOfCakes, isRestock },
  };
};

export const setQuantity = (quantity) => {
  return {
    type: SET_QUANTITY,
    payload: quantity,
  };
};

export const setMessage = (message) => {
  return {
    type: SET_MESSAGE,
    payload: message,
  };
};

export const clearMessage = () => {
  return {
    type: CLEAR_MESSAGE,
  };
};
