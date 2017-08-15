<template>
  <div class="goods-details">
    <div class="scroll-view">
      <div class="page-body">
        <div class="detail-img">
          <img src="images/detail_placeholder.png" alt="" class="goods-pic">
        </div>
        <div class="goods-details-container">
          <div class="goods-name">
            菜品名称
          </div>
          <div class="discount"><i>券</i><span>立减2元</span></div>
          <div class="specifications-title">规格</div>
          <ul class="specifications">
            <li class="checked">规格字段</li>
            <li>规格字段字段字</li>
            <li>规格字段</li>
            <li>规格字段</li>
            <li>规格字段字段</li>
            <li>规格字段</li>
          </ul>
          <div class="attribute-title">属性</div>
          <ul class="attribute">
            <li class="checked">属性字段</li>
            <li>属性字段字段字字段</li>
            <li>属性字段</li>
            <li>属性字段字段</li>
            <li>属性字段</li>
            <li>属性字段</li>
          </ul>
          <div class="price-container">
            <div class="price">
              <span>￥</span>48
            </div>
            <calculation :dishe="dishe" @cartCountChange="cartCountChange">
              <div class="add-to-cart" slot="addCart">
                加入购物车
              </div>
            </calculation>
          </div>
          <div class="goods-info">
            <h1>商品描述</h1>
            <p>可使食无肉，不可居无竹。无肉令人瘦，无竹令人俗。人瘦尚可肥，士俗不可医。旁人笑此言，似高还似痴。若对此君仍大嚼，世间那有扬州鹤</p>
          </div>
        </div>
      </div>
      <shopping-cart :total-count="totalCount" :data="disheTypes"></shopping-cart>
    </div>
  </div>
</template>

<script>
  import shoppingCart from '../../src/components/shoppingCart';
  import calculation from '../../src/components/calculation';
  export default {
    name: 'goodsDetail',
    data () {
      return {
        "disheTypes": [],
        "totalCount": 0,
        dishe:{}
      }
    },
    components: {
      calculation,
      shoppingCart,
    },
    methods: {
      cartCountChange: function (data) {
        this.$emit('cartCountChange', data);
      },
    },
    mounted(){
      console.log(this.$root.data);
    }
  }
</script>
<style lang="scss" scoped>
  @import '../style/goods_details.scss';
</style>
