<template>
<div class="cart-module">
                <div :class="[isShow?layerIn:layerOut,containerClass]">
                    <div :class="[isShow?layerVisible:'',layerOverlay]" @click="toggleCart"></div>
                    <div class="shopping-cart-list">
                        <div class="top"> 
                            <span>购物车</span>
                            <div class="clear-cart" @click="clearCart">
                                <i class="cdicon-empty"></i>清空
                            </div>
                        </div>
                        <ul>
                            <li>
                                <div class="goods-name">
                                    龙虾狮子头精品套餐
                                </div>
                                <div class="total-money">￥28</div>
                               <calculation />
                            </li>
                        </ul>
                    </div>
                </div>
                <div :class="[{empty:totalCount===0},shoppingCart]"> 
                    <div class="cart-icon" @click="toggleCart">

                        <span class="amount" v-show='totalCount>0'>{{totalCount}}</span>
                        <i class="cdicon-gwc"></i> 
                    </div>
                    <div class="total">共￥<span>1663.6</span></div>
                    <a href="" class="to-checout">去结算</a>
                </div>
  </div>
</template>

<script>
import calculation from '../../src/components/calculation'
export default {
  name: 'shoppingCart',
  data () {
    return {
      isShow: false,
      layerIn:'layer-in',
      layerOut:'layer-out',
      containerClass:"shopping-cart-list-container",
      layerOverlay:"layer-overlay",
      layerVisible:"layer-overlay-visible",
      shoppingCart:"shopping-cart"
    }
  },
  props:{
    totalCount:{
      type:Number,
      default:0
    }
  },
  methods:{
    toggleCart:function(){
      if(this.totalCount>0){
          this.isShow=!this.isShow;
      }
    },
    clearCart:function(){
      this.totalCount=0;
      this.isShow=false;
    }
  },
   components: {
        calculation
    },
}
</script>
<style lang="scss" scoped>
@import '../../src/style/shopping_cart';
</style>
