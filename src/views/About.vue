<template>
  <div>
    mapState  count 的数值是 : {{count}} <br/>
    mapGetters  count 的数值是 : {{count}}
  </div>
</template>
<script>
import {mapState,mapGetters} from 'vuex'
export default {
  computed:{
    ...mapState([
      'count'
    ]),
    ...mapGetters({
      count:'getCount'
    })
  }
}
</script>