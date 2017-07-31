<template>
<div class="page-group">
        <div class="page menu-list">
            <div class="scroll-view" style="">
                <dishTypeList :data="disheTypes" />
                <div class="page-body">
                    <div class="menu-list-container">
                        <goodsList  @cartCountChange="cartCountChange" :data="disheTypes"/>   
                    </div>
                </div> 
            <shopping-cart :total-count="totalCount" :data="disheTypes"></shopping-cart>
            </div>
        </div>
    </div>
</template>

<script>
import shoppingCart from '../../src/components/shoppingCart';
import goodsList from '../../src/components/goodsList';
import dishTypeList from '../../src/components/dishTypeList';
export default { 
  name: 'menuList', 
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
                                    "dishTypeId": "1",
                                    "dishTypeName": "湘菜",
                                    "id": "",
                                    "itemActivity": {
                                        "outBizNo": "20170721112251127154148946723957",
                                        "voucherWorthValue": 1.00
                                    },
                                    "pic": "http://p.yunzongnet.com/yzbmp/M00/04/61/rBIyFFlwYnGAQqHZAAEptQCLnrc937.jpg",
                                    "price": 21.00,
                                    "cartCount": 0,
                                    
                                },
                                {
                                    "dishId": "20170720160334153750472182894827",
                                    "dishName": "宫保鸡丁",
                                    "dishTypeId": "1",
                                    "dishTypeName": "湘菜",
                                    "id": "",
                                    "itemActivity": {
                                        "outBizNo": "20170721112251127154148946723957",
                                        "voucherWorthValue": 1.00
                                    },
                                    "pic": "http://p.yunzongnet.com/yzbmp/M00/04/61/rBIyFFlwYnGAQqHZAAEptQCLnrc937.jpg",
                                    "price": 22.00,
                                     "cartCount": 0,
                                    
                                }
                            
                        ]
                    }
                ],
                "totalCount":0
    }
  },
  components: {
        goodsList,
        shoppingCart,
        dishTypeList,
  },
  methods: {
    cartCountChange:function(changedCount){
        this.disheTypes.forEach( function(disheType, index1) {
            if(disheType['dishTypeId']===changedCount['dishTypeId']){
                disheType['dishes'].forEach( function(dish, index2) {
                  if(dish['dishId']===changedCount['dishId']){
                     dish['cartCount']=changedCount['cartCount'];
                  }
                });
            }

           
        });
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped> 
@import '../style/menu_list.scss';
</style>
