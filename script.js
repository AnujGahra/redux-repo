import { combineReducers, createStore } from "redux";
import cartReducer, { addCartItem, CART_ADD_ITEM, CART_ITEM_DECREASE_QUANTITY, CART_ITEM_INCREASE_QUANTITY, decreaseItemQuantity, increaseItemQuantity } from "./cartReducer";
import wishListReducer, { addWishListItem, removeWishListItem, WISHLIST_ADD_ITEM, WISHLIST_REMOVE_ITEM } from "./wishListReducer";
import productsReducer from "./productReducer";


const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer
})


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

console.log(store);

store.dispatch(addCartItem(12));
store.dispatch(addCartItem(12, 5));
store.dispatch(increaseItemQuantity(12));
store.dispatch(decreaseItemQuantity(12));

store.dispatch(decreaseItemQuantity(12))

// const a = decreaseItemQuantity(70)
// console.log(a)

// store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 18 } });
// store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 11 } });
// store.dispatch({ type: WISHLIST_REMOVE_ITEM, payload: { productId: 11 } });
// store.dispatch({ type: WISHLIST_REMOVE_ITEM, payload: { productId: 18 } });
store.dispatch(addWishListItem(18))
store.dispatch(removeWishListItem(18))
console.log(store.getState());
