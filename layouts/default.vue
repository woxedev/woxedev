<template>
   <Toaster />
   <div class="h-2 bg-neutral-950"></div>
   <div class="container max-w-3xl px-6 mx-auto md:p-0">
      <slot />
      <Footer />
   </div>
</template>
<script setup lang="ts">
import { Toaster } from "vue-sonner";
</script>
