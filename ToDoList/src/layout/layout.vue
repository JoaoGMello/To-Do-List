<script lang="ts">
import SideBar from "@/components/organisms/SideBar/SideBar.vue";
import { defineComponent } from "vue";
const name = 'layout'

export default defineComponent({
  name,

  components: { SideBar }, 

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
  <div class="flex bg-[#F2F2F2] h-full w-full">
    <div class="w-[25%]">
      <SideBar/>
    </div>
    <div class="size-full p-5">
      <router-view></router-view>
    </div>
  </div>
</template>


<style scoped>
.content {
  overflow-y: scroll;
}
</style>
