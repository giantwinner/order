<template>
           <div class="type-left-side"  >
                    <div id="left-side-wrapper">
                        <ul class="content-inner">
                        <template v-for="dishType in disheTypes">
                           <li v-if="dishType.isDiscount" class="selected"><i class="cdicon-hot"></i>{{dishType.dishTypeName}}</li>
                            <li v-else>{{dishType.dishTypeName}}</li>
                        </template>
                        </ul>
                    </div>
                </div>
</template>
 
<script>
export default {
  name: 'dishTypeList',
  data () {
    return {
    disheTypes:this.data
    }
  },
   props:['data'],
}
</script>
<style lang="scss" scoped>
 @import '../../src/style/dishTypeList';
</style>
