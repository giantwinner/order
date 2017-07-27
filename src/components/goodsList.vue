<template>

                        <div class="goods-wrap" id="wrapper">
                            <div class="content-inner">
                                <template v-for="disheType in disheTypes">
                                    <ul class="goods-list">
                                        <div class="kind-type-wrap"> 
                                            <h1 class="kind-type">{{disheType.dishTypeName}}({{disheType.dishes.length}})</h1></div>
                                              <template v-for="dishe in disheType.dishes"> 
                                                  <li>
                                                         <img :src="pic(dishe.pic)" alt="" class="pic">
                                                        <div class="name">{{dishe.dishName}}</div>
                                                        <div class="price"><i>￥</i>{{dishe.price}}</div>
                                                         <calculation :dishe="dishe" @countChange="countChange"/>
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
         "disheTypes": [
                    {
                    "dishTypeId": "1",
                    "dishTypeName": "湘菜",
                   "dishes": [
                                {
                                    "dishId": "20170720160334153750472182894826",
                                    "dishName": "鱼香肉丝",
                                    "dishTypeId": "",
                                    "dishTypeName": "",
                                    "id": "",
                                    "itemActivity": {
                                        "outBizNo": "20170721112251127154148946723957",
                                        "voucherWorthValue": 1.00
                                    },
                                    "pic": "http://p.yunzongnet.com/yzbmp/M00/04/61/rBIyFFlwYnGAQqHZAAEptQCLnrc937.jpg",
                                    "price": 21.00,
                                    
                                },
                                {
                                    "dishId": "20170720160334153750472182894827",
                                    "dishName": "宫保鸡丁",
                                    "dishTypeId": "",
                                    "dishTypeName": "",
                                    "id": "",
                                    "itemActivity": {
                                        "outBizNo": "20170721112251127154148946723957",
                                        "voucherWorthValue": 1.00
                                    },
                                    "pic": "http://p.yunzongnet.com/yzbmp/M00/04/61/rBIyFFlwYnGAQqHZAAEptQCLnrc937.jpg",
                                    "price": 22.00,
                                    
                                }
                            
                        ]
                    }
                ],
                "cartDatas":[],
    }

  },
  methods: {
    pic: function (url) {
    var palceholderImg='/static/images/list_placeholder.png';
      return url===null||url.length===0?palceholderImg:url;
    },
    formateCartData:function(data){
      return{'dishId':data['dishId'],'dishName':data['dishName'],'price':data['price'],'currentCount':data['currentCount']};
    },
    countChange:function(changedCount){//购物车数据变化
        console.log('changedCount');
        var cartHas=false;
        this.cartDatas.forEach( function(cartEle, index) {
            if(cartEle['dishId']===changedCount['dishId']){
                cartEle['currentCount']=changedCount['currentCount'];//修改购物车数据
                cartHas= true;
            }
        });
        console.log('cartHas:'+cartHas);
        if(!cartHas){
           this.cartDatas.push(this.formateCartData(changedCount));//添加到购物车
        }
        this.$parent.$emit('cartChange',this.cartDatas);
    },
  },
    components: {
        calculation
    },
}
</script>

<style lang="scss" scoped> 
@import '../style/menu_list.scss';
</style>
