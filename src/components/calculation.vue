<template>

                                <div class="select-amount">
                                    <i :class="[{hidden:self_count<=0},reduceClass]"  @click="reduce"></i>
                                    <input type="number" readonly :class="{hidden:self_count<=0}" v-model="self_count">
                                    <i class="cdicon-add" @click="add"></i>
                                </div>
                           
</template>
 
<script>
export default {
  name: 'calculation',
  data () {
    return {
     self_count:this.count,
     reduceClass:'cdicon-dec',
    }
  },
  props:{
    totalCount:{
      type:Number,
      default:0,
    },
    count:{
      type:Number,
      default:0,
    },
    dishe:Object
  },
  methods:{
    add:function(){
          this.self_count++;
          this.dishe['currentCount']=this.self_count;
          this.dishe['changedCount']=1;
          this.$emit('countChange',this.dishe);
    },
    reduce:function(){
      if(this.self_count>0){
          this.self_count--;
           this.dishe['currentCount']=this.self_count;
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
