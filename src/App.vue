<template>
  <section class="app hero is-fullheight">
    <div class="hero-body">
      <div class="container">

        <header class="section">
          <h1 class="title header-title">
            VUE3 COLOR CHECKER
          </h1>
        </header>

        <color-input :code="inputColor" @update="updateColor" />

        <color-references />

        <color-histories :histories="separatedHistories" @reborn="rebornColor"/>

      </div>
    </div>
  </section>
</template>

<script setup>
import ColorInput from "./components/ColorInput.vue";
import ColorReferences from "./components/ColorReferences.vue";
import ColorHistories from "./components/ColorHistories.vue";
import { ref, computed } from "vue";
import chroma from "chroma-js";
import { setSharp, upper, range } from "./modules/helpers";


const defaultColor = "#a8dadc";
const blackColor = "#444444";
const whiteColor = "#efefef";
const whiteBrightColor = "#ffffff";


export default {
  name: "App",
  components: {
    ColorInput,
    ColorReferences,
    ColorHistories
  }
}

export const bgColor = ref(defaultColor);
export const inputColor = ref("A8DADC");
export const histories = ref([
  defaultColor,
  "#0081a7",
  "#00afb9",
  "#fdfcdc",
  "#fed9b7",
]);



export const lightness = computed(() => {
  const L = chroma(bgColor.value).get("hsl.l");
  return Math.floor(L * 100) / 100;
});

export const contentColor = computed(() => {
  return lightness.value < 0.6 ? whiteColor : blackColor;
});

export const separatedHistories = computed(() => {
  const result = [];
  const total = histories.value.length;
  const arrays = Math.round(total / 5);
  const items = 5 * arrays;
  const remains = total - items;
  //console.log(total, arrays, items, remains)
  let start = 0;
  let end = 5;

  const updatedHistories = histories.value.map(color => {
    const isDup = bgColor.value === color;
    return { code: color, dup: isDup};
  });

  for (const i of range(arrays)) {
    result.push(
      updatedHistories.slice(start, end)
    );
    start = end;
    end = start + 5;
  }
  result.push(
    updatedHistories.slice(total-remains, total)
  );
  return result;
});



export function updateColor(colorCode) {
  console.log("updateColor", colorCode);
  if (colorCode !== "") {
    const newColor = setSharp(colorCode);
    try {
      chroma(newColor);
      bgColor.value = newColor;
      histories.value.push(newColor);
    }
    catch {
      return;
    }
  }
}

export function rebornColor(code) {
  bgColor.value = code;
  inputColor.value = upper(code).slice(1);
}
</script>

<style vars="{ bgColor, contentColor }">
</style>
