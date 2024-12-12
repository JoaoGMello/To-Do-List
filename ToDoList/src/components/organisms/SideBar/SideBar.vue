<script lang="ts">
import PrimaryButton from "@/components/atoms/PrimaryButton/PrimaryButton.vue";
import { defineComponent } from "vue";
const name = 'SideBar'

export default defineComponent({
  name,

  components: { PrimaryButton }, 

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
  <div class="size-full bg-blue-400">
    <div class="flex flex-col items-center p-10 gap-5">
      <div class="text-white font-bold text-5xl text-center">Lista de Tarefas</div>
      <div>
        <div class="note1:h-[35px] monitor1:h-[42px] w-[16rem] note1:my-2">
          <PrimaryButton
            text="Ver Tarefas"
            text-color="#60a5fa"
            button-color="#ffffff"
            hover-color="#f7f7f7"
            weight-text="bold"
            rounding="30px"
          />
        </div>

        <div class="note1:h-[35px] monitor1:h-[42px] w-[16rem] note1:my-2">
          <PrimaryButton
            text="Adicionar Tarefa"
            text-color="#60a5fa"
            button-color="#ffffff"
            hover-color="#f7f7f7"
            weight-text="bold"
            rounding="30px"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>
