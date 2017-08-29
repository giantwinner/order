<template>
  <div class="menu-list">
    <div class="scroll-view" style="">
      <dishTypeList :data="disheTypes"/>
      <div class="page-body">
        <div class="menu-list-container">
          <goodsList :data="disheTypes"/>
        </div>
      </div>
      <shopping-cart></shopping-cart>
    </div>
  </div>
</template>

<script>
  import shoppingCart from '../../src/components/shoppingCart';
  import goodsList from '../../src/components/goodsList';
  import dishTypeList from '../../src/components/dishTypeList';
  import Vue from 'vue';
  import VueResource from 'vue-resource';
  import {mapMutations} from 'vuex';
  Vue.use(VueResource);
  export default {
    name: 'menuList',
    data () {
      return {
        "disheTypes": [],
      }
    },
    components: {
      goodsList,
      shoppingCart,
      dishTypeList,
    },
    methods: {
      ...mapMutations([
        'INIT_CARTDATA'
      ]),
    },
    created(){
      let _self = this;
      this.$http.get('../../static/data.json').then((res) => {
          if (res.statusText === 'OK') {
            res.data.resultObject.disheTypes.forEach(function (ele, index) {
              ele.dishes.forEach(function (dishe, index) {
                dishe['cartCount'] = 0;
              });
            });
            _self.disheTypes = res.data.resultObject.disheTypes;
            window.localStorage.setItem("data",JSON.stringify(_self.disheTypes));
          }
        }
      );
      this.INIT_CARTDATA();
    },
  }
</script>
<style lang="scss" scoped>
  @import '../style/menu_list.scss';
</style>
