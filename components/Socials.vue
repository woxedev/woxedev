<template>
   <div>
      <div class="mb-10">
         <h3 class="mb-2 text-2xl font-medium">Socials</h3>
         <p class="max-w-lg text-neutral-600">I'm active on X and Discord. You can reach me out on these platforms.</p>
      </div>
      <div class="flex gap-2.5 flex-wrap">
         <a href="https://x.com/woxedev">X (Twitter)</a>
         <a href="https://linkedin.com/in/yusuferendemir">Linkedin</a>
         <button @click="copyToClipboard('woxe')" href="">Discord</button>
         <a href="https://github.com/woxedev">Github</a>
         <a href="https://instagram.com/woxedev">Instagram</a>
      </div>
   </div>
</template>

<script setup lang="ts">
import { toast } from "vue-sonner";

const copyToClipboard = (text: string) => {
   navigator.clipboard.writeText(text);
   toast.success("Copied to clipboard: " + text, {
      dismissible: true,
      duration: 2000,
   });
};
</script>
