<script setup>
import { defineProps } from "vue";
const props = defineProps(["errors", "field"]);
</script>

<template>
  <ul
    v-if="props?.errors?.value?.[props.field]?.length"
    class="error-list"
  >
    <li v-for="message in props.errors.value[props.field]" :key="message">
      {{ message }}
    </li>
  </ul>
</template>

<style>
.error-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  color: #dc2626;
  margin-top: 0.25rem;
  font-size: 0.875rem;
}
</style>
