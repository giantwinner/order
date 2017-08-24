export default {
  cartListArr: state => {
    let arr=[];
    let cartList=state.cartList;
    Object.keys(cartList).forEach(disheTypeId=>{
      Object.keys(cartList[disheTypeId]).forEach(disheId=>{
        arr.push(cartList[disheTypeId][disheId][disheId]);
      });
    });
    return arr;
  },
}
