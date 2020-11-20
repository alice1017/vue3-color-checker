<template>
  <section class="section">
    <div class="input-color">
      <span class="sharp">#</span>
      <input
        type="text"
        class="color"
        autocomplete="off"
        v-model="colorCode"
        @keyup="adjustCode"
        @keyup.enter="$emit('update', colorCode)"
        @focus="clearInputColor"
      />
    </div>
  </section>
</template>

<script setup="props">
import { ref } from "vue";
import { startsWith, upper } from "../modules/helpers";


export default {
  name: "ColorInput",
  props: {
    code: String
  }
}


export const colorCode = ref(props.code);


export function adjustCode() {
  colorCode.value = upper(colorCode.value);
  if (startsWith(colorCode.value, "#")) {
    colorCode.value = colorCode.value.slice(1);
  }
}

export function clearInputColor() {
  colorCode.value = "";
}
</script>
