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
          <template v-for="cartData in cartDatas">
            <template v-for="dishes in cartData.dishes">
              <li :key="dishes.dishId" v-if="dishes.cartCount>0">
                <div class="goods-name">
                  {{dishes.dishName}}
                </div>
                <div class="total-money">￥{{dishes.price}}</div>
                <calculation :dishe="dishes" @cartCountChange="cartCountChange"/>
              </li>
            </template>
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
      cartCountChange: function (data) {
        this.$emit('cartCountChange', data);
      },
    },
    props: ['data'],
    components: {
      calculation
    },
    computed: {
      cTotalCount: function () {
        var self = this;
        self.totalCount = 0;
        if (this.data.length) {
          this.data.forEach(function (disheType, index1) {
            disheType.dishes.forEach(function (dishe, index2) {
              self.totalCount += dishe['cartCount'];
            });
          });
        }

        if (self.totalCount === 0) {
          this.isShow = false;
        }
        return this.totalCount;
      },
      cTotalPrice: function () {
        var self = this;
        this.totalPrice = 0;
        if (this.data.length) {
          this.data.forEach(function (disheType, index1) {
            disheType.dishes.forEach(function (dishe, index2) {
              self.totalPrice += dishe['price'] * dishe['cartCount'];
            });
          });
        }
        return this.totalPrice;
      }
    },
    watch: {
      data: function () {
        this.cartDatas = this.data;
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../src/style/shopping_cart';
</style>
