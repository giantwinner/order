import {
  ADD_CART,
  REDUCE_CART,
  CLEAR_CART,
  INIT_CARTDATA,
} from './mutation-types.js'

export default {

  [ADD_CART](state, {
    dishTypeId,
    dishId,
    dishName,
    price,
  }) {
    let cart = state.cartList;
    let dishType = cart[dishTypeId] = (cart[dishTypeId] || {});
    let item = dishType[dishId] = (dishType[dishId] || {});
    if (item[dishId]) {
      item[dishId]['count']++;
    } else {
      item[dishId] = {
        "count": 1,
        "dishTypeId": dishTypeId,
        "dishId": dishId,
        "dishName": dishName,
        "price": price,
      };
    }
    state.cartList = {...cart};
    window.localStorage.setItem("cart", JSON.stringify(state.cartList));
  },

  [REDUCE_CART](state, {
    dishTypeId,
    dishId,
  }) {
    let cart = state.cartList;
    let dishType = (cart[dishTypeId] || {});
    let item = (dishType[dishId] || {});
    if (item && item[dishId]) {
      if (item[dishId]['count'] > 0) {
        if (item[dishId]['count'] === 1) {
          delete dishType[dishId];
        } else {
          item[dishId]['count']--;
        }
      } else {
        item[dishId] = null;
      }
    }
    state.cartList = {...cart};
    window.localStorage.setItem("cart", JSON.stringify(state.cartList));
  },

  [INIT_CARTDATA](state) {
    let cartData = window.localStorage.getItem("cart");
    if (cartData) {
      state.cartList = JSON.parse(cartData);

    }
  },
  [CLEAR_CART](state) {
    state.cartList = {};
    state.cartVisible = false;
    window.localStorage.setItem("cart", JSON.stringify(state.cartList));
  },
}
