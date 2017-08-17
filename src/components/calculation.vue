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
  import {mapState, mapMutations} from 'vuex'
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
        this.ADD_CART({dishTypeId:dishe.dishTypeId, dishId:dishe.dishId,dishName: dishe.dishName,price:dishe.price});
      },
      reduce: function () {
        var dishe = this.dishe;
        this.REDUCE_CART({dishTypeId:dishe.dishTypeId,dishId:dishe.dishId});
      }
    },
    computed: {
      ...mapState(['cartList']),
      cartCount: function () {
        let cart = this.cartList;
        var dishTypeId = this.dishe.dishTypeId;
        var dishId = this.dishe.dishId;
        let dishType = cart[dishTypeId] = (cart[dishTypeId] || {});
        let item = dishType[dishId] = (dishType[dishId] || {});
        if (item[dishId]) {
          return item[dishId]['count'];
        } else {
          return 0;
        }
      }
    }

  }
</script>
<style lang="scss" scoped>
  @import '../../src/style/calculation';
</style>
