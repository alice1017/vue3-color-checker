<template>
  <section class="section color-histories">
    <template v-for="(colors, i) of histories" :key="i" >
      <div class="history-items">
        <template v-for="(color, j) of colors" :key="j">
          <div :class="{item: true, dup: color.dup}" :style="'background:'+color.code" @click="$emit('reborn', color.code)"></div>
        </template>
      </div>
    </template>
  </section>
</template>

<script setup>
export default {
  name: "ColorHistories",
  props: {
    histories: Array
  }
}
</script>
