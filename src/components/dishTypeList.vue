<template>
  <div class="type-left-side">
    <div id="left-side-wrapper" ref="leftWrapper">
      <ul class="content-inner">
        <li v-for="(dishType,index) in disheTypes" :class="{selected:dishTypeIndex===index}"
            @click="selectDishtType(index)">{{dishType.dishTypeName}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  export default {
    name: 'dishTypeList',
    data () {
      return {
        selected: 'selected',
        disheTypes: this.data,
        dishTypeIndex: 0,
      }
    },
    props: ['data'],
    methods: {
      selectDishtType: function (index) {
        this.dishTypeIndex = index;
        this.$parent.$emit('selectDishtType', index);
      },
      initScroll: function () {
        this.dishtTypeScroll = new BScroll(this.$refs.leftWrapper, {
          click: true
        });
      }
    },
    mounted: function () {
      this.initScroll();
    },
    watch: {
      data: function () {
        this.disheTypes = this.data;
      }
    },
    created(){
      this.$parent.$on('scrollIndex', (cIndex) => {
        this.dishTypeIndex = cIndex;
      })
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../src/style/dishTypeList';
</style>
