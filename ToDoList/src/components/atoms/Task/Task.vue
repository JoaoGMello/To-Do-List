<script lang="ts">
import { defineComponent } from "vue";
import Card from "../Card/Card.vue";
import type TaskClass from "@/classes/TaskClass";
const name = 'Task'

export default defineComponent({
  name,

  components: { Card },

  emits: ['exclude'],

  props: { 
    title: {
      type: String,
      default: ''
    },

    description: {
      type: String,
      default: ''
    },

    id: {
      type: String,
      default: ''
    },

    concluded: {
      type: Boolean,
      default: false
    },
  },

  mounted () { 
    this.tasksList = JSON.parse(localStorage.getItem('TasksList') || '[]') as { title: string; description: string; id: string; concluded: false }[];
    this.aux = this.concluded
  },

  updated () { },

  data () {
    return { 
      tasksList: [] as Array<TaskClass>,
      aux: false,
    }
  },

  methods: { 
    conclude() {
      this.aux = true
      const index = this.tasksList.findIndex(x => x.id == this.id)
      this.tasksList[index].concluded = true
      localStorage.setItem('TasksList', JSON.stringify(this.tasksList));
    },

    exclude() {
      const index = this.tasksList.findIndex(x => x.id == this.id)
      this.tasksList.splice(index, 1)
      localStorage.setItem('TasksList', JSON.stringify(this.tasksList));
      this.$emit('exclude', this.tasksList)
    }
  },

  computed: { }, 

});
</script>

<template>
  <Card
    padding="5px"
  >
    <template #content>
      <div class="flex justify-between items-center">
        <div class="info flex flex-col">
          <div class="label truncate max-w-[250px]" :class="{'concluded': aux}">{{ title }}</div>
          <div class="field truncate max-w-[250px]" :class="{'concluded': aux}">{{ description }}</div>
        </div>
  
        <div class="actions flex gap-3">
          <div class="conclude bg-lime-500 action-button" @click="conclude()"><i class="pi pi-check text-white"></i></div>
          <div class="exclude bg-red-500 action-button" @click="exclude()"><i class="pi pi-trash text-white"></i></div>
        </div>
      </div>
    </template>
  </Card>
</template>


<style scoped>
.action-button {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 100%;
}

.label {
  font-size: large;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: #454545;
}

.field {
  font-size: 14px;
  font-weight: 500;
  color: #585858;
}

.concluded {
  color: chartreuse;
}
</style>
