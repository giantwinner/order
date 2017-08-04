<template>

                        <div class="goods-wrap" id="wrapper" ref="goodsList">
                            <div class="content-inner">
                                <template v-for="disheType in goodsList">
                                    <ul class="goods-list">
                                        <div class="kind-type-wrap"> 
                                            <h1 class="kind-type">{{disheType.dishTypeName}}({{disheType.dishes.length}})</h1></div>
                                              <template v-for="dishe in disheType.dishes"> 
                                                  <li>
                                                        <img :src="pic(dishe.pic)" alt="" class="pic">
                                                        <div class="name">{{dishe.dishName}}</div>
                                                        <div class="price"><i>￥</i>{{dishe.price}}</div>
                                                        <calculation :dishe="dishe"   @cartCountChange="cartCountChange"/>
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
      goodsList:this.data,
    }

  },
  methods: {
    pic: function (url) {
    var palceholderImg='/static/images/list_placeholder.png';
      return url===null||url.length===0?palceholderImg:url;
    },
   
    cartCountChange:function(data){
         this.$emit('cartCountChange',data);
    }
     ,initScroll:function(){
      this.goodsListScroll = new BScroll(this.$refs.goodsList, {
                    probeType: 3,
                    deceleration: 0.001,
                    bounce: false,
                    swipeTime: 2000,
                    click: true,
      });
       console.log(this.goodsListScroll)
      this.goodsListScroll.on('scroll', (pos) => {
                        //scrollY接收变量
                       
                        this.scrollY = Math.abs(Math.round(pos.y));
                    })
    }
  },

    components: {
        calculation
    },
    props:['data'],
   created(){
      this.$parent.$on('selectDishtType',(index)=>{

        var el=document.getElementsByClassName('goods-list')[index];
        console.log(el);

         this.goodsListScroll.scrollToElement(el,300); 
      })
   },
   mounted(){
    this.$nextTick(() => {
                            this.initScroll();
                        })
   }
  ,watch:{
    data:function(){
      this.goodsList=this.data;
      this.$nextTick(() => {
                            this.goodsListScroll.refresh();
                        })
    }
  }
}
</script>

<style lang="scss" scoped> 
@import '../style/menu_list.scss';
</style>
