<template>

                        <div class="goods-wrap" id="wrapper">
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
  },
    components: {
        calculation
    },
    props:['data'],
}
</script>

<style lang="scss" scoped> 
@import '../style/menu_list.scss';
</style>
