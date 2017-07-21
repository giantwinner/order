<template>

                                <div class="select-amount">
                                    <i :class="[{hidden:count<=0},reduceClass]"  @click="reduce"></i>
                                    <input type="number" readonly :class="{hidden:count<=0}" v-model="count">
                                    <i class="cdicon-add" @click="add"></i>
                                </div>
                           
</template>
 
<script>
export default {
  name: 'calculation',
  data () {
    return {
     count:0,
     reduceClass:'cdicon-dec',
    }
  },
  props:{
    totalCount:{
      type:Number,
      default:0,
    },
    dishe:Object
  },
  methods:{
    add:function(count){
          this.count++;
          this.dishe['currentCount']=this.count;
          this.dishe['changedCount']=1;
          this.$emit('countChange',this.dishe);
    },
    reduce:function(){
      if(this.count>0){
          this.count--;
           this.dishe['currentCount']=this.count;
           this.dishe['changedCount']=-1;
           this.$emit('countChange',this.dishe);
      }
    }
  },
}
</script>
<style lang="scss" scoped>
 @import '../../src/style/calculation';
</style>
