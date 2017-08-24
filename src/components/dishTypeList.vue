<template>
  <div class="type-left-side">
    <div id="left-side-wrapper" ref="leftWrapper">
      <ul class="content-inner">
        <li v-for="(dishType,index) in disheTypes" :class="{selected:$store.state.dishTypeIndex===index}"
            @click="SELECT_DISTYPE({index:index})">{{dishType.dishTypeName}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import {mapState,mapMutations} from 'vuex';
  export default {
    name: 'dishTypeList',
    data () {
      return {
        selected: 'selected',
        disheTypes: this.data,
      }
    },
    props: ['data'],
    methods: {
      ...mapMutations([
        'SELECT_DISTYPE',
      ]),
      selectDishtType: function (index) {
       // this.dishTypeIndex = index;
        this.SELECT_DISTYPE({index:index});
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
