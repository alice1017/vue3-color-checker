<template>
  <section class="changeable-bg-color hero is-fullheight">
    <div class="container">

      <h1 class="changeable-text-color">VUE3 COLOR CHECKER</h1>

      <input
        type="text"
        placeholder=""
        autocomplete="off"
        v-model="inputColor"
        @keyup.enter="changeColor()"
        @focus="clearInputColor"
        autofocus
      />

      <ul>
        <template v-for="(color, index) in history" :key="index">
          <li @click="changeColorFromHistory(color)" class="changeable-text-color">
            {{ color }}
          </li>
        </template>
      </ul>

    </div>
  </section>
</template>

<script setup="">
import { ref, computed } from "vue";
import chroma from "chroma-js";

export default {
  name: "App",
  components: {
  }
}

const hasSharp = (str) => str.indexOf("#") === 0;
const withSharp = (str) => "#" + str;
const addSharp = (str) => hasSharp(str) ? str : withSharp(str);



export const bgColor = ref("#ffcdb2");
export const inputColor = ref("");
export const history = ref([]);



export const lightness = computed(() => {
  return chroma(bgColor.value).get("hsl.l");
});

export const textColor = computed(() => {
  const blackColor = "#333333";
  const whiteColor = "#FFFFFF";
  return lightness.value > 0.5 ? blackColor : whiteColor;
});



export function clearInputColor() {
  inputColor.value = "";
}

export function changeColor() {
  bgColor.value = inputColor.value = addSharp(inputColor.value);
  history.value.push(bgColor.value);
}

export function changeColorFromHistory(color) {
  inputColor.value = bgColor.value = addSharp(color);
}
</script>

<style vars="{ bgColor, textColor }">
.changeable-bg-color {
  background: var(--bgColor);
}
.changeable-bg-to-text {
  color: var(--bgColor)
}
.changeable-text-color {
  color: var(--textColor);
}
</style>
