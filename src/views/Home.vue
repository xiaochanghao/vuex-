<template>
  <div class="home">
   <button @click="add(5)">+</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <button @click="minusCount(3)">-</button>
  </div>
</template>

<script>
import {mapMutations,mapActions} from 'vuex'
export default {
  name: 'home',
  methods:{
    ...mapMutations([
      'add'
    ]),
    ...mapActions({
      minusCount:'asyncMinus'
    })
    
    
  }
}
</script>
