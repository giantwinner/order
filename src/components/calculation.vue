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
  import {mapGetters, mapMutations} from 'vuex'
  export default {
    name: 'calculation',
    data () {
      return {
        //cal_dishe: this.dishe,
        reduceClass: 'cdicon-dec',
      }
    },
    props: {
      dishe: Object
    },
    methods: {
      ...mapMutations([
        'ADD_CART',
        'REDUCE_CART'
      ]),
      add: function () {
        var dishe = this.dishe;
        this.ADD_CART({
          dishTypeId: dishe.dishTypeId,
          dishId: dishe.dishId,
          dishName: dishe.dishName,
          price: dishe.price
        });
      },
      reduce: function () {
        var dishe = this.dishe;
        this.REDUCE_CART({dishTypeId: dishe.dishTypeId, dishId: dishe.dishId});
      }
    },
    computed: {
      ...mapGetters({cartList: 'cartListArr'}),
      cartCount: function () {
        let cart = this.cartList;
        let dishId = this.dishe.dishId;
        let count = 0;
        this.cartList.forEach(item => {
          if (item[dishId] == dishId) {
            count = cart['count'];
          }
        });
        console.log(cart.count);
        return count;
      }
    }

  }
</script>
<style lang="scss" scoped>
  @import '../../src/style/calculation';
</style>
