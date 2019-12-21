<template>
  <div>
      <input type="text" v-model="name"> <br>
      <button @click="saveName(name)">提交</button>

      <hr>
      <p>name is {{myName}}</p>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  data(){
    return {
      name:''
    }
  },
  computed:{
    ...mapGetters('user',{
      myName:'getUserName'
    })
  },
  methods:{
    ...mapActions('user',{
      saveName:'asyncSetUserName'
    })
  }
}
</script>

<style>

</style>