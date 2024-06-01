<template>
   <div>
      <img v-if="image" :src="image" alt="Cover image" class="object-cover w-full h-48 rounded-xl" />
      <div class="flex items-center gap-2 mt-4 mb-1">
         <h4 class="text-lg font-medium">{{ title }}</h4>
         <span v-if="info"> — </span>
         <p v-if="info" class="text-sm text-neutral-600">
            {{ info }}
         </p>
      </div>
      <p
         :class="{
            'line-clamp-2': !disableLineClamp,
         }"
         class="text-neutral-600 [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-neutral-400"
         v-html="formatDescription(description)"
      ></p>
      <p v-if="date" class="mt-4 text-xs text-neutral-600">
         {{
            new Date(date).toLocaleString("en", {
               month: "long",
               day: "numeric",
               year: "numeric",
            })
         }}
      </p>
   </div>
</template>

<script setup lang="ts">
defineProps<{
   title: string;
   info?: string;
   /**
    * Description of the project. Supports formatted text.
    * \*\*Bold\*\* text, \*italic\* text, and \[links\]\(https://example.com\) are supported.
    */
   description: string;
   image?: string;
   date?: string;
   disableLineClamp?: boolean;
}>();
</script>
