<template>
  <section>
    <div class="select-amount">
      <i :class="[{hidden:cartCount<=0},reduceClass]" @click.prevent="reduce"></i>
      <input type="number" readonly :class="{hidden:cartCount<=0}" v-model="cartCount">
      <i class="cdicon-add" @click.prevent="add"></i>
    </div>
  </section>
</template>

<script>
  import {mapMutations} from 'vuex';
  export default {
    name: 'calculation',
    data () {
      return {
        //cal_dishe: this.dishe,
        reduceClass: 'cdicon-dec',
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
    }

  }
</script>
<style lang="scss" scoped>
  @import '../../src/style/calculation';
</style>
