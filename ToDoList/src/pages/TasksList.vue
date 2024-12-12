<script lang="ts">
import type TaskClass from "@/classes/TaskClass";
import Task from "@/components/atoms/Task/Task.vue";
import { defineComponent } from "vue";
const name = 'TasksList'

export default defineComponent({
  name,

  components: { Task }, 

  props: { },

  mounted () { 
    this.tasksList = JSON.parse(localStorage.getItem('TasksList') || '[]') as { title: string; description: string; id: string; concluded: false }[];
  },

  updated () { },

  data () {
    return { 
      tasksList: [] as Array<TaskClass>
    }
  },

  methods: { },

  computed: { }, 

});
</script>

<template>
  <div class="container">
    <Task v-for="(i, index) in tasksList" 
      :key="index"
      :title="i.title"
      :description="i.description"
      :id="i.id"
      :concluded="i.concluded"
      @exclude="tasksList = $event"
      @conclude="tasksList = $event"
    />
  </div>
</template>


<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 2rem;
}
</style>
