<script lang="ts">
import { defineComponent } from "vue";
const name = 'App'

export default defineComponent({
  name,

  components: { }, 

  props: { },

  mounted () { },

  updated () { },

  data () {
    return { }
  },

  methods: { },

  computed: { }, 

});
</script>

<template>
  <div class="size-full">
    aaa
    <router-view></router-view>
  </div>
</template>


<style scoped>
html,
body,
#app {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
