<script setup>
defineProps({
  title: {
    type: String,
  },
  subTitle: {
    type: String
  }
})
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <h3>{{ subTitle }}</h3>
  </div>
  <!-- <div>
    <slot name="content"></slot>
    <slot name="age"></slot>
  </div> -->
  <slot/>
</template>
