<script setup>
defineProps({
  title: {
    type: String
  },
  subtitle: {
    type: String
  }
})
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ subtitle }}</p>
  </div>
  <div>
    <slot name="content"></slot>
    <slot name="age"></slot>
  </div>
  <slot/>
</template>
