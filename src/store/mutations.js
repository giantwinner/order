import {
  ADD_CART,
  REDUCE_CART,
  CLEAR_CART,
  SELECT_DISTYPE,
} from './mutation-types.js'

// import {setStore, getStore} from '../config/mUtils'

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
    // //存入localStorage
    // setStore('buyCart', state.cartList);
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
        // //存入localStorage
        // setStore('buyCart', state.cartList);
      } else {
        item[dishId] = null;
      }
    }
    state.cartList = {...cart};
  },
  [SELECT_DISTYPE](state, {
    index,
  }) {
    state.dishTypeIndex = index;
  },
  // //网页初始化时从本地缓存获取购物车数据
  // [INIT_BUYCART](state) {
  //   let initCart = getStore('buyCart');
  //   if (initCart) {
  //     state.cartList = JSON.parse(initCart);
  //   }
  // },
  //清空当前商品的购物车信息
  [CLEAR_CART](state) {
    state.cartList = {};
    state.cartVisible = false;
    //setStore('buyCart', state.cartList);
  },
}
