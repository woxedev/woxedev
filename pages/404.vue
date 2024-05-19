<template>
   <div class="flex items-center justify-center h-screen">
      <div class="text-center">
         <h1 class="text-4xl font-bold text-neutral-900">404</h1>
         <p class="mb-2 text-lg text-neutral-600">The page you're looking for doesn't exist.</p>
         <a href="/" class="mt-4 text-lg text-primary-500 hover:text-primary-600">Go back to home</a>
      </div>
   </div>
</template>

<script setup lang="ts">
useHead({
   meta: [
      {
         name: "robots",
         content: "noindex",
      },
   ],
});
</script>
