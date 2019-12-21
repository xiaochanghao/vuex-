<template>
  <div>
    this is counter
    <br /><br>
    <button @click="minusCount(3)">-</button>&nbsp;&nbsp;&nbsp;
    <button @click="addCount(4)">+</button>

    <!-- 取值 -->
    <p>state count : {{count}}</p>
    <p>getters count : {{count}}</p>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapState("counter", ["count"]),
    ...mapGetters("counter", {
      count: "getCounter"
    })
  },
  methods: {
    ...mapMutations("counter", {
      addCount: "add"
    }),
    ...mapActions("counter", {
      minusCount: "asyncMinus"
    })
  }
};
</script>

<style>
</style>