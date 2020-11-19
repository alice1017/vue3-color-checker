<template>
  <section class="section color-references">
    <div class="columns refs">
      <div class="column">
        <p class="ref forground dark-background">
          forground in dark background
        </p>
      </div>
      <div class="column">
        <p class="ref background dark-forground">
          background on dark forground
        </p>
      </div>
    </div>
    <div class="columns refs">
      <div class="column">
        <p class="ref forground white-background">
          forground in white background
        </p>
      </div>
      <div class="column">
        <p class="ref background white-forground">
          background on white forground
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
export default {
  name: "ColorReferences"
}
</script>
