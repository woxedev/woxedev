<template>
   <div>
      <img
         class="mb-2 mx-auto"
         :src="src"
         :alt="alt"
         :style="{
            width: size || '100%',
         }"
      />
      <p class="mt-0 text-xs text-center text-neutral-500">
         {{ alt }}
      </p>
   </div>
</template>

<script setup lang="ts">
defineProps<{
   src: string;
   size: string;
   alt?: string;
}>();
</script>
