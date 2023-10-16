import { useSelector, useDispatch } from "react-redux";
import {
  updateCakes,
  setQuantity,
  setMessage,
  clearMessage,
} from "../actions/CakeActions";

export const Cake = () => {
  const dispatch = useDispatch();
  const { cakes, quantity, message } = useSelector(
    (state) => state.CakeReducer
  );

  return (
    <div id="cake">
      <h2>Cakes: {cakes}</h2>
      {message && <p>{message}</p>}
      <input
        type="number"
        value={quantity === 0 ? "" : quantity}
        onChange={(e) => {
          const newQuantity = Number(e.target.value);
          dispatch(setQuantity(newQuantity));
          dispatch(
            newQuantity < 0
              ? setMessage("Quantity must be a non-negative number")
              : newQuantity > cakes
              ? setMessage(
                  `Not Enough cakes. Only ${cakes} Cake${
                    cakes !== 1 ? "s" : ""
                  } left`
                )
              : clearMessage()
          );
        }}
      />
      <input
        type="button"
        value={`Buy ${quantity} Cake${quantity !== 1 ? "s" : ""}`}
        onClick={() => {
          quantity > 0 && quantity <= cakes
            ? (dispatch(updateCakes(quantity, false)),
              dispatch(
                setMessage(
                  `Bought ${quantity} Cake${quantity !== 1 ? "s" : ""}`
                )
              ))
            : dispatch(
                setMessage("Invalid quantity. Please enter a valid quantity.")
              );
        }}
      />
      <input
        type="button"
        value={`Restock ${quantity} Cake${quantity !== 1 ? "s" : ""}`}
        onClick={() => {
          quantity >= 0
            ? (dispatch(updateCakes(quantity, true)),
              setMessage(
                `${quantity} Cake${
                  quantity !== 1 ? "s" : ""
                } have been restocked.`
              ))
            : dispatch(
                setMessage("Invalid quantity. Please enter a valid quantity")
              );
        }}
      />
    </div>
  );
};
