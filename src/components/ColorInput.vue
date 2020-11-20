<template>
  <section class="section">
    <div class="input-color">
      <span class="sharp">#</span>
      <input
        type="text"
        class="color"
        autocomplete="off"
        v-model="colorCode"
        @keyup="upperCase"
        @keyup.enter="$emit('update', colorCode)"
        @focus="clearInputColor"
      />
    </div>
  </section>
</template>

<script setup="props">
import { ref } from "vue";
import { upper } from "../modules/helpers";


export default {
  name: "ColorInput",
  props: {
    code: String
  }
}


export const colorCode = ref(props.code);


export function upperCase() {
  colorCode.value = upper(colorCode.value);
}

export function clearInputColor() {
  colorCode.value = "";
}
</script>
