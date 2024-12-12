<script lang="ts">
import FormInputText from "@/components/molecules/Inputs/FormInputText.vue";
import { defineComponent } from "vue";
import Card from "../Card/Card.vue";
import PrimaryButton from "../PrimaryButton/PrimaryButton.vue";
import TaskClass from "@/classes/TaskClass";
const name = 'AddTask'

export default defineComponent({
  name,

  components: { FormInputText, Card, PrimaryButton }, 

  props: { },

  mounted () { 
    this.tasksList = JSON.parse(localStorage.getItem('TasksList') || '[]') as { title: string; description: string; id: string; concluded: false }[];
  },

  updated () { },

  data () {
    return {
      task: new TaskClass(),
      tasksList: [] as Array<TaskClass>
    }
  },

  methods: { 
    createTask() {
      this.task.id = ''
      this.task.id = Math.random().toString(16).slice(2)
      this.tasksList.push(this.task)
      localStorage.setItem('TasksList', JSON.stringify(this.tasksList));
      this.$router.push('/tasks-list')
    }
  },

  computed: { }, 

});
</script>

<template>
  <Card
    padding="15px"
  >
    <template #content>
      <div class="flex flex-col gap-5">
        <div>
          <FormInputText
            class="model"
            input-label="Título"
            placeholder="Digite o título da atividade"
            font-label="Poppins Medium"
            v-model="task.title"
          />
        </div>

        <div>
          <FormInputText
            class="model"
            input-label="Descrição"
            placeholder="Digite uma breve descrição da atividade"
            font-label="Poppins Medium"
            v-model="task.description"
          />
        </div>

        <div class="note1:h-[35px] monitor1:h-[42px] w-[16rem] note1:my-2">
          <PrimaryButton
            text="Adicionar Tarefa"
            text-color="#ffffff"
            button-color="#60a5fa"
            hover-color="#4d9bfa"
            weight-text="bold"
            rounding="30px"
            @click="createTask()"
          />
        </div>
      </div>
    </template>
  </Card>
</template>


<style scoped>

</style>
