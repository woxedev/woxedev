<template>
   <div>
      <img class="mb-2" :src="src" :alt="alt" />
      <p class="mt-0 text-xs text-center text-neutral-500">
         {{ alt }}
      </p>
   </div>
</template>

<script setup lang="ts">
defineProps<{
   src: string;
   alt?: string;
}>();
</script>
