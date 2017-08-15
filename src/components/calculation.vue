<template>
  <section>
    <div class="select-amount">
      <i :class="[{hidden:cal_dishe.cartCount<=0},reduceClass]" @click.prevent="reduce"></i>
      <input type="number" readonly :class="{hidden:cal_dishe.cartCount<=0}" v-model="cal_dishe.cartCount">
      <i class="cdicon-add" @click.prevent="add"></i>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'calculation',
    data () {
      return {
        cal_dishe: this.dishe,
        reduceClass: 'cdicon-dec',
      }
    },
    props: {
      dishe: Object
    },
    methods: {
      add: function () {
        this.cal_dishe.cartCount++;
        this.$emit('cartCountChange', this.cal_dishe);

      },
      reduce: function () {
        if (this.cal_dishe.cartCount > 0) {
          this.cal_dishe.cartCount--;
          this.$emit('cartCountChange', this.cal_dishe);
        }
      }

    },

  }
</script>
<style lang="scss" scoped>
  @import '../../src/style/calculation';
</style>
