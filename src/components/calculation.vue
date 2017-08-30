<template>
  <div class="select-amount">
    <!--<i :class="[{hidden:cartCount<=0},reduceClass]" @click.prevent="reduce"></i>-->
    <i class="cdicon-dec" v-visibility="cartCount>0" @click.prevent="reduce"></i>
    <input type="number" v-visibility="cartCount>0" v-model="cartCount" readonly>
    <i class="cdicon-add" @click.prevent="add"></i>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex';
  export default {
    name: 'calculation',
    data () {
      return {
        //reduceClass: 'cdicon-dec',
      }
    },
    props: {
      dishe: Object,
    },
    methods: {
      ...mapMutations([
        'ADD_CART',
        'REDUCE_CART'
      ]),
      add: function () {
        let dishe = this.dishe;
        this.ADD_CART({
          dishTypeId: dishe.dishTypeId,
          dishId: dishe.dishId,
          dishName: dishe.dishName,
          price: dishe.price
        });
      },
      reduce: function () {
        let dishe = this.dishe;
        this.REDUCE_CART({dishTypeId: dishe.dishTypeId, dishId: dishe.dishId});

        //购物车中减为空的时候关闭购物车
        if (this.$store.getters.cartListArr.length === 0) {
          this.$store.state.cartVisible = false;
        }
      }
    },
    computed: {
      cartCount: function () {
        let cart = this.$store.getters.cartListArr;
        let dishId = this.dishe.dishId;
        let count = 0;
        cart.forEach(item => {
          if (item['dishId'] == dishId) {
            count = item['count'];
          }
        });
        return count;
      }
    },
    directives: {
//      visibility: {
//        bind: function (el,binding) {
//          if (typeof binding.value == "boolean") {
//            if (binding.value === true) {
//              el.style.visibility = "visible";
//            } else {
//              el.style.visibility = "hidden";
//            }
//          }
//        },
//        update: function (el, binding) {
//          if (typeof binding.value == "boolean") {
//            if (binding.value === true) {
//              el.style.visibility = "visible";
//            } else {
//              el.style.visibility = "hidden";
//            }
//          }
//        }
//      }
        visibility:function (el, binding) {
          if (typeof binding.value == "boolean") {
            if (binding.value === true) {
              el.style.visibility = "visible";
            } else {
              el.style.visibility = "hidden";
            }
          }
        }
    }

  }
</script>
<style lang="scss" scoped>
  @import '../../src/style/calculation';
</style>
