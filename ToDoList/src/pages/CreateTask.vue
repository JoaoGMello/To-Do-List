<script lang="ts">
import AddTask from "@/components/atoms/AddTask/AddTask.vue";
import { defineComponent } from "vue";
const name = 'CreateTask'

export default defineComponent({
  name,

  components: { AddTask }, 

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
  <div>
    <AddTask/>
  </div>
</template>


<style scoped>

</style>
