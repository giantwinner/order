<template>
  <div class="cart-module">
    <div :class="[isShow?layerIn:layerOut,containerClass]">
      <div :class="[isShow?layerVisible:'',layerOverlay]" @click="toggleCart"></div>
      <div class="shopping-cart-list">
        <div class="top">
          <span>购物车</span>
          <div class="clear-cart" @click="CLEAR_CART">
            <i class="cdicon-empty"></i>清空
          </div>
        </div>
        <ul>{{cartList}}
            <template v-for="dishes in cartList">
              <li :key="dishes.dishId" v-if="dishes.count>0">
                <div class="goods-name">
                  {{dishes.dishName}}
                </div>
                <div class="total-money">￥{{dishes.price}}</div>
                <calculation :dishe="dishes"/>
              </li>
            </template>
        </ul>
      </div>
    </div>
    <div :class="[{empty:cTotalCount===0},shoppingCart]">
      <div class="cart-icon" @click="toggleCart">
        <span class="amount" v-show='cTotalCount>0'>{{cTotalCount}}</span>
        <i class="cdicon-gwc"></i>
      </div>
      <div class="total">共￥<span>{{cTotalPrice}}</span></div>
      <a href="" class="to-checout">去结算</a>
    </div>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  import calculation from '../../src/components/calculation';
  export default {
    name: 'shoppingCart',
    data () {
      return {
        isShow: false,
        layerIn: 'layer-in',
        layerOut: 'layer-out',
        containerClass: "shopping-cart-list-container",
        layerOverlay: "layer-overlay",
        layerVisible: "layer-overlay-visible",
        shoppingCart: "shopping-cart",
        totalCount: 0,
        totalPrice: 0,
        cartDatas: this.data,
      }
    },
    methods: {
      ...mapMutations([
        'CLEAR_CART',
      ]),
      toggleCart: function () {
        if (this.totalCount > 0) {
          this.isShow = !this.isShow;
        }
      },
      clearCart: function () {
        this.cartDatas.forEach(function (disheType, index1) {
          disheType.dishes.forEach(function (dishe, index2) {
            dishe['cartCount'] = 0;
          });
        });
        this.isShow = false;
      },
    },
    components: {
      calculation
    },
    computed: {
      ...mapState(['cartList']),
      cTotalCount: function () {
        this.totalCount=1;
        return 1;
      },
      cTotalPrice: function () {

        return 0;
      }
    },

  }
</script>
<style lang="scss" scoped>
  @import '../../src/style/shopping_cart';
</style>
