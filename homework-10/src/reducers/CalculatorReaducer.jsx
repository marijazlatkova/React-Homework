const initialState = {
  a: "",
  b: "",
  operation: "+",
  result: "",
};

const CalculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NUMBER":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "SET_OPERATION":
      return {
        ...state,
        operation: action.payload,
      };
    case "CALCULATE_RESULT":
      const a = Number(state.a);
      const b = Number(state.b);
      let result;

      switch (state.operation) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          if (b !== 0) {
            result = a / b;
          } else {
            result = "Division by zero is not allowed";
          }
          break;
        default:
          result = "Invalid Operation";
      }

      return {
        ...state,
        result,
      };

    default:
      return state;
  }
};

export default CalculatorReducer;
