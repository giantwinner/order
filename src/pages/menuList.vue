<template>
  <div class="menu-list">
    <div class="scroll-view" style="">
      <dishTypeList :data="disheTypes"/>
      <div class="page-body">
        <div class="menu-list-container">
          <goodsList @cartCountChange="cartCountChange" :data="disheTypes"/>
        </div>
      </div>
      <shopping-cart :data="disheTypes"></shopping-cart>
    </div>
  </div>
</template>

<script>
  import shoppingCart from '../../src/components/shoppingCart';
  import goodsList from '../../src/components/goodsList';
  import dishTypeList from '../../src/components/dishTypeList';
  import Vue from 'vue';
  import VueResource from 'vue-resource';
  Vue.use(VueResource);
  export default {
    name: 'menuList',
    data () {
      return {
        "disheTypes": [],
        "totalCount": 0,
      }
    },
    components: {
      goodsList,
      shoppingCart,
      dishTypeList,
    },
    methods: {
      cartCountChange: function (changedCount) {
        this.disheTypes.forEach(function (disheType, index1) {
          if (disheType['dishTypeId'] === changedCount['dishTypeId']) {
            disheType['dishes'].forEach(function (dish, index2) {
              if (dish['dishId'] === changedCount['dishId']) {
                dish['cartCount'] = changedCount['cartCount'];
              }
            });
          }


        });
      },
    },
    created(){
      var _self = this;
      this.$http.get('../../static/data.json').then((res) => {
          if (res.statusText === 'OK') {
            res.data.resultObject.disheTypes.forEach(function (ele, index) {
              ele.dishes.forEach(function (dishe, index) {
                dishe['cartCount'] = 0;
              });
            });
            _self.disheTypes = res.data.resultObject.disheTypes;
          }
        }
      );
    },
  }
</script>
<style lang="scss" scoped>
  @import '../style/menu_list.scss';
</style>
