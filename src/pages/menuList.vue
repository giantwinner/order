<template>
<div class="page-group">
        <div class="page menu-list">
            <div class="scroll-view" style="">
                <div class="type-left-side"  >
                    <div id="left-side-wrapper">
                        <ul class="content-inner">
                            <li class="selected"><i class="cdicon-hot"></i>特惠商品</li>
                            <li>招牌菜品1</li>
                            <li>招牌菜品2</li>
                            <li>招牌菜品3</li>
                            <li>招牌菜品4</li>
                            <li>招牌菜品5</li>
                            <li>招牌菜品6</li>
                            <li>招牌菜品7</li>
                            <li>招牌菜品8</li>
                            <li>招牌菜品9</li>
                            <li>招牌菜品10</li>
                            <li>招牌菜品11</li>
                            <li>招牌菜品12</li>
                            <li>招牌菜品13</li>
                            <li>招牌菜品14</li>
                            <li>招牌菜品15</li>
                            <li>招牌菜品16</li>
                            <li>招牌菜品17</li>
                            <li>招牌菜品18</li>
                            <li>招牌菜品19</li>
                            <li>招牌菜品20</li>
                            <li>招牌菜品21</li>
                            <li>招牌菜品22</li>
                            <li>招牌菜品23</li>
                            <li>招牌菜品24</li>
                        </ul>
                    </div>
                    
                </div>
                <div class="page-body">
                    <div class="menu-list-container">
                        <goodsList />   
                    </div>
                </div> 
            <shopping-cart :total-count="totalCount"></shopping-cart>
            </div>
        </div>
    </div>
</template>

<script>
import shoppingCart from '../../src/components/shoppingCart';
import goodsList from '../../src/components/goodsList';
export default { 
  name: 'menuList', 
  data () { 
    return {
     totalCount:1,
    }
  },
   components: {
        goodsList,
        shoppingCart
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped> 
@import '../style/menu_list.scss';
</style>
