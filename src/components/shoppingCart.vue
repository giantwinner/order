<template>
  <div class="cart-module">
    <div :class="[cartVisible?layerIn:layerOut,containerClass]">
      <div :class="[cartVisible?layerVisible:'',layerOverlay]" @click="toggleCart"></div>
      <div class="shopping-cart-list">
        <div class="top">
          <span>购物车</span>
          <div class="clear-cart" @click="CLEAR_CART">
            <i class="cdicon-empty"></i>清空
          </div>
        </div>
        <ul>
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
    <div :class="[{empty:totalCount===0},shoppingCart]">
      <div class="cart-icon" @click="toggleCart">
        <span class="amount" v-show='totalCount>0'>{{totalCount}}</span>
        <i class="cdicon-gwc"></i>
      </div>
      <div class="total">共￥<span>{{totalPrice}}</span></div>
      <a href="" class="to-checout">去结算</a>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapMutations, mapState} from 'vuex';
  import calculation from '../../src/components/calculation';
  export default {
    name: 'shoppingCart',
    data () {
      return {
        layerIn: 'layer-in',
        layerOut: 'layer-out',
        containerClass: "shopping-cart-list-container",
        layerOverlay: "layer-overlay",
        layerVisible: "layer-overlay-visible",
        shoppingCart: "shopping-cart",
      }
    },
    methods: {
      ...mapMutations([
        'CLEAR_CART',
      ]),
      toggleCart: function () {
        if (this.totalCount > 0) {
          this.$store.state.cartVisible = !this.$store.state.cartVisible;
        }
      },
    },
    components: {
      calculation
    },
    computed: {
      ...mapGetters({cartList: 'cartListArr'}),
      cartVisible: function () {
        return this.$store.state.cartVisible;
      },
      totalCount: function () {
        let num = 0;
        this.cartList.forEach(item => {
          if (item['count']) {
            num += item['count'];
          }
        });
        return num;
      },
      totalPrice: function () {
        let money = 0;
        this.cartList.forEach(item => {
          if (item['price'] && item['count']) {
            money += item['price'] * item['count'];
          }
        });
        return money;
      }
    },

  }
</script>
<style lang="scss" scoped>
  @import '../../src/style/shopping_cart';
</style>
