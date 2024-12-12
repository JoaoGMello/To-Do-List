<script lang="ts">
import { defineComponent } from "vue";
import InputText from 'primevue/inputtext';

const name = 'FormInputText'

export default defineComponent({
  name, 

  emits: [ 'update:modelValue', 'change', 'input', 'blur', 'actionButton' ],

  components: {
    InputText,
  }, 

  props: {
    modelValue: {},

    disabled: {
      type: Boolean,
      default: false
    },

    errorMessage: {
      type: String,
      default: ''
    },

    maxLength: {
      type: Number,
      default: null
    },

    inputLabel: {
      type: String,
      default: ''
    },

    labelColor: {
      type: String,
      default: '#505050'
    },

    fontLabel: {
      type: String,
      default: 'Poppins Regular'
    },

    weightLabel: {
      type: String,
      default: '500'
    },

    inputTextColor: {
      type: String,
      default: 'var(--black)'
    },

    inputFont: {
      type: String,
      default: 'Poppins Regular'
    },

    inputTextWeight: {
      type: String,
      default: '400'
    },

    backgroundInput: {
      type: String,
      default: 'transparent'
    },

    hasBorder: {
      type: Boolean,
      default: true
    },

    borderColor: {
      type: String,
      default: '#BEBEBE'
    },

    squareBorder: {
      type: Boolean,
      default: true
    },

    padding: {
      type: String,
      default: ''
    },

    placeholder: {
      type: String,
      default: ''
    },

    placeholderColor: {
      type: String,
      default: '#C9C9C9'
    },
  },

  mounted() {
    this.internalValue = this.modelValue as any
  },

  updated() { },

  data() {
    return {
      internalValue: null
    }
  },

  methods: {
    updateVModel(eventName: any, event: Event) {
      this.$emit('update:modelValue', this.internalValue)
      this.$emit(eventName, event)
    },
  },

  computed: {
    _placeholder(): string {
      return this.disabled ? '' : this.placeholder
    },
  }, 
 
  watch: {
    modelValue(newValue) {
      this.internalValue = newValue;
    },
  },
});
</script>

<template>
  <div class="w-full h-max">
    <div
      class="w-full note1:text-[0.8rem] note2:text-[0.82rem] monitor1:text-[0.95rem] mb-[0.4rem] input-label"
    >
      {{ inputLabel }}
    </div>
    
    <div class="flex gap-2">
      <InputText
        class="w-full"
        :class="{ 'p-invalid': errorMessage }"
        v-model="internalValue"
        :disabled="disabled"
        :placeholder="_placeholder"
        :maxlength="maxLength"
        @change="updateVModel('change', $event)"
        @input="updateVModel('input', $event)"
        @blur="updateVModel('blur', $event)"
      />
    </div>
  </div>
</template>

<style scoped>
.input-label {
  color: v-bind('labelColor');
  font-weight: v-bind('weightLabel');
}

.sub-label {
  font-weight: v-bind('weightLabel');
}


.p-inputtext {
  background-color: v-bind('backgroundInput') !important;
  color: v-bind('inputTextColor') !important;
  font-weight: v-bind('inputTextWeight') !important;
  padding: v-bind('padding ? padding : "0.5rem 0.2rem 0.5rem 1rem"') !important;
  border: v-bind('hasBorder ? `1px solid ${errorMessage ? `var(--inputInvalidColor)` : `${borderColor}`}` : "none"') !important;
  border-radius: v-bind('squareBorder ? "0.28rem" : "0.5rem"') !important;
}

.p-inputtext::placeholder {
  color: v-bind('placeholderColor') !important;
}
</style>
