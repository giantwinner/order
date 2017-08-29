<template>

  <div class="goods-wrap" id="wrapper" ref="goodsList">
    <div class="content-inner" ref="contentInner">
      <template v-for="disheType in goodsList">
        <ul class="goods-list">
          <div class="kind-type-wrap">
            <h1 class="kind-type">{{disheType.dishTypeName}}({{disheType.dishes.length}})</h1></div>
          <template v-for="dishe in disheType.dishes">
            <li>
              <router-link :to="{ name: 'goodsDetails', params: {dishTypeId:disheType.dishTypeId,dishId: dishe.dishId} }">
                <img :src="pic(dishe.pic)" alt="" class="pic">
              </router-link>
              <div class="name">{{dishe.dishName}}</div>
                <div class="price"><i>￥</i>{{dishe.price}}</div>
                <calculation :dishe="dishe"/>
            </li>
          </template>
        </ul>
      </template>
    </div>
  </div>
</template>
<script>
  import calculation from '../../src/components/calculation';
  import BScroll from 'better-scroll';
  export default {
    name: 'goodsList',
    data () {
      return {
        goodsList: this.data,
        listHeight: [],
        scrollY: 0,
      }
    },
    methods: {
      pic: function (url) {
        var palceholderImg = '/static/images/list_placeholder.png';
        return url === null || url.length === 0 ? palceholderImg : url;
      },

      calculateHeight: function () {
        var goodsList = this.$refs.contentInner.childNodes;
        var height = 0;
        this.listHeight.push(height);

        for (var i = 0; i < goodsList.length; i++) {
          var item = goodsList[i]

          height += item.clientHeight;
          this.listHeight.push(height);
        }
      },
      initScroll: function () {
        this.goodsListScroll = new BScroll(this.$refs.goodsList, {
          probeType: 3,
          deceleration: 0.001,
          bounce: false,
          swipeTime: 2000,
          click: true,
        });
        this.goodsListScroll.on('scrollEnd', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y));
          var cindex = this.currentIndex;
          this.$parent.$emit('scrollIndex', cindex);

        })
      }
    },
    components: {
      calculation
    },
    props: ['data'],
    computed: {

      currentIndex: function () {
        for (var i = 0; i < this.listHeight.length; i++) {
          var height1 = this.listHeight[i];
          var height2 = this.listHeight[i + 1];
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            return i;
          }
        }
        return 0;
      }
    },
    created(){
      this.$parent.$on('selectDishtType', (index) => {
        var el = document.getElementsByClassName('goods-list')[index];
        this.goodsListScroll.scrollToElement(el, 300);
      })
    },
    mounted(){
      this.$nextTick(() => {
        this.initScroll();
      });
    },
    watch: {
      data: function () {
        this.goodsList = this.data;
        this.$nextTick(() => {
          this.goodsListScroll.refresh();
          this.calculateHeight();
        })
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import '../style/goods_list.scss';
</style>
