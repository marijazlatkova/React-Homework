import {
  UPDATE_CAKES,
  SET_QUANTITY,
  SET_MESSAGE,
  CLEAR_MESSAGE,
} from "../constants/CakeConstants";

const initialState = {
  cakes: 10,
  quantity: 1,
  //? message: undefined ->
  //* da se dodade varijabla koja koga
  //? ke se klikne poveke torti
  //* nego sto ima da priakze poraka za greska
  //? pr. klik na buy 3 cakes a ima samo 2
  //* message: Not Enough cakes. Only 2 cakes left
  message: undefined,
};

const CakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CAKES:
      const { numOfCakes, isRestock } = action.payload;
      const cakes = isRestock ? numOfCakes : -numOfCakes;
      const newCakes = state.cakes + cakes;

      return {
        ...state,
        cakes: newCakes,
      };
    case SET_QUANTITY:
      return {
        ...state,
        quantity: action.payload,
      };
    case SET_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        message: undefined,
      };
    default:
      return state;
  }
};

export default CakeReducer;
