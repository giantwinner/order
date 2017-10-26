<template>
  <div class="goods-details">
    <div class="scroll-view">
      <div class="page-body">
        <div class="detail-img">
          <img :src="pic(dishe.pic)" alt="" class="goods-pic">
        </div>
        <div class="goods-details-container">
          <div class="goods-name">
            {{dishe.dishName}}
          </div>
          <div class="price-container">
            <div class="price">
              <span>￥</span>{{dishe.price}}
            </div>
            <calculation :dishe="dishe"  v-show="cartCount>0">
            </calculation>
            <div class="add-to-cart" v-show="cartCount<=0"  @click="addCart">
              加入购物车
            </div>
          </div>
          <div class="goods-info">
            <h1>商品描述</h1>
            <p>可使食无肉，不可居无竹。无肉令人瘦，无竹令人俗。人瘦尚可肥，士俗不可医。旁人笑此言，似高还似痴。若对此君仍大嚼，世间那有扬州鹤</p>
          </div>
        </div>
      </div>
      <shopping-cart></shopping-cart>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex';
  import shoppingCart from '../../src/components/shoppingCart';
  import calculation from '../../src/components/calculation';
  export default {
    name: 'goodsDetail',
    data () {
      return {
        dishe: {},
        addBtnVisible:true
      }
    },
    components: {
      calculation,
      shoppingCart,
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
    methods: {
      ...mapMutations([
        'INIT_CARTDATA',
        'ADD_CART'
      ]),
      pic: function (url) {
        var palceholderImg = '/static/images/list_placeholder.png';
        return url === null || url.length === 0 ? palceholderImg : url;
      },
      addCart:function () {
        let dishe = this.dishe;
        this.ADD_CART({
          dishTypeId: dishe.dishTypeId,
          dishId: dishe.dishId,
          dishName: dishe.dishName,
          price: dishe.price
        });
      }
    },
    created(){
      this.INIT_CARTDATA();


      let data = window.localStorage.getItem("data");
      let params = this.$router.history.current.params;
      if (params && data) {
        data = JSON.parse(data);
        let _self=this;
        data.forEach(function (dishType) {
          if (dishType['dishTypeId'] === params.dishTypeId) {
            dishType['dishes'].forEach(function (item) {
              if (item['dishId'] === params.dishId) {
                _self.dishe =item;
              }
            });
          }
        });

      }
    },
  }
</script>
<style lang="scss" scoped>
  @import '../style/goods_details.scss';
</style>
